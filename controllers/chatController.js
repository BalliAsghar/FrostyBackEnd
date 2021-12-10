const { fetchChatHistory, insertMessage } = require("../models/chatModels");

exports.getChatHistory = async (req, res, next) => {
  try {
    const { eventTitle } = req.params;
    const messages = await fetchChatHistory(eventTitle);
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
