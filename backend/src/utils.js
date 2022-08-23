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
    if (new Date(booking.timestamp).getTime() <= date.now() - 1)
        throw "Missing time from timestamp.";
    // ---------------------------------------------------------
}

function isIsoDate(timeStamp) {
    const date = new Date(timeStamp);
    return (
        date instanceof Date && !isNaN(date) && date.toISOString() === timeStamp
    );
}

function validateAllowedProperties(booking) {
    Object.keys(booking).forEach((key) => {
        if (!["guestCount", "allergies", "timestamp"].includes(key))
            throw "Trying to change unallowed property.";
    });
}

module.exports = {
    validateBooking,
    validateAllowedProperties,
    BLANK_BOOKING,
};
