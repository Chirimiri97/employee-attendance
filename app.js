// Create Express App.
const express = require("express");
const app = express();
const Joi = require("joi");

// Require dotenv()
require("dotenv").config();

// Require Config Files.
const config = require("./config/config");

// Use Express JSON Body Parser.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to DB.
const { connection } = require("./config/db");

// Employee Routes.
const employee_router = require("./routes/employee.router");
app.use("/", employee_router);



app.listen(config.PORT, () => {
    console.log("Listening at port: ", config.PORT);
});