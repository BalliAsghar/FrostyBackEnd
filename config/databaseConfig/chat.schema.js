const mongoose = require("mongoose");

const chatSchema = mongoose.Schema({
  username: { type: String, ref: "User" },
  title: { type: String, ref: "Event" },
  dateCreated: { type: Date, default: Date.now },
  eventId: { type: Number, ref: "Event" },
  messageBody: { type: String },
});

module.exports = Comment = mongoose.model("Chat", chatSchema);
