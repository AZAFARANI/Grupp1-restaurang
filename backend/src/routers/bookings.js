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
    const bookings = await BookingsModel.find().populate("customerId").lean();
    // const bookings = await BookingsModel.find().select("-customerId").lean();
    res.send({
        msg: "All bookings",
        bookings: bookings,
    });
});

// ### GET SINGLE BOOKING ###
router.get("/:id", async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id))
            throw "Invalid mongooseID.";
        const booking = await BookingsModel.findById(req.params.id);
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
                res.send({
                    msg: "Created booking",
                    booking: newBooking,
                    result: result,
                });
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

        utils.validateAllowedProperties(booking);
        utils.validateBooking({ ...utils.BLANK_BOOKING, ...booking });

        const foundBooking = await BookingsModel.findById(req.params.id);
        if (!foundBooking) throw "No booking found with id " + req.params.id;

        await foundBooking.update(booking);
        await foundBooking.save();

        res.send({
            msg: "Updated booking.",
            changedBookingId: foundBooking._id,
        });
    } catch (error) {
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

        const deletedBooking = await BookingsModel.findByIdAndDelete(
            req.params.id
        );
        if (!deletedBooking) throw "No booking found with ID" + req.params.id;
        res.send({
            msg: "Deleted booking.",
            result: deletedBooking,
        });
    } catch (error) {
        res.status(400).send({
            msg: "ERROR",
            error: error,
        });
    }
});

// -------------------------------------------------------

module.exports = router;
