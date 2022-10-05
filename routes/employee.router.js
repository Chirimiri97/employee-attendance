const express = require("express");
const Router = express.Router();

// Employee Mongoose Model.
const employee_controller = require("../controllers/employee.controller");

Router.get("/employee", employee_controller.getEmployees);
Router.post("/employee", employee_controller.createEmployee);

module.exports = Router;