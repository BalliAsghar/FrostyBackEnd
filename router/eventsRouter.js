const eventsRouter = require("express").Router();
const {
  getEvents,
  postEvent,
  getEvent,
  deleteEvent,
} = require("../controllers/eventsController");

/**
 * @Method GET
 * @Route /api/events
 * @Function getEvents
 * @Description Get all events
 */
eventsRouter.get("/", getEvents);
/**
 * @Method POST
 * @Route /api/events
 * @Function postEvent
 * @Description Create a new event
 */

eventsRouter.post("/", postEvent);

/**
 * @Method GET
 * @Route /api/events/:id
 * @Function getEvent
 * @Description Get a single event
 * @Param {String} id
 */
eventsRouter.get("/:event_id", getEvent);

/**
 * @Method DELETE
 * @Route /api/events/:id
 * @Function deleteEvent
 * @Description Delete a single event
 * @Param {String} id
 */

eventsRouter.delete("/:event_id", deleteEvent);

module.exports = eventsRouter;
