const express = require("express");
const app = express();
app.use(express.json());
const PORT = 5001;

const students = require("./routers/studentsrouter");
// const home = require("./routers/homerouter");

app.listen(PORT, () => {
  console.log("Server listening on port: ", PORT);
});

// app.get("/status", (req, res) => {
//     res.json({ message: "Server is running!" });
// });

// app.get("/", (req, res) => {
//   res.send("Welcome to the Express server!");
// });

// app.use(home);

app.use(students);

// Define the /status route
// app.post("/status", (req, res) => {
//   let data = req.body.name;
//   res.json({ message: `Server is running! hello ${data}` });
// });

// app.get("/api/cources", (req, res) => {
//   res.send([1, 2, 3]);
// });
