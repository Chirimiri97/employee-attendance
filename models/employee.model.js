const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
    {
        employee_id: {
            type: Number,
            unique: true,
        },
        employee_name: String,
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("employees", employeeSchema);

