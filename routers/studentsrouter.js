import { Router } from "express";
const router = Router();

import { getAllStudents, getStudentById, createStudent, deleteStudent, updateStudent } from "../controllers/studentscontroller.js";

router.get("/students", getAllStudents);
router.get("/students/:id?", getStudentById);
router.post("/student/create",createStudent);
router.delete("/student/:id?",deleteStudent);
router.put("/student/:id",updateStudent);

export default router;

