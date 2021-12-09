const commentsRouter = require("express").Router();
const {
  getComment,
  postComment,
  deleteComment,
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

/**
 * @METHOD DELETE
 * @ROUTE /api/comments/:ID
 * @DESCRIPTION DELETE A Comment
 */
commentsRouter.route("/:id").delete(deleteComment);

module.exports = commentsRouter;
