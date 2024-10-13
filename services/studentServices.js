const { error } = require("console");
const fs = require("fs");
// const csvRepo = require("../Data/csvFileDataRepo");
const db = require('../Data/mysqlStudentDataRepo');

studentServices = {
  Get:  (req,res) => {
    let students = db.Get(req, res);
    return students
  },


  // CreateStudent: (req, res) => {
  //   let newStudent = inputNewStudent(req);
  //   res.json(newStudent);
  // },

};























// studentServices = {
//   Get: (req) => {
//     let reqid = req.params.id ? req.params.id : null;
//     let reqName = req.query.name ? req.query.name.toLowerCase() : null;

//     let students = csvRepo.Get(req);
//     return students;
//   },

//   CreateStudent: (req, res) => {
//     let newStudent = inputNewStudent(req);
//     res.json(newStudent);
//   },

//   DeleteStudent: (req, res) => {
//     let newStudentsList = delStudent(req);
//     res.json(newStudentsList);
//   },

//   UpdateStudent: (req, res) => {
//     let updatedStudent = editStudent(req);
//     res.json(updatedStudent);
//   },
// };

module.exports = studentServices;

class Student {
  constructor(id, name, standard) {
    this.id = id;
    this.name = name;
    this.standard = standard;
  }
}
