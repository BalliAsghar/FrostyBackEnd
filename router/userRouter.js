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
 * @Method GET
 * @Route /api/users
 * @Function getUsers()
 * @Description Get all users
 */

/**
 * @Method POST
 * @Route /api/users
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

/**
 * @Method PATCH
 * @Route /api/users/:id
 * @Function patchUser()
 * @Description Update a user by id
 * @Param id
 */

/**
 * @Method DELETE
 * @Route /api/users/:id
 * @Function deleteUser()
 * @Description Delete a user by id
 * @Param id
 */
userRouter.route("/:user_id").get(getUser).patch(patchUser).delete(deleteUser);

module.exports = userRouter;
