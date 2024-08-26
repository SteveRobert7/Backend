
const students = require("../services/studentServices");

module.exports = (req,res)=>{
    let result = students.Get();
    res.send(result);
};