const router = require("express").Router();
const categoriesRouter = require("./categoriesRouter");
const eventsRouter = require("./eventsRouter");
const userRouter = require("./userRouter");
const commentsRouter = require("./commentsRouter");
const parksRouter = require("./parksRouter");
const { handleWrongUrls } = require("../errors/endpoint-errors");

// Index Route for /api
router.get("/", (req, res) => res.json({ message: "Api Router" }));

router.use("/categories", categoriesRouter);
router.use("/events", eventsRouter);
router.use("/users", userRouter);
router.use("/comments", commentsRouter);
router.use("/parks", parksRouter);

module.exports = router;
