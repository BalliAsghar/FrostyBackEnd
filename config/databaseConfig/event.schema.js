const mongoose = require("mongoose");

const EventSchema = mongoose.Schema({
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId(),
  },
  title: { type: String, required: true },
  description: { type: String },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  eventStart: { type: String },
  eventEnd: { type: String },
  location: {
    name: { type: String },
    description: { type: String },
    lat: { type: Number },
    lng: { type: Number },
  },
  eventImage: { type: String },
  eventPhotos: [{ type: String }],
  category: { type: String },
  dateCreated: { type: Date, default: Date.now },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  comment_count: { type: Number },
});

module.exports = Event = mongoose.model("Event", EventSchema);
