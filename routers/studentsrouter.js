const { Router } = require("express");
const app = Router();

const studentController = require("../controllers/studentscontroller");

app.get("/students", studentController);

module.exports = app;