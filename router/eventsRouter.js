const eventsRouter = require("express").Router();
const {
  getEvents,
  postEvent,
  getEvent,
} = require("../controllers/eventsController");

eventsRouter // GET - /api/events
  .route("/")
  .get(getEvents)
  .post(postEvent);

eventsRouter.route("/:event_id").get(getEvent);

module.exports = eventsRouter;
