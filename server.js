const express = require("express");

// creating mongodb connection , declaring db model
const mongoose = require("mongoose"); // require to work with mongodb
// logging console to which api has been called
// important during development
const morgan = require("morgan");
// used to parse incoming request body
const bodyParser = require("body-parser");
const EmployeeRoute = require("./routes/routes");

mongoose.connect("mongodb://localhost:27017/testdb");
const db = mongoose.connection;
db.on("error", (err) => {
  console.log(err);
});
db.once("open", () => {
  console.log("databasae connection established");
});

const app = express();
// app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

app.use("/api/employee", EmployeeRoute);
