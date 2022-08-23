const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
});

const CustomerModel = mongoose.model("customers", CustomerSchema);
module.exports = CustomerModel;
