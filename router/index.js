const router = require("express").Router();
const categoriesRouter = require("./categoriesRouter");
const eventsRouter = require("./eventsRouter");
const userRouter = require("./userRouter");
const commentsRouter = require("./commentsRouter");
const { handleWrongUrls } = require("../errors/endpoint-errors");

// Index Route for /api
router.get("/", (req, res) => res.json({ message: "Api Router" }));

router.use("/categories", categoriesRouter);
router.use("/events", eventsRouter);
router.use("/users", userRouter);
router.use("/comments", commentsRouter);

// Error Handling for all routes that are not defined
router.use("*", handleWrongUrls);

module.exports = router;
