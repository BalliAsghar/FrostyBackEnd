const mongoose = require("mongoose");

const commentsSchema = mongoose.Schema({
  username: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  commentBody: { type: String, required: true },
  dateCreated: { type: Date, default: Date.now },
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },
  votes: { type: Number, default: 0 },
});

module.exports = Comment = mongoose.model("Comment", commentsSchema);
