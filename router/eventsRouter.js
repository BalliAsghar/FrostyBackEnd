const eventsRouter = require("express").Router();
const {
  getEvents,
  postEvent,
  getEvent,
  deleteEvent,
  getEventComments,
  patchEvent,
} = require("../controllers/eventsController");
const auth = require("../auth/authMiddleware");

/**
 * @Method GET
 * @Route /api/events
 * @Function getEvents
 * @Description Get all events
 * @Access Private
 */
eventsRouter.get("/", auth, getEvents);
/**
 * @Method POST
 * @Route /api/events
 * @Function postEvent
 * @Description Create a new event
 */

eventsRouter.post("/", auth, postEvent);

/**
 * @Method GET
 * @Route /api/events/:id
 * @Function getEvent
 * @Description Get a single event
 * @Param {String} id
 */
eventsRouter.get("/:eventId", auth, getEvent);

/**
 * @Method DELETE
 * @Route /api/events/:id
 * @Function deleteEvent
 * @Description Delete a single event
 * @Param {String} id
 */

eventsRouter.delete("/:eventId", auth, deleteEvent);

/**
 * @Method DELETE
 * @Route /api/events/:id
 * @Function deleteEvent
 * @Description Delete a single event
 * @Param {String} id
 */

eventsRouter.patch("/:eventId", auth, patchEvent);

/**
 * @METHOD GET
 * @ROUTE /api/events/:eventId/comments
 * @DESCRIPTION Get All Comments by Event ID
 */

eventsRouter.get("/:eventId/comments", auth, getEventComments);

module.exports = eventsRouter;
