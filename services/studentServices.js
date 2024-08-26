studentServices = {
  Get: (req) => {
    let studentsList = createStudents();
    console.log(studentsList);
    return studentsList;
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

const studentsData = [
  { name: "jerin", standard: "UKG" },
  { name: "vylu", standard: "5" },
  { name: "thundan", standard: "Bsc.Seo" },
  { name: "jibru", standard: "Bsc.Trains" },
  { name: "bajji", standard: "5" },
  { name: "kakaa", standard: "3" },
];

function createStudents() {
  const students = [];

  for (let i = 0; i < studentsData.length; i++) {
    let student = new Student(
      i + 1,
      studentsData[i].name,
      studentsData[i].standard
    );
    students.push(student);
  }

  return students;
}
