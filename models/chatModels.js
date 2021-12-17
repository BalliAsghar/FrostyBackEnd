const Chat = require("../config/databaseConfig/chat.schema");

exports.fetchChatHistory = async (eventTitle) => {
  try {
    const messages = await Chat.find({ title: eventTitle }).sort({
      dateCreated: 1,
    });
    if (messages.length > 0) return messages;
    return Promise.reject({ statusCode: 404, message: "No messages found" });
  } catch (error) {
    return Promise.reject(error);
  }
};

exports.insertMessage = async (body) => {
  try {
    const newMessage = new Chat(body);
    const message = await newMessage.save();
    return message;
  } catch (error) {
    return Promise.reject(error);
  }
};
