const express = require("express");
const app = express();
const studentRoute = require("./api/routes/student");
const facultyRoute = require("./api/routes/faculty");
const userRoute = require("./api/routes/user");

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

mongoose.connect(
  "mongodb+srv://Imrihan:Imrihan@mrk.0vudv.mongodb.net/?retryWrites=true&w=majority"
);

mongoose.connection.on("error", (error) => {
  console.log("connection failed");
});

mongoose.connection.on("connected", (connected) => {
  console.log("connected with database...");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/student", studentRoute);
app.use("/faculty", facultyRoute);
app.use("/user", userRoute);
app.use((req, res, next) => {
  res.status(404).json({
    message: "bad request",
  });
});

module.exports = app;
