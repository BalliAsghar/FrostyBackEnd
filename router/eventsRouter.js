const eventsRouter = require("express").Router();
const {
  getEvents,
  postEvent,
  getEvent,
  deleteEvent,
  getEventComments,
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

/**
 * @METHOD GET
 * @ROUTE /api/events/:eventId/comments
 * @DESCRIPTION Get All Comments by Event ID
 */

eventsRouter.get("/:event_id/comments", getEventComments);
module.exports = eventsRouter;
