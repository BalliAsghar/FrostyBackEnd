const mongoose = require("mongoose");

const EventSchema = mongoose.Schema({
  eventId: { type: Number, unique: true, required: true },
  title: { type: String },
  description: { type: String },
  creator: { type: String, ref: "User" },
  eventStart: { type: String },
  eventEnd: { type: String },
  location: { type: Number, ref: "Location" },
  categories: [{ type: String, ref: "Category" }],
  tags: [{ type: String }],
  dateCreated: { type: Date, default: Date.now },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  comment_count: { type: Number },
});

module.exports = Event = mongoose.model("Event", EventSchema);
