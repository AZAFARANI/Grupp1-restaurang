require("dotenv").config();
require("./mongoose.js");

const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send({
        msg: "Hello World!",
    });
});

app.listen(8000, () => {
    console.log("http://localhost:8000/");
});
