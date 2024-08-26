const { Router } = require("express");
const app = Router();

const studentController = require("../controllers/studentscontroller");

app.get("/students", studentController.getAllStudents);
app.get("/students/:id", studentController.getStudentById);

module.exports = app;