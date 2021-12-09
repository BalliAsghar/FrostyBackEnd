const mongoose = require("mongoose");

const commentsSchema = mongoose.Schema({
  username: { type: String, ref: "User" },
  body: { type: String },
  dateCreated: { type: Date, default: Date.now },
  eventId: { type: Number, ref: "Event" },
  votes: { type: Number, default: 0 },
});

module.exports = Comment = mongoose.model("Comment", commentsSchema);
