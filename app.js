import express, { json } from "express";
import cors from 'cors';
const app = express();
app.use(json());
const PORT = 5001;

import students from "./routers/studentsrouter.js";

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.listen(PORT, () => {
  console.log("Server listening on port: ", PORT);
});

app.get("/status", (req, res) => {
  res.json({ message: "Server is running!" });
});

app.get("/", (req, res) => {
  res.send("Welcome to the Express server!");
});


app.use(students);






// app.use(home);
// const home = require("./routers/homerouter");












// Define the /status route
// app.post("/status", (req, res) => {
//   let data = req.body.name;
//   res.json({ message: `Server is running! hello ${data}` });
// });

// app.get("/api/cources", (req, res) => {
//   res.send([1, 2, 3]);
// });
