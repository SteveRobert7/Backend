const { error } = require("console");
const fs = require("fs");

studentServices = {
  Get: (req) => {
    let studentsList = createStudents();
    let reqid = req.params.id ? req.params.id : null;
    let reqName = req.query.name ? req.query.name.toLowerCase() : null;

    if (reqid) {
      let reqStudent = studentsList.find((student) => student.id === reqid);
      if (reqStudent) {
        return reqStudent;
      } else {
        return { error: "student not found" };
      }
    } else if (reqName) {
      let reqStudent = studentsList.find(
        (student) => student.name.toLowerCase() === reqName
      );
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

  DeleteStudent: (req, res) => {
    let newStudentsList = delStudent(req);
    res.json(newStudentsList);
  },

  UpdateStudent: (req, res) => {
    let updatedStudent = editStudent(req);
    res.json(updatedStudent);
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
  const csvData = studentsList
    .map((student) => `${student.id},${student.name},${student.standard}`)
    .join("\n");
  fs.writeFileSync("staticFiles/students.csv", `${header}\n${csvData}`);
}




function delStudent(req) {
  let studentsList = createStudents();
  let reqid = req.params.id ? req.params.id : null;
  // console.log(reqid);

  let reqName = req.query.name ? req.query.name.toLowerCase() : null;
  // console.log(reqName);

  let studentListAfterDeletion;

  if (reqid) {
    studentListAfterDeletion = studentsList.filter(
      (student) => student.id !== reqid
    );
  } else if (reqName) {
    studentListAfterDeletion = studentsList.filter(
      (student) => student.name.toLowerCase() !== reqName.toLowerCase()
    );
  } else {
    return { error: "student not found to delete" };
  }
  // console.log(studentListAfterDeletion);
  // console.log(studentsList);

  if (studentListAfterDeletion.length !== studentsList.length) {
    writeFile(studentListAfterDeletion);
    console.log(studentListAfterDeletion);
    let newStudentsList = createStudents();
    return newStudentsList;
  } else {
    return { error: "deleteStudent is not working" };
  }
}


function editStudent(req) {
  let inputBody = req.body;
  let reqid = req.params.id
  let studentsList = createStudents();
  let studentId = studentsList.findIndex(student => student.id === reqid);
  if (studentId) {
    studentsList[studentId].name = inputBody.name ? inputBody.name : studentsList[studentId].name ;
    studentsList[studentId].standard = inputBody.standard ? inputBody.standard : studentsList[studentId].standard ;

    writeFile(studentsList);
    return studentsList[studentId];
    
  }
  else {
    return {error : "student not found"}
  }
}






















// const studentsData = [
//   { name: "jerin", standard: "UKG" },
//   { name: "vylu", standard: "5" },
//   { name: "thundan", standard: "Bsc.Seo" },
//   { name: "jibru", standard: "Bsc.Trains" },
//   { name: "bajji", standard: "5" },
//   { name: "kakaa", standard: "3" },
// ];
