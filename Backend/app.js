const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");

const app = express();

// this used to allow the frontend to access the backend
// we can also specify the origin and the methods that are allowed
// as of development, we will allow all origins and methods
// in production the domain will only be allowed to access the backend
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = app;
