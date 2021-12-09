const commentsRouter = require("express").Router();
const {
  getComment,
  postComment,
} = require("../controllers/commentsController");

/**
 * @METHOD GET
 * @ROUTE /api/comments/:id
 * @DESCRIPTION Get Single Comment by ID
 */
commentsRouter.route("/:id").get(getComment);

/**
 * @METHOD POST
 * @ROUTE /api/comments
 * @DESCRIPTION Post Comment
 */
commentsRouter.route("/").post(postComment);
module.exports = commentsRouter;
