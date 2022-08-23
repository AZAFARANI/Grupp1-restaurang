const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(
    {
        customerId: { type: mongoose.Types.ObjectId, required: true },
        guestCount: { type: Number, required: true },
        timestamp: { type: String, required: true },
        allergies: { type: String, required: true },
    },
    { versionKey: false }
);

const BookingModel = mongoose.model("bookings", BookingSchema);
module.exports = BookingModel;
