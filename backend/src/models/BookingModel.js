const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(
    {
        customerId: {
            type: mongoose.Types.ObjectId,
            required: true,
            ref: "customers",
        },
        guestCount: { type: Number, required: true },
        timestamp: { type: String, required: true },
        allergies: { type: String, required: true },
        mailId: { type: String, required: false },
    },
    { versionKey: false }
);

const BookingModel = mongoose.model("bookings", BookingSchema);
module.exports = BookingModel;
