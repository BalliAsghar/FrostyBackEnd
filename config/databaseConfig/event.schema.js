const mongoose = require("mongoose");

const EventSchema = mongoose.Schema({
  event_id: { type: Number, unique: true, required: true },
  title: { type: String },
  description: { type: String },
  creator: { type: String, ref: "User" },
  eventDateTime: {
    eventStart: { type: String },
    eventEnd: { type: String },
  },
  location: { type: mongoose.Schema.Types.ObjectId, ref: "Location" },
  categories: [{ type: String, ref: "Category" }],
  tags: [{ type: String }],
  dateCreated: { type: Date, default: Date.now },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  comment_count: { type: Number },
});

module.exports = Event = mongoose.model("Event", EventSchema);
