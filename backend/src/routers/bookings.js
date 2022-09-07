const express = require("express");
const utils = require("../utils");
const mailer = require("../services/Nodemailer");
const { default: mongoose } = require("mongoose");

const router = express.Router();

// -------------------------------------------------------
// ### MODELS ###
const BookingsModel = require("../models/BookingModel");
const CustomerModel = require("../models/CustomerModel");
// -------------------------------------------------------

// -------------------------------------------------------
// ### GET ALL BOOKINGS ###
router.get("/", async (req, res) => {
    const bookings = await BookingsModel.find()
        .select("-_id -customerId -allergies")
        .lean();
    res.status(200).send({
        msg: "All bookings",
        bookings: bookings,
    });
});

router.get("/all", utils.forceAuthorize, async (req, res) => {
    const bookings = await BookingsModel.find().populate("customerId").lean();
    res.status(200).send({
        msg: "All bookings",
        bookings: bookings,
    });
});

// ### GET SINGLE BOOKING ###
router.get("/:id", utils.forceLoggedInOrOwnBooking, async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id))
            throw "Invalid mongooseID.";
        const booking = await BookingsModel.findById(req.params.id).populate(
            "customerId"
        );
        if (booking) {
            res.send({
                msg: "Found booking",
                booking: booking,
            });
        } else {
            res.send({
                msg: "No booking found with given ID.",
            });
        }
    } catch (error) {
        res.status(400).send({
            msg: "ERROR",
            error: error,
        });
    }
});

// ### CREATE BOOKING ###
router.post("/", async (req, res) => {
    try {
        const { booking } = req.body;

        utils.validateBooking(booking);

        // ### Check if we have reaccuring customer ###
        let customer = await CustomerModel.findOne({
            email: booking.email,
        }).lean();

        if (!customer) {
            // Else create new customer
            const newCustomer = new CustomerModel({
                firstName: booking.firstName,
                lastName: booking.lastName,
                email: booking.email,
                phone: booking.phone,
            });

            await newCustomer.save();
            customer = newCustomer;
        }
        // ### Create new booking ###
        const newBooking = new BookingsModel({
            customerId: customer._id,
            guestCount: booking.guestCount,
            timestamp: booking.timestamp,
            allergies: booking.allergies,
        });

        await newBooking.save();

        mailer
            .sendMail(customer.email, newBooking)
            .then(async (result) => {
                // newBooking.mailId = result
                // await newBooking.save();
                if (result.status === 400) {
                    await newBooking.delete();
                    res.status(400).send({
                        msg:
                            "Failed to send confirmation email to " +
                            customer.email,
                        error: error,
                    });
                } else {
                    res.send({
                        msg: "Created booking",
                        bookingId: newBooking._id,
                        result: result,
                    });
                }
            })
            .catch(async (error) => {
                await newBooking.delete();
                res.status(400).send({
                    msg:
                        "Failed to send confirmation email to " +
                        foundBooking.customer.email,
                    error: error,
                });
            });

        // ### SEND CONFIRMATION MAIL ###
    } catch (error) {
        res.status(400).send({
            msg: "ERROR",
            error: error,
        });
    }
});

// ### EDIT BOOKING ###
router.put("/:id", utils.forceLoggedInOrOwnBooking, async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id))
            throw "Invalid mongooseID.";

        const { booking } = req.body;

        utils.validateAllowedPropertiesBooking(booking);
        utils.validateBooking({ ...utils.BLANK_BOOKING, ...booking });

        const foundBooking = await BookingsModel.findById(req.params.id);
        if (!foundBooking) throw "No booking found with id " + req.params.id;

        if (utils.hasCustomerChanges(booking)) {
            const customer = Object.assign({}, booking);
            if (customer.allergies) delete customer.allergies;
            utils.validateCustomer({ ...utils.BLANK_CUSTOMER, ...customer });

            const foundCustomer = await CustomerModel.findById(
                foundBooking.customerId
            );
            if (!foundCustomer)
                throw `No customer found with id: ${req.params.id}.`;

            await foundCustomer.updateOne(customer);
            await foundCustomer.save();
        }
        await foundBooking.updateOne({ allergies: booking.allergies });
        await foundBooking.save();

        const updatedBooking = await BookingsModel.findById(req.params.id);
        const customer = await CustomerModel.findById(
            updatedBooking.customerId
        );
        mailer
            .sendMail(
                customer.email,
                updatedBooking,
                "/templates/EmailEdited.hbs"
            )
            .then(async (result) => {
                if (result.status === 400) {
                    res.status(400).send({
                        msg:
                            "Failed to send confirmation email to " +
                            customer.email +
                            ", but booking was update.",
                        error: error,
                    });
                } else {
                    res.send({
                        msg: "Updated booking",
                        bookingId: updatedBooking._id,
                        result: result,
                    });
                }
            })
            .catch(async (error) => {
                await newBooking.delete();
                res.status(400).send({
                    msg:
                        "Failed to send confirmation email to " +
                        customer.email,
                    error: error,
                });
            });
    } catch (error) {
        console.log(error);
        res.status(400).send({
            msg: "ERROR",
            error: error,
        });
    }
});

// ### DELETE BOOKING ###
router.delete("/:id", utils.forceLoggedInOrOwnBooking, async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id))
            throw "Invalid mongooseID.";

        const bookingToDelete = await BookingsModel.findById(
            req.params.id
        ).populate("customerId");

        if (!bookingToDelete) throw "No booking found with ID" + req.params.id;

        console.log(bookingToDelete.customerId.email);

        mailer
            .sendMail(
                bookingToDelete.customerId.email,
                bookingToDelete,
                "/templates/EmailDeleted.hbs"
            )
            .then(async (result) => {
                if (result.status === 400) {
                    res.status(400).send({
                        msg:
                            "Failed to send confirmation email to " +
                            bookingToDelete.customerId.email,
                        error: error,
                    });
                } else {
                    await bookingToDelete.delete();
                    res.send({
                        msg: "Deleted booking",
                        bookingId: bookingToDelete._id,
                        result: result,
                    });
                }
            })
            .catch(async (error) => {
                res.status(400).send({
                    msg:
                        "Failed to send confirmation email to " +
                        bookingToDelete.customerId.email,
                    error: error,
                });
            });
    } catch (error) {
        console.log("ERROR:\n\n", error);
        res.status(400).send({
            msg: "ERROR",
            error: error,
        });
    }
});

// -------------------------------------------------------

module.exports = router;
