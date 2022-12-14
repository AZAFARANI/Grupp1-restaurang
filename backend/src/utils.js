require("dotenv").config();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const BookingModel = require("./models/BookingModel");
const { default: mongoose } = require("mongoose");

const emailRegexp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const BLANK_BOOKING = {
    firstName: "NONE",
    lastName: "NONE",
    email: "NONE@NONE.com",
    phone: "NONE",
    guestCount: 1,
    allergies: "NONE",
    timestamp: "2000-01-01T01:01:01.030Z",
};

const BLANK_PERSONAL = {
    firstName: "NONE",
    lastName: "NONE",
    email: "NONE@NONE.com",
    phone: "NONE",
    password: "NONE",
    role: "staff",
};

const BLANK_CUSTOMER = {
    firstName: "NONE",
    lastName: "NONE",
    email: "NONE@NONE.com",
    phone: "NONE",
};
// ----------------------------------------------------------
// ### VALIDATION ###
function validateBooking(booking) {
    // ---------------------------------------------------------
    if (!booking) throw "No booking provided for validation.";
    // ---------------------------------------------------------
    // ### TYPE CHECK ###
    if (typeof booking.firstName !== "string") throw "Invalid firstName type.";
    if (typeof booking.lastName !== "string") throw "Invalid lastName type.";
    if (typeof booking.email !== "string") throw "Invalid email type.";
    if (typeof booking.phone !== "string") throw "Invalid phone type.";
    if (typeof booking.guestCount !== "number")
        throw "Invalid guestCount type.";
    if (typeof booking.allergies !== "string") throw "Invalid allergies type";
    if (typeof booking.timestamp !== "string") throw "Invalid timestamp type.";
    // ---------------------------------------------------------

    // ---------------------------------------------------------
    // ### VALUE CHECK ###
    if (booking.firstName.length <= 0) throw "Too short firstName.";
    if (booking.lastName.length <= 0) throw "Too short firstName.";
    if (booking.guestCount <= 0) throw "Too low guestCount.";
    if (booking.email.length <= 0) throw "Too short email.";
    if (booking.phone.length <= 0) throw "Too short phonenumber.";
    // ---------------------------------------------------------

    // ---------------------------------------------------------
    // ### SPECIFIC ###
    if (!emailRegexp.test(booking.email)) throw "Invalid email format.";
    if (!isIsoDate(booking.timestamp))
        throw "Invalid timestamp format. Must be ISO.";
    if (new Date(booking.timestamp).getTime() <= 0)
        throw "Missing time from timestamp.";
    // ---------------------------------------------------------
}
function isIsoDate(timeStamp) {
    const date = new Date(timeStamp);
    return (
        date instanceof Date && !isNaN(date) && date.toISOString() === timeStamp
    );
}
function validateCredentials(credentials) {
    // ---------------------------------------------------------
    // ### EXISITENCE CHECK ###
    if (!credentials) throw "No credentials provided.";
    // ---------------------------------------------------------

    // ---------------------------------------------------------
    // ### TYPE CHECK ###
    if (typeof credentials.email !== "string") throw "Invalid email type.";
    if (typeof credentials.password !== "string")
        throw "Invalid password type.";
    // ---------------------------------------------------------

    // ---------------------------------------------------------
    // ### LENGTH CHECK ###
    if (credentials.email.length <= 0) throw "Email too short.";
    if (credentials.password.length <= 0) throw "Password too short.";
    // ---------------------------------------------------------

    // ---------------------------------------------------------
    // ### SPECIFIC ###
    if (!emailRegexp.test(credentials.email)) throw "Invalid email format.";
    // ---------------------------------------------------------
}
function validatePersonal(personal) {
    // ---------------------------------------------------------
    if (!personal) throw "No personal provided for validation.";
    // ---------------------------------------------------------
    // ### TYPE CHECK ###
    if (typeof personal.firstName !== "string") throw "Invalid firstName type.";
    if (typeof personal.lastName !== "string") throw "Invalid lastName type.";
    if (typeof personal.email !== "string") throw "Invalid email type.";
    if (typeof personal.phone !== "string") throw "Invalid phone type.";
    if (typeof personal.password !== "string") throw "Invalid password type.";
    if (typeof personal.role !== "string") throw "Invalid role type.";
    // ---------------------------------------------------------

    // ---------------------------------------------------------
    // ### VALUE CHECK ###
    if (personal.firstName.length <= 0) throw "Too short firstName.";
    if (personal.lastName.length <= 0) throw "Too short firstName.";
    if (personal.email.length <= 0) throw "Too short email.";
    if (personal.phone.length <= 0) throw "Too short phonenumber.";
    if (personal.password.length <= 0) throw "Too short password.";
    if (personal.role.length <= 0) throw "Too short role.";
    // ---------------------------------------------------------

    // ---------------------------------------------------------
    // ### SPECIFIC ###
    if (!emailRegexp.test(personal.email)) throw "Invalid email format.";
    if (!["staff", "admin"].includes(personal.role)) throw "Unallowed role.";
    // ---------------------------------------------------------
}
function validateAllowedPropertiesBooking(booking) {
    Object.keys(booking).forEach((key) => {
        if (
            ![
                "firstName",
                "lastName",
                "email",
                "phone",
                "allergies",
                "guestCount",
                "timestamp",
            ].includes(key)
        )
            throw "Trying to change unallowed property.";
    });
}
function validateAllowedPropertiesPersonal(personal) {
    Object.keys(personal).forEach((key) => {
        if (
            ![
                "password",
                "firstName",
                "lastName",
                "email",
                "phone",
                "role",
            ].includes(key)
        )
            throw "Trying to change unallowed property.";
    });
}
function validateCustomer(customer) {
    // ---------------------------------------------------------
    if (!customer) throw "No customer provided for validation.";
    // ---------------------------------------------------------
    // ### TYPE CHECK ###
    if (typeof customer.firstName !== "string") throw "Invalid firstName type.";
    if (typeof customer.lastName !== "string") throw "Invalid lastName type.";
    if (typeof customer.email !== "string") throw "Invalid email type.";
    if (typeof customer.phone !== "string") throw "Invalid phone type.";
    // ---------------------------------------------------------

    // ---------------------------------------------------------
    // ### VALUE CHECK ###
    if (customer.firstName.length <= 0) throw "Too short firstName.";
    if (customer.lastName.length <= 0) throw "Too short firstName.";
    if (customer.email.length <= 0) throw "Too short email.";
    if (customer.phone.length <= 0) throw "Too short phonenumber.";
    // ---------------------------------------------------------

    // ---------------------------------------------------------
    // ### SPECIFIC ###
    if (!emailRegexp.test(customer.email)) throw "Invalid email format.";
    // ---------------------------------------------------------
}

