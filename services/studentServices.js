const fs = require("fs");

studentServices = {
  Get: (req) => {
    let studentsList = createStudents();
    let reqid = parseInt(req.params.id);
    if (reqid) {
      let reqStudent = studentsList.find((student) => student.id === reqid);
      if (reqStudent) {
        return reqStudent;
      } else {
        return { error: "student not found" };
      }
    }

    // console.log(studentsList);
    return studentsList;
  },
  CreateStudent: (req, res) => {
    let newStudent = inputNewStudent(req);
    res.json(newStudent);
  },
};

module.exports = studentServices;

class Student {
  constructor(id, name, standard) {
    this.id = id;
    this.name = name;
    this.standard = standard;
  }
}

function createStudents() {
  const studentsData = createStudentsCsv();
  const students = [];
  // console.log(typeof studentsData);
  // console.log(studentsData.split("\n"));
  var lines = studentsData.split("\n");
  for (let i = 1; i < lines.length; i++) {
    let student = new Student(
      lines[i].split(",")[0],
      lines[i].split(",")[1],
      lines[i].split(",")[2]
    );
    students.push(student);
  }

  return students;
}

function createStudentsCsv() {
  const res = fs.readFileSync("staticFiles/students.csv", "utf8").toString();
  // readCSVFile("students.csv")
  return res;
}

function inputNewStudent(req) {
  let inputBody = req.body;
  let newstudentsList = createStudents();
  let newId = parseInt(newstudentsList[newstudentsList.length - 1].id) + 1;

  let student = new Student(newId, inputBody.name, inputBody.standard);
  newstudentsList.push(student);

  writeFile(newstudentsList);
  return student;
}


function writeFile(studentsList) {
  const header = "id,name,standard";
  const csvData = studentsList.map(student => `${student.id},${student.name},${student.standard}`).join('\n');
  fs.writeFileSync("staticFiles/students.csv", `${header}\n${csvData}`);
}
// const studentsData = [
//   { name: "jerin", standard: "UKG" },
//   { name: "vylu", standard: "5" },
//   { name: "thundan", standard: "Bsc.Seo" },
//   { name: "jibru", standard: "Bsc.Trains" },
//   { name: "bajji", standard: "5" },
//   { name: "kakaa", standard: "3" },
// ];
