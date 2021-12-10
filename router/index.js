const router = require("express").Router();
const categoriesRouter = require("./categoriesRouter");
const eventsRouter = require("./eventsRouter");
const userRouter = require("./userRouter");
const commentsRouter = require("./commentsRouter");
const parksRouter = require("./parksRouter");
const { uploadPhoto } = require("../utils/uploadPhoto");
// Index Route for /api
router.get("/", (req, res) => res.json({ message: "Api Router" }));

router.use("/categories", categoriesRouter);
router.use("/events", eventsRouter);
router.use("/users", userRouter);
router.use("/comments", commentsRouter);
router.use("/parks", parksRouter);

/**
 * @Method: POST
 * @Route: /api/uploadphoto
 * @Description: Uploads a photo to the server and returns the url
 */

router.post("/uploadphoto", uploadPhoto);

module.exports = router;
