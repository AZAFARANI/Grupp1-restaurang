require("dotenv").config();
require("./mongoose.js");

const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

// -------------------------------------------------------
// ### ROUTERS ###
const BookingsRouter = require("./routers/bookings");
app.use("/bookings", BookingsRouter);
// -------------------------------------------------------

// -------------------------------------------------------
// ### HOME ###
app.get("/", (req, res) => {
    res.send({
        msg: "Hello World!",
    });
});
// -------------------------------------------------------

app.listen(8000, () => {
    console.log("http://localhost:8000/");
});
