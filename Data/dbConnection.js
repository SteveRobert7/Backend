// dbConnection.js
const mysql = require('mysql2');

// Create a connection pool (better for handling multiple requests)
const connection = mysql.createPool({
  host: '127.0.0.1', // Replace with your MySQL host
  user: 'root',      // Replace with your MySQL username
  password: 'Steve@sql', // Replace with your MySQL password
  database: 'school', // Replace with your database name
  connectionLimit: 10 // Limit the number of connections in the pool
});

// Handle any connection errors
connection.getConnection((err, conn) => {
  if (err) {
    console.error('Error connecting to the database: ', err.stack);
    return;
  }
  console.log('Connected to the database as ID ' + conn.threadId);
});




connection.query("SELECT * FROM students", (err, results) => {
    if (err) throw err;
    console.log(results);
});
  

module.exports = connection;



