const { Router } = require("express");
const homecontroller = require("../controllers/homecontroller");
const app = Router();

app.get("/", homecontroller);

module.exports = app;
