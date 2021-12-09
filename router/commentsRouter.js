const commentsRouter = require("express").Router();
const { getComment } = require("../controllers/commentsController");

/**
 * @METHOD GET
 * @ROUTE /api/comments/:id
 * @DESCRIPTION Get Single Comment by ID
 */
commentsRouter.route("/:id").get(getComment);

module.exports = commentsRouter;
