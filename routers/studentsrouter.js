const { Router } = require("express");
const router = Router();

const studentController = require("../controllers/studentscontroller");

router.get("/students", studentController.getAllStudents);
router.get("/students/:id?", studentController.getStudentById);
router.post("/student/create",studentController.createStudent);
router.delete("/student/:id?",studentController.deleteStudent);
router.put("/student/:id",studentController.updateStudent);

module.exports = router;

