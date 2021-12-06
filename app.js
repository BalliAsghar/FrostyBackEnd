const express = require("express");
const cors = require("cors");
const connectdb = require("./config/db");
const app = express();
const dotenv = require("dotenv");

// load envs
dotenv.config({});
// database connection
connectdb();

app.use(cors());
app.use(express.json());

// Index Route
app.get("/", (req, res) => res.json({ message: "Hello" }));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));
