const express = require("express");
const app = express();
const studentRoute = require("./api/routes/student");
const facultyRoute = require("./api/routes/faculty");
app.use("/student", studentRoute);
app.use("/faculty", facultyRoute);
app.use((req, res, next) => {
  res.status(200).json({
    message: "app is running in localhost: 3000",
  });
});

module.exports = app;
