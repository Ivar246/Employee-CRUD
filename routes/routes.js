const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");

const EmployeeController = require("../controllers/EmployeeControllers");
router.get("/", EmployeeController.index);
router.post("/store", upload.single("avatar"), EmployeeController.store);
router.post("/update", EmployeeController.update);
router.post("/show", EmployeeController.show);
router.post("/delete", EmployeeController.destroy);

module.exports = router;
