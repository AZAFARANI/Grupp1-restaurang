const emailRegexp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const BLANK_BOOKING = {
    firstName: "NONE",
    lastName: "NONE",
    email: "NONE@NONE.com",
    phone: "NONE",
    guestCount: 1,
    allergies: "NONE",
    timestamp: "NONE",
};

function validateBooking(recipe) {
    if (!recipe) throw "No recipe provided for validation.";
    // ---------------------------------------------------------
    // ### TYPE CHECK ###
    if (typeof recipe.firstName !== "string") throw "Invalid firstName type.";
    if (typeof recipe.lastName !== "string") throw "Invalid lastName type.";
    if (typeof recipe.email !== "string") throw "Invalid email type.";
    if (typeof recipe.phone !== "string") throw "Invalid phone type.";
    if (typeof recipe.guestCount !== "number") throw "Invalid guestCount type.";
    if (typeof recipe.allergies !== "string") throw "Invalid allergies type";
    if (typeof recipe.timestamp !== "string") throw "Invalid timestamp type.";
    // ---------------------------------------------------------

    // ---------------------------------------------------------
    // ### VALUE CHECK ###
    if (recipe.firstName.length <= 0) throw "Too short firstName.";
    if (recipe.lastName.length <= 0) throw "Too short firstName.";
    if (recipe.guestCount <= 0) throw "Too low guestCount.";
    if (recipe.email.length <= 0) throw "Too short email.";
    if (recipe.phone.length <= 0) throw "Too short phonenumber.";
    // ---------------------------------------------------------

    // ---------------------------------------------------------
    // ### SPECIFIC ###
    if (!emailRegexp.test(recipe.email)) throw "Invalid email format.";
    if (new Date(recipe.timestamp).getTime() <= 0) throw "Invalid Date format.";
    // ---------------------------------------------------------
}

function validateAllowedProperties(recipe) {
    Object.keys(recipe).forEach((key) => {
        if (!["guestCount", "allergies", "timestamp"].includes(key))
            throw "Trying to change unallowed property.";
    });
}

module.exports = {
    validateBooking,
    validateAllowedProperties,
    BLANK_BOOKING,
};
