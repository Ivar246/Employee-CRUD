const express = require("express");
const router = express.Router();

const EmployeeController = require("../controllers/EmployeeControllers");
router.get("/", EmployeeController.index);
router.post("/store", EmployeeController.store);
router.post("/update", EmployeeController.update);
router.post("/show", EmployeeController.show);
router.post("/delete", EmployeeController.destroy);

module.exports = router;
