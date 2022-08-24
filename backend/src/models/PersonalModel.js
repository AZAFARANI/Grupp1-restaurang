const mongoose = require("mongoose");

const PersonalSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        hashedPassword: { type: String, required: true },
        role: { type: String, required: true },
    },
    { versionKey: false }
);

const PersonalModel = mongoose.model("personal", PersonalSchema);
module.exports = PersonalModel;
