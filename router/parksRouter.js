const parksRouter = require("express").Router();
const { getAllParks, getPark } = require("../controllers/parksController");

// GET /api/parks
// Returns all parks
parksRouter.route("/").get(getAllParks);

// Get /api/parks/:id
// Returns a single park
parksRouter.route("/:parkId").get(getPark);

module.exports = parksRouter;
