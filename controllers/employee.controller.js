const employee_model = require("../models/employee.model");
const Joi = require("joi");

// Create an employee.
exports.createEmployee = async (req, res) => {
    try {
        const data = req.body;
        const schema = Joi.object({
            employee_name: Joi.string().required(),
            employee_date_of_joining: Joi.date().required(),
            employee_status: Joi.boolean().required(),
        });

        const { error, value } = schema.validate(data);
        if (error) {
            return res.status(422).send({
                code: 422,
                message: error.message,
                status: false,
            });
        }

        const new_employee = new employee_model(data);
        await new_employee.save();

        res.status(200).send({
            code: 200,
            message: "Employee Created Successfully.",
            status: true,
        });
    } catch (err) {
        res.status(500).send({
            code: 500,
            message: err.message,
            status: false,
        });
    }
};

// Get employees.
exports.getEmployees = async (req, res) => {
    try {
        const data = req.body;
        const result = await employee_model.find();

        res.status(200).send({
            code: 200,
            message: "Employee Data Found.",
            data: result,
            status: true,
        });
    } catch (err) {
        res.status(500).send({
            code: 500,
            message: err.message,
            status: false,
        });
    }
};