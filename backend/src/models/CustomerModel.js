const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
    },
    { versionKey: false }
);

const CustomerModel = mongoose.model("customers", CustomerSchema);
module.exports = CustomerModel;
