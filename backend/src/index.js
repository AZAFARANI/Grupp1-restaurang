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
// ### AUTH MIDDLEWARE ###
// app.use((req, res, next) => {
//     const { token } = req.cookies;
//     if (token && jwt.verify(token, process.env.JWTSECRET)) {
//         const tokenData = jwt.decode(token, process.env.JWTSECRET);
//         res.locals.tokenData = tokenData;
//     } else res.locals.tokenData = null;
//     next();
// });

// -------------------------------------------------------
// ### ROUTERS ###
const BookingsRouter = require("./routers/bookings");
const PersonalRouter = require("./routers/personal");

app.use("/bookings", BookingsRouter);
app.use("/personal", PersonalRouter);
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