function hasCustomerChanges(booking) {
    let hasChanges = false;
    Object.keys(booking).forEach((key) => {
        if (!["firstName", "lastName", "email", "phone"].includes(key))
            hasChanges = true;
    });
    return hasChanges;
}

// ----------------------------------------------------------

// ----------------------------------------------------------
// ### PASSWORD HANDLING ###
function comparePassword(password, hash) {
    return bcrypt.compareSync(password, hash);
}
function hashPassword(password) {
    return bcrypt.hashSync(password, 12);
}
// ----------------------------------------------------------

// ----------------------------------------------------------
// ### MIDDLEWARE ###
function forceAuthorize(req, res, next) {
    const { TramontoToken } = req.cookies;
    if (TramontoToken && jwt.verify(TramontoToken, process.env.JWT_SECRET)) {
        next();
    } else {
        res.status(401).send({
            msg: "Unauthorized.",
            error: "You need to be logged in.",
        });
    }
}
function forceAdmin(req, res, next) {
    const { TramontoToken } = req.cookies;
    if (TramontoToken && jwt.verify(TramontoToken, process.env.JWT_SECRET)) {
        const tokenData = jwt.decode(TramontoToken, process.env.JWTSECRET);
        if (tokenData.role === "admin") {
            next();
        } else {
            res.status(401).send({
                msg: "Unauthorized",
                error: "You do not have correct permissions.",
            });
        }
    } else {
        res.status(401).send({
            msg: "Unauthorized",
            error: "You need to be logged in.",
        });
    }
}
async function forceLoggedInOrOwnBooking(req, res, next) {
    try {
        const { TramontoToken } = req.cookies;
        if (
            TramontoToken &&
            jwt.verify(TramontoToken, process.env.JWT_SECRET)
        ) {
            next();
        } else {
            const customerId = req.query.customerId;
            const bookingId = req.params.id;
            if (!customerId || !bookingId)
                throw "No customerId / bookingId provided.";

            if (!mongoose.Types.ObjectId.isValid(customerId))
                throw "Invalid customer Id.";
            if (!mongoose.Types.ObjectId.isValid(bookingId))
                throw "Invalid booking Id.";

            const booking = await BookingModel.findById(bookingId).lean();

            if (!booking) throw "No booking found with ID: " + bookingId;

            if (`${booking.customerId}` !== customerId)
                throw "You cannot modify bookings other than your own.";
            next();
        }
    } catch (error) {
        res.status(401).send({
            msg: "Unauthorized",
            error: error,
        });
    }
}

// ----------------------------------------------------------

module.exports = {
    validateBooking,
    validateCustomer,
    validatePersonal,
    validateCredentials,
    validateAllowedPropertiesBooking,
    validateAllowedPropertiesPersonal,
    hasCustomerChanges,
    BLANK_BOOKING,
    BLANK_PERSONAL,
    BLANK_CUSTOMER,
    comparePassword,
    hashPassword,
    forceAuthorize,
    forceAdmin,
    forceLoggedInOrOwnBooking,
};
