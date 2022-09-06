require("dotenv").config();
require("./mongoose.js");

const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.set("query parser", "simple");

// -------------------------------------------------------
// ### ADD CROSS ORIGIN ACCESS ###
const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type"],
    methods: ["GET", "HEAD", "PUT", "POST", "DELETE"],
    preflightContinue: false,
    credentials: true,
};

app.use(cors(corsOptions));
// app.options("*", cors());

// -------------------------------------------------------
// ### ROUTERS ###
const BookingsRouter = require("./routers/bookings");
const PersonalRouter = require("./routers/personal");
const CustomerRouter = require("./routers/customers");

app.use("/bookings", BookingsRouter);
app.use("/personal", PersonalRouter);
app.use("/customers", CustomerRouter);
// -------------------------------------------------------

// -------------------------------------------------------
// ### HOME ###
app.get("*", (req, res) => {
    res.status(404).send({
        msg: "Not found.",
    });
});
// -------------------------------------------------------

app.listen(8000, () => {
    console.log("http://localhost:8000/");
});
