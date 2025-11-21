// this is the main file for the backend
// it is used to configure the server and the database

// this is used to load the environment variables from the .env file
const dotenv = require("dotenv");
dotenv.config();

// this is used to create the express application
const express = require("express");

// this is used to allow the frontend to access the backend

const cors = require("cors");
// this is used to connect to the database
const connectDB = require("./db/db");
// calling the database
connectDB();

// initializing the express application
const app = express();

// this used to allow the frontend to access the backend
// we can also specify the origin and the methods that are allowed
// as of development, we will allow all origins and methods
// in production the domain will only be allowed to access the backend
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

// exporting the express application
module.exports = app;
