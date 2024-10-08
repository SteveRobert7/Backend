const { Router } = require("express");
const app = Router();

const studentController = require("../controllers/studentscontroller");

app.get("/students", studentController.getAllStudents);
app.get("/students/:id?", studentController.getStudentById);
app.post("/student/create",studentController.createStudent);
app.delete("/student/:id?",studentController.deleteStudent);
app.put("/student/:id",studentController.updateStudent);
module.exports = app;

