import  studentServices  from "../services/studentServices.js";
// CreateStudent, DeleteStudent, UpdateStudent
export async function getAllStudents(req, res) {
  let result = await studentServices.Get(req, res);
  res.send(result);
}
export async function getStudentById(req, res) {
  let result = await studentServices.Get(req, res);
  res.send(result);
}
export function createStudent(req, res) {
  let result = CreateStudent(req, res);
  res.send(result);
}
export function deleteStudent(req, res) {
  let result = DeleteStudent(req, res);
  res.send(result);
}
export function updateStudent(req, res) {
  let result = UpdateStudent(req, res);
  res.send(result);
}
