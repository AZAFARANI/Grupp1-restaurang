const express = require("express");
const utils = require("../utils");
const { default: mongoose } = require("mongoose");

const router = express.Router();

// -------------------------------------------------------
// ### MODELS ###
const CustomerModel = require("../models/CustomerModel");
const BookingModel = require("../models/BookingModel");
// -------------------------------------------------------

// -------------------------------------------------------
// ### GET ALL CUSTOMERS ###
router.get("/", utils.forceAuthorize, async (req, res) => {
    const customers = await CustomerModel.find().lean();
    res.send({
        msg: "All customers",
        customers: customers,
    });
});

// ### GET SINGLE CUSTOMER ###
router.get("/:id", async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id))
            throw "Invalid mongooseID.";
        const customer = await CustomerModel.findById(req.params.id);
        if (customer) {
            res.send({
                msg: "Found customer.",
                customer: customer,
            });
        } else {
            res.send({
                msg: "No customer found with given ID.",
            });
        }
    } catch (error) {
        res.status(400).send({
            msg: "ERROR",
            error: error,
        });
    }
});

// ### EDIT CUSTOMER ###
router.put("/:id", utils.forceAuthorize, async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id))
            throw "Invalid mongooseID.";

        const { customer } = req.body;

        utils.validateCustomer({ ...utils.BLANK_CUSTOMER, ...customer });

        const foundCustomer = await CustomerModel.findById(req.params.id);
        if (!foundCustomer)
            throw `No customer found with id: ${req.params.id}.`;

        await foundCustomer.update(customer);
        await foundCustomer.save();

        res.send({
            msg: "Updated customer.",
            customerId: foundCustomer._id,
        });
    } catch (error) {
        res.status(400).send({
            msg: "ERROR",
            error: error,
        });
    }
});

// ### DELETE CUSTOMER ###
router.delete("/:id", utils.forceAuthorize, async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id))
            throw "Invalid mongooseID.";

        const customer = await CustomerModel.findById(req.params.id);
        if (!customer) throw `No customer found with ID: ${req.params.id}.`;

        const relatedBookings = await BookingModel.find({
            customerId: customer._id,
        });
        if (relatedBookings.length <= 0) {
            await customer.delete();
            res.status(200).send({
                msg: `No bookings found related to customer. Customer object is invalid and was deleted.`,
                customer: customer,
            });
        } else {
            await customer.delete();
            await BookingModel.deleteMany({ customerId: customer._id });
            res.send({
                msg: "Deleted customer and all related bookings.",
                customer: customer,
            });
        }
    } catch (error) {
        res.status(400).send({
            msg: "ERROR",
            error: error,
        });
    }
});

// -------------------------------------------------------

module.exports = router;
