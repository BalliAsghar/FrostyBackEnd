const userRouter = require("express").Router();
const {
  getUsers,
  postUser,
  getUser,
} = require("../controllers/userController");

userRouter // GET - /api/user
  .route("/")
  .get(getUsers)
  .post(postUser);

userRouter.route("/:user_id").get(getUser);

module.exports = userRouter;
