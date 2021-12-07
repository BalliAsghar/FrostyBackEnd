const eventsRouter = require("express").Router();
const { getEvents, postEvent } = require("../controllers/eventsController");

eventsRouter // GET - /api/events
  .route("/")
  .get(getEvents)
  .post(postEvent);

module.exports = eventsRouter;
