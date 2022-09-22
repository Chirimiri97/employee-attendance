// Create Express App.
const express = require("express");
const app = express();

// Require dotenv()
require("dotenv").config();

// Require Config Files.
const config = require("./config/config");

// Connect to DB.
const { connection } = require("./config/db");

const employeeSchema = require("./models/employee.model");

app.get("/", async (req, res) => {
    return res.send("Hello World!!!");
});

app.listen(config.PORT, () => {
    console.log("Listening at port: ", config.PORT);
});