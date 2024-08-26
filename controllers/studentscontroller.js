
const students = require("../services/studentServices");

module.exports = {
    getAllStudents:(req,res) => {
        let result = students.Get(req, res);
        res.send(result);
    },
    getStudentById:(req,res) => {
        let result = students.Get(req, res);    
        res.send(result);
    }
};