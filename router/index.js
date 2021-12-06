const router = require("express").Router();
const categoriesRouter = require("./categoriesRouter");
const eventsRouter = require("./eventsRouter");
const userRouter = require("./userRouter");
const commentsRouter = require("./commentsRouter");

router.get("/", (req, res) => res.json({ message: "Api Router" }));

router.use("/categories", categoriesRouter);
router.use("/events", eventsRouter);
router.use("/user", userRouter);
router.use("/comments", commentsRouter);

module.exports = router;
