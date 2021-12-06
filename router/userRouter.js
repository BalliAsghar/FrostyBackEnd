const userRouter = require("express").Router();
const { getUsers } = require("../controllers/userController");

userRouter // GET - /api/user
  .route("/")
  .get(getUsers);

module.exports = userRouter;
