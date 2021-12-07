const userRouter = require("express").Router();
const { getUsers, postUser } = require("../controllers/userController");

userRouter // GET - /api/user
  .route("/")
  .get(getUsers)
  .post(postUser);

module.exports = userRouter;
