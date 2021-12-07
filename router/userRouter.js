const userRouter = require("express").Router();
const {
  getUsers,
  postUser,
  getUser,
  patchUser,
  deleteUser,
} = require("../controllers/userController");

userRouter // GET - /api/user
  .route("/")
  .get(getUsers)
  .post(postUser);

userRouter.route("/:user_id").get(getUser).patch(patchUser).delete(deleteUser);

module.exports = userRouter;
