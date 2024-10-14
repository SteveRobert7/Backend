import  dbC  from './dbConnection.js';



const mysqlStudentData = {
  Get: async (req, res) => {
    let reqid = req.params.id ? req.params.id : null;
    console.log(reqid);
    if (reqid) {
      const row = await dbC.query(`
        select 
        student_id, student_name, course 
        from students s inner join courses c 
        on s.department_code = c.department_code where student_id = ?;
        `, [reqid]);
      return row;

    }
    else {
      const [rows] = await dbC.query(`
      select 
      student_id, student_name, course 
      from students s inner join courses c 
      on s.department_code = c.department_code;`);
      // console.log(rows);
      return rows;
    }

  }
};

export default mysqlStudentData;
