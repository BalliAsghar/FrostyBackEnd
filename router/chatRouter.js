const chatRouter = require("express").Router();
const {
  getChatHistory,
  postMessage,
} = require("../controllers/chatController");

/**
 * @METHOD POST
 * @ROUTE /api/chat
 * @DESCRIPTION Post a new chat message
 */
chatRouter.route("/").post(postMessage);

/**
 * @METHOD GET
 * @ROUTE /api/chat/:eventId
 * @DESCRIPTION Get chat history for an event ID
 */
chatRouter.route("/:eventId").get(getChatHistory);

module.exports = chatRouter;
