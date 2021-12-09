const commentsRouter = require("express").Router();
const { getComments } = require("../controllers/commentsController");

/**
 * @METHOD GET
 * @ROUTE /api/comments/:event_id/comments
 * @DESCRIPTION Get all comments by event id
 */
commentsRouter.route("/:event_id/comments").get(getComments);

module.exports = commentsRouter;
