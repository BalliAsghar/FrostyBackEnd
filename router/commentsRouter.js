const commentsRouter = require("express").Router();
const {
  getComment,
  postComment,
  deleteComment,
  updateComment,
} = require("../controllers/commentsController");
const auth = require("../auth/authMiddleware");

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

// /**
//  * @METHOD PATCH
//  * @ROUTE /api/comments/:ID/vote
//  * @DESCRIPTION UPDATE A Comment BY ID
//  */
//  commentsRouter.route("/:id/vote").patch(updateComment);

module.exports = commentsRouter;
