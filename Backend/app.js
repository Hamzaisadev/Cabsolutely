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

const userRoutes = require("./routes/user.route");
// calling the database
connectDB();

// initializing the express application
const app = express();

// this used to allow the frontend to access the backend
// we can also specify the origin and the methods that are allowed
// as of development, we will allow all origins and methods
// in production the domain will only be allowed to access the backend
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use('/users', userRoutes)

// exporting the express application
module.exports = app;
