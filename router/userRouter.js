const userRouter = require("express").Router();
const {
  getUsers,
  postUser,
  getUser,
  patchUser,
  deleteUser,
  getEventsByUsername,
  loginUser,
} = require("../controllers/userController");

/**
 * @Method GET
 * @Route /api/users
 * @Function getUsers()
 * @Description Get all users
 */
userRouter.get("/", getUsers);

/**
 * @Method POST
 * @Route /api/users/register
 * @Function postUser()
 * @Description Create a new user
 */
userRouter.post("/register", postUser);

/**
 * @Route /api/users/:user_id
 * @Method GET
 * @Function getUser()
 * @Description Get a user by id
 * @Param id
 */
userRouter.get("/:username", getUser);

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
 * @Method GET
 * @Route /api/users/:username/events
 * @Function getEventsByUsername()
 * @Description get events by username
 * @Param username
 */
userRouter.get("/:username/events", getEventsByUsername);

/**
 * @Method POST
 * @Route /api/users/login
 * @Function loginUser()
 * @Description Login a user by username and password
 * @body username
 * @body password
 */
userRouter.post("/login", loginUser);

module.exports = userRouter;
