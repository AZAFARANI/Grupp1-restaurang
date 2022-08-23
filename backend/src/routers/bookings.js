const express = require("express");
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
    const bookings = await BookingsModel.find().lean();
    res.send({
        msg: "All bookings",
        bopkings: bookings,
    });
});

// ### GET SINGLE BOOKING ###
router.get("/:id", async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id))
            throw "Invalid ID.";
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
        const { firstName, lastName, guestCount, email, timestamp, allergies } =
            req.body;
    } catch (error) {
        res.status(400).send({
            msg: "ERROR",
            error: error,
        });
    }
});

// -------------------------------------------------------

module.exports = router;
