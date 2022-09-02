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
        .select("-hashedPassword")
        .lean();
    // const bookings = await BookingsModel.find().select("-customerId").lean();
    res.send({
        msg: "All personal",
        personal: personal,
    });
});

// ### GET SINGLE EMPLOYEE ###
router.get("/:id", utils.forceAuthorize, async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id))
            throw "Invalid mongooseID.";
        const employee = await PersonalModel.findById(req.params.id).select(
            "-hashedPassword"
        );
        if (employee) {
            res.send({
                msg: `Found ${employee.firstName}.`,
                employee: employee,
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

// ### CREATE EMPLOYEE ###
router.post("/", utils.forceAdmin, async (req, res) => {
    try {
        const { employee } = req.body;

        utils.validatePersonal({ ...utils.BLANK_PERSONAL, ...employee });

        const person = await PersonalModel.findOne({ email: employee.email });
        if (person) {
            res.send({
                msg: "You are already registered.",
            });
        } else {
            const newPersonal = new PersonalModel({
                firstName: employee.firstName,
                lastName: employee.lastName,
                email: employee.email,
                phone: employee.phone,
                hashedPassword: utils.hashPassword(employee.password),
                role: "staff",
            });

            await newPersonal.save();
            res.send({
                msg: "Created employee successfully!",
                employee: {
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

// ### EDIT EMPLOYEE ###
router.put("/:id", utils.forceAdmin, async (req, res) => {
    try {
        const { employee } = req.body;

        utils.validateAllowedPropertiesPersonal(employee);
        utils.validatePersonal({ ...utils.BLANK_PERSONAL, ...employee });

        if (!mongoose.Types.ObjectId.isValid(req.params.id))
            throw "Invalid personal ID.";
        const employeeToEdit = await PersonalModel.findById(req.params.id);
        if (!employeeToEdit) throw "No employee found with ID " + req.params.id;

        if (Object.keys(employee).includes("password")) {
            const newHashedPassword = utils.hashPassword(employee.password);
            delete employee.password;
            employee.hashedPassword = newHashedPassword;
        }

        await employeeToEdit.update(employee);
        await employeeToEdit.save();

        res.send({
            msg: "Updated employee " + employeeToEdit.firstName,
            employeeId: employeeToEdit._id,
        });

        // ### SEND CONFIRMATION MAIL ###
    } catch (error) {
        res.status(400).send({
            msg: "ERROR",
            error: error,
        });
    }
});

// ### DELETE EMPLOYEE ###
router.delete("/:id", utils.forceAdmin, async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id))
            throw "Invalid ID provided.";

        const employee = await PersonalModel.findById(req.params.id).select(
            "-hashedPassword"
        );

        if (!employee) throw "No personal found with Id " + req.params.id;

        await employee.delete();

        res.send({
            msg: `Deleted personal ${employee.firstName} ${employee.lastName}`,
            employee: employee,
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
                res.cookie("TramontoToken", accessToken);
                res.status(200).send({
                    msg: `Logged in successfully as ${personal.firstName}!`,
                });
            }
            // ### HANDLE INCORRECT PASSWORD ###
            else {
                res.status(400).send({
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
    res.clearCookie("TramontoToken");
    res.send({
        msg: "Logout successful!",
    });
});
// -------------------------------------------------------

module.exports = router;
