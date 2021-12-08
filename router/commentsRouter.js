const commentsRouter = require("express").Router();
const { getComments } = require("../controllers/commentsController");

/**
 * @METHOD GET
 * @ROUTE /api/comments
 * @DESCRIPTION Get all comments
 */
commentsRouter.route("/").get(getComments);

module.exports = commentsRouter;
