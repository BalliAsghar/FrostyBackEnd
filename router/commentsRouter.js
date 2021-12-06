const commentsRouter = require("express").Router();
const { getComments } = require("../controllers/commentsController");

commentsRouter // GET - /api/events
  .route("/")
  .get(getComments);

module.exports = commentsRouter;
