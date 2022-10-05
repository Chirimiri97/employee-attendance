const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const employeeSchema = new mongoose.Schema(
    {
        employee_name: { 
            type: String, 
            required: true 
        },

        employee_date_of_joining: {
            type: Date, 
            required: true,
        },
        
        employee_date_of_termination: {
            type: Date,
            required: false,
            default: "",
        },

        employee_status: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

employeeSchema.plugin(AutoIncrement, { inc_field: "employee_id" });

module.exports = mongoose.model("employees", employeeSchema);

