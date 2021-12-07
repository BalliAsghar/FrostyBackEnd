const userRouter = require("express").Router();
const {
  getUsers,
  postUser,
  getUser,
  patchUser,
  deleteUser,
} = require("../controllers/userController");
const { handleWrongMethods } = require("../errors/endpoint-errors");

/**
 * @Route /api/users
 * @Method GET
 * @Function getUsers()
 * @Description Get all users
 */

/**
 * @Route /api/users
 * @Method POST
 * @Function postUser()
 * @Description Create a new user
 */

/**
 * @Route /api/WrontPath
 * @Method GET
 * @Function handleWrongMethods()
 * @Description Handle wrong methods
 */
userRouter.route("/").get(getUsers).post(postUser).all(handleWrongMethods);

/**
 * @Route /api/users/:id
 * @Method GET
 * @Function getUser()
 * @Description Get a user by id
 * @Param id
 */
userRouter.route("/:user_id").get(getUser).patch(patchUser).delete(deleteUser);

module.exports = userRouter;
