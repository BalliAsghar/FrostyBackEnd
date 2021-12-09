const commentsRouter = require("express").Router();
const {
  getComment,
  postComment,
  deleteComment,
  updateComment,
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

/**
 * @METHOD PATCH
 * @ROUTE /api/comments/:ID
 * @DESCRIPTION UPDATE A Comment BY ID
 */
commentsRouter.route("/:id").patch(updateComment);

// /**
//  * @METHOD PATCH
//  * @ROUTE /api/comments/:ID/vote
//  * @DESCRIPTION UPDATE A Comment BY ID
//  */
//  commentsRouter.route("/:id/vote").patch(updateComment);

module.exports = commentsRouter;
