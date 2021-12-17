const commentsRouter = require("express").Router();
const {
  getComment,
  postComment,
  deleteComment,
  updateComment,
  getCommentsByEvent,
} = require("../controllers/commentsController");
const auth = require("../auth/authMiddleware");

/**
 * @METHOD GET
 * @ROUTE /api/comments/:eventId
 * @DESCRIPTION Get all comments for a specific event
 */
commentsRouter.get("/event/:eventId", auth, getCommentsByEvent);

/**
 * @METHOD GET
 * @ROUTE /api/comments/:id
 * @DESCRIPTION Get Single Comment by ID
 */
commentsRouter.get("/:id", auth, getComment);

/**
 * @METHOD POST
 * @ROUTE /api/comments/:eventId
 * @DESCRIPTION Post Comment
 */
commentsRouter.post("/:eventId", auth, postComment);

/**
 * @METHOD DELETE
 * @ROUTE /api/comments/:ID
 * @DESCRIPTION DELETE A Comment
 */
commentsRouter.delete("/:id", auth, deleteComment);

/**
 * @METHOD PATCH
 * @ROUTE /api/comments/:ID
 * @DESCRIPTION UPDATE A Comment BY ID
 */
commentsRouter.patch("/:id", auth, updateComment);

module.exports = commentsRouter;
