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
    let result = students.Create(req, res);
    res.send(req.body);
  },
};
