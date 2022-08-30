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
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
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
