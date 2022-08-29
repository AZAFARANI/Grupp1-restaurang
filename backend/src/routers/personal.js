require("dotenv").config();
const jwt = require("jsonwebtoken");
const express = require("express");
const utils = require("../utils");
const mailer = require("../services/Nodemailer");
const { default: mongoose } = require("mongoose");

const router = express.Router();

// -------------------------------------------------------
// ### MODELS ###
// const BookingsModel = require("../models/BookingModel");
// const CustomerModel = require("../models/CustomerModel");
const PersonalModel = require("../models/PersonalModel");
// -------------------------------------------------------

// -------------------------------------------------------
// ### GET ALL PERSONAL ###
router.get("/", utils.forceAuthorize, async (req, res) => {
    const personal = await PersonalModel.find()
        .select("-hashedPassword -role")
        .lean();
    // const bookings = await BookingsModel.find().select("-customerId").lean();
    res.send({
        msg: "All personal",
        personal: personal,
    });
});

// ### GET SINGLE PERSONAL ###
router.get("/:id", utils.forceAuthorize, async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id))
            throw "Invalid mongooseID.";
        const personal = await PersonalModel.findById(req.params.id).select(
            "-hashedPassword -role"
        );
        if (personal) {
            res.send({
                msg: `Found ${personal.firstName}`,
                personal: personal,
            });
        } else {
            res.send({
                msg: "No personal found with given ID.",
            });
        }
    } catch (error) {
        res.status(400).send({
            msg: "ERROR",
            error: error,
        });
    }
});

// ### CREATE PERSONAL ###
router.post("/", utils.forceAdmin, async (req, res) => {
    try {
        const { personal } = req.body;

        utils.validatePersonal({ ...utils.BLANK_PERSONAL, ...personal });

        const person = await PersonalModel.findOne({ email: personal.email });
        if (person) {
            res.send({
                msg: "You are already registered.",
            });
        } else {
            const newPersonal = new PersonalModel({
                firstName: personal.firstName,
                lastName: personal.lastName,
                email: personal.email,
                phone: personal.phone,
                hashedPassword: utils.hashPassword(personal.password),
                role: "staff",
            });

            await newPersonal.save();
            res.send({
                msg: "Created personal successfully!",
                personal: {
                    firstName: newPersonal.firstName,
                    lastName: newPersonal.lastName,
                    email: newPersonal.email,
                    phone: newPersonal.phone,
                    role: newPersonal.role,
                    _id: newPersonal._id,
                },
            });
        }
    } catch (error) {
        res.status(400).send({
            msg: "ERROR",
            error: error,
        });
    }
});

// ### EDIT PERSONAL ###
router.put("/:id", utils.forceAdmin, async (req, res) => {
    try {
        const { personal } = req.body;

        utils.validateAllowedPropertiesPersonal(personal);
        utils.validatePersonal({ ...utils.BLANK_PERSONAL, ...personal });

        if (!mongoose.Types.ObjectId.isValid(req.params.id))
            throw "Invalid personal ID.";
        const personalToEdit = await PersonalModel.findById(req.params.id);
        if (!personalToEdit) throw "No personal found with ID " + req.params.id;

        if (Object.keys(personal).includes("password")) {
            const newHashedPassword = utils.hashPassword(personal.password);
            delete personal.password;
            personal.hashedPassword = newHashedPassword;
        }

        await personalToEdit.update(personal);
        await personalToEdit.save();

        res.send({
            msg: "Updated personal " + personalToEdit.firstName,
            changedPersonalId: personalToEdit._id,
        });

        // ### SEND CONFIRMATION MAIL ###
    } catch (error) {
        res.status(400).send({
            msg: "ERROR",
            error: error,
        });
    }
});

// ### DELETE PERSONAL ###
router.delete("/:id", utils.forceAdmin, async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id))
            throw "Invalid ID provided.";

        const personal = await PersonalModel.findById(req.params.id).select(
            "-hashedPassword"
        );

        if (!personal) throw "No personal found with Id " + req.params.id;

        await personal.delete();

        res.send({
            msg: `Deleted personal ${personal.firstName} ${personal.lastName}`,
            result: personal,
        });
    } catch (error) {
        res.status(400).send({
            msg: "ERROR",
            error: error,
        });
    }
});

// ### LOGIN ###
router.post("/login", async (req, res) => {
    try {
        const { credentials } = req.body;

        utils.validateCredentials(credentials);

        const personal = await PersonalModel.findOne({
            email: credentials.email,
        });

        // ### IF NO PERSONAL FOUND WITH EMAIL ###
        if (!personal) {
            res.status(400).send({
                msg: "Login failed...",
                error: "No personal found.",
            });
        } else {
            // ### WE FOUND USER, CHECK PASSWORD ###
            if (
                utils.comparePassword(
                    credentials.password,
                    personal.hashedPassword
                )
            ) {
                const userData = {
                    _id: personal._id,
                    firstName: personal.firstName,
                    lastName: personal.lastName,
                    email: personal.email,
                    phone: personal.phone,
                    role: personal.role,
                };
                const accessToken = jwt.sign(userData, process.env.JWT_SECRET);
                res.cookie("token", accessToken);
                res.send({
                    msg: `Logged in successfully as ${personal.firstName}!`,
                });
            }
            // ### HANDLE INCORRECT PASSWORD ###
            else {
                res.send({
                    msg: "Login failed...",
                    error: "Incorrect password or email.",
                });
            }
        }
    } catch (error) {
        res.status(400).send({
            msg: "ERROR",
            error: error,
        });
    }
});
// -------------------------------------------------------

// -------------------------------------------------------
// ### LOGOUT ###
router.post("/logout", utils.forceAuthorize, (req, res) => {
    res.clearCookie("token");
    res.send({
        msg: "Logout successful!",
    });
});
// -------------------------------------------------------

module.exports = router;
