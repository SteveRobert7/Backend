
const mysql = require('mysql2');

const dotenv = require('dotenv');
dotenv.config();

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST, 
  user: process.env.MYSQL_USER,     
  password: process.env.MYSQL_PASSWORD, 
  database: process.env.MYSQL_DATABASE
}).promise();




module.exports = connection;



// Handle any connection errors

// connection.getConnection((err, conn) => {
//   if (err) {
//     console.error('Error connecting to the database: ', err.stack);
//     return;
//   }
//   console.log('Connected to the database as ID ' + conn.threadId);
// });

// connection.query("SELECT * FROM students", (err, results) => {
//   if (err) throw err;
//   console.log(results);
// });