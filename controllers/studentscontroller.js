const students = require("../services/studentServices");

module.exports = {
  getAllStudents: async (req, res) => {
    let result = await students.Get(req, res);
    res.send(result);
  },
  getStudentById: async (req, res) => {
    let result = await students.Get(req, res);
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
  updateStudent: (req, res) => {
    let result = students.UpdateStudent(req, res);
    res.send(result);
  },

};
