const userRouter = require("express").Router();
const {
  getUsers,
  postUser,
  getUser,
  patchUser,
  deleteUser,
  getEventsByUsername,
  loginUser,
  userProfile,
} = require("../controllers/userController");
const auth = require("../auth/authMiddleware");

/**
 * @Method POST
 * @Route /api/users/login
 * @Function loginUser()
 * @Description Login a user by username and password
 * @body username
 * @body password
 */
userRouter.post("/login", loginUser);

/**
 * @Method POST
 * @Route /api/users/register
 * @Function postUser()
 * @Description Create a new user
 */
userRouter.post("/register", postUser);

/**
 * @Method GET
 * @Route /api/users
 * @Function getUsers()
 * @Description Get all users
 */
userRouter.get("/", auth, getUsers);

/**
 * @Route /api/users/:user_id
 * @Method GET
 * @Function getUser()
 * @Description Get a user by id
 * @Param id
 */
userRouter.get("/:username", getUser);

/**
 * @Method GET
 * @Route /api/users/:username/events
 * @Function getEventsByUsername()
 * @Description get events by username
 * @Param username
 */
userRouter.get("/:username/events", auth, getEventsByUsername);

//  ------------------- Auth implementation  done-------------------------

/**
 * @Method PATCH
 * @Route /api/users/profile/me
 * @Function patchUser()
 * @Description Update a logged in user
 * @Param id
 */
userRouter.patch("/profile/me", auth, patchUser);

/**
 * @Method DELETE
 * @Route /api/users/:id
 * @Function deleteUser()
 * @Description Delete a logged in user
 * @Param id
 */
userRouter.delete("/profile/me", auth, deleteUser);
/**
 * @Method GET
 * @Route /api/users/profile
 * @Function userProfile()
 * @Description Get user profile
 */
userRouter.get("/profile/me", auth, userProfile);

module.exports = userRouter;
