require("dotenv").config();
require("./mongoose.js");

const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

// -------------------------------------------------------
// ### ADD CROSS ORIGIN ACCESS ###
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // Which origin thats allowed.
    res.header("Access-Control-Allow-Credentials", true); // Needed to use cookie on frontend.
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type" // Allow followin headers.
    );
    res.header("Access-Control-Allow-Methods", "POST, PUT, GET, DELETE"); // Which methods we allow.
    next();
});

// -------------------------------------------------------
// ### ROUTERS ###
const BookingsRouter = require("./routers/bookings");
const PersonalRouter = require("./routers/personal");

app.use("/bookings", BookingsRouter);
app.use("/personal", PersonalRouter);
// -------------------------------------------------------

// -------------------------------------------------------
// ### HOME ###
app.get("*", (req, res) => {
    res.send({
        msg: "Hello World!",
    });
});
// -------------------------------------------------------

app.listen(8000, () => {
    console.log("http://localhost:8000/");
});
