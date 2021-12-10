const { fetchChatHistory, insertMessage } = require("../models/chatModels");

exports.getChatHistory = async (req, res, next) => {
  try {
    const { eventId } = req.params;
    const messages = await fetchChatHistory(eventId);
    res.status(200).json({ messages });
  } catch (error) {
    next(error);
  }
};

exports.postMessage = async (req, res, next) => {
  try {
    const { body } = req;
    const newMessage = await insertMessage(body);
    res.status(201).json({ newMessage });
  } catch (error) {
    next(error);
  }
};
