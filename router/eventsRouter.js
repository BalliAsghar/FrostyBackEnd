const eventsRouter = require("express").Router();
const { getEvents, postEvent } = require("../controllers/eventsController");

eventsRouter // GET - /api/events
  .route("/")
  .get(getEvents);

eventsRouter.route("/").post(postEvent);

module.exports = eventsRouter;
