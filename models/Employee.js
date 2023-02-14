const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema(
  {
    name: {
      type: "string",
    },
    designation: {
      type: "String",
    },
    email: {
      type: "String",
    },
    phone: {
      type: "String",
    },
    age: {
      type: "Number",
    },
    avatar: String,
  },
  { timestamps: true }
);

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
