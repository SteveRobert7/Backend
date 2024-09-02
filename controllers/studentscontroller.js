const students = require("../services/studentServices");

module.exports = {
  getAllStudents: (req, res) => {
    let result = students.Get(req, res);
    res.send(result);
  },
  getStudentById: (req, res) => {
    let result = students.Get(req, res);
    res.send(result);
  },
  createStudent: (req, res) => {
    let result = students.CreateStudent(req, res);
    res.send(result);
  },
  deleteStudent: (req, res) => {
    let result = students.DeleteStudent(req, res);
    res.send(result);
  },
};
