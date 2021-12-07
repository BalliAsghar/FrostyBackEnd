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

/**
 * @Method POST
 * @Route /api/events
 * @Function postEvent
 * @Description Create a new event
 */

eventsRouter.route("/").get(getEvents).post(postEvent);

/**
 * @Method GET
 * @Route /api/events/:id
 * @Function getEvent
 * @Description Get a single event
 * @Param {String} id
 */

eventsRouter.route("/:event_id").get(getEvent).delete(deleteEvent);

module.exports = eventsRouter;
