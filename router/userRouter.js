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
userRouter.get("/", getUsers);

/**
 * @Method POST
 * @Route /api/users
 * @Function postUser()
 * @Description Create a new user
 */
userRouter.post("/", postUser);

/**
 * @Route /api/users/:id
 * @Method GET
 * @Function getUser()
 * @Description Get a user by id
 * @Param id
 */
userRouter.get("/:id", getUser);

/**
 * @Method PATCH
 * @Route /api/users/:id
 * @Function patchUser()
 * @Description Update a user by id
 * @Param id
 */
userRouter.patch("/:id", patchUser);

/**
 * @Method DELETE
 * @Route /api/users/:id
 * @Function deleteUser()
 * @Description Delete a user by id
 * @Param id
 */
userRouter.delete("/:id", deleteUser);

/**
 * @Route /api/WrontPath
 * @Method GET
 * @Function handleWrongMethods()
 * @Description Handle wrong methods
 */
userRouter.all("*", handleWrongMethods);

module.exports = userRouter;
