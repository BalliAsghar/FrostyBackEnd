const express = require("express");
const cors = require("cors");
const FileUpload = require("express-fileupload");
const { connectDB } = require("./config/db");
const app = express();
const dotenv = require("dotenv");
const router = require("./router");
const errors = require("./errors");

// load envs
dotenv.config({});
// database connection
connectDB();

app.use(cors());
app.use(express.json());
app.use(FileUpload());

// Index Route
app.get("/", (req, res) => res.json({ message: "Hello" }));

app.use("/api", router);

// Error Handling for all routes not found
app.all("*", (req, res, next) => {
  next({ statusCode: 404, message: "Route not found" });
});

// handle error middleware
app.use(errors);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));

module.exports = app;
