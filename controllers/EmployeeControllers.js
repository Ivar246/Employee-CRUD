const Employee = require("../models/Employee");

// show the list of employee
const index = (req, res, next) => {
  Employee.find()
    .then((response) => {
      res.json({ response });
    })
    .catch((err) => {
      res.json({ message: "An Error occoured" });
    });
};

// show single employee
const show = (req, res, next) => {
  let EmployeeID = req.body.employeeID;
  Employee.findById(EmployeeID)
    .then((response) => {
      res.json({ response });
    })
    .catch((err) => {
      message: "An error has occured";
    });
};

const store = (req, res, next) => {
  let employee = new Employee({
    name: req.body.name,
    designation: req.body.designation,
    email: req.body.email,
    phone: req.body.phone,
    age: req.body.age,
  });

  if (req.file) {
    employee.avatar = req.file.path;
  }
  employee
    .save()
    .then((response) => {
      res.json({
        response,
        message: "employee added succesfully",
      });
    })
    .catch((error) => {
      res.json({
        message: "An error occured",
      });
    });
};

// update an employee
const update = (req, res, next) => {
  let employeeID = req.body.employeeID;

  let updateData = {
    name: req.body.name,
    designation: req.body.designation,
    email: req.body.email,
    phone: req.body.phone,
    age: req.body.age,
  };

  Employee.findByIdAndUpdate(employeeID, { $set: updateData })
    .then(() => {
      res.json({ message: "employee updated successfully" });
    })
    .catch((error) => {
      res.json({ messag: "Error has occured during updating" });
    });
};

// delete an employee
const destroy = (req, res, next) => {
  let employeeID = req.body.employeeID;
  Employee.findOneAndRemove(employeeID)
    .then(() => {
      req.json({ message: "Deleted successfully." });
    })
    .catch((error) => {
      res.json({ message: "an error occured" });
    });
};

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
