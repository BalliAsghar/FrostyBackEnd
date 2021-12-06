const mongoose = require("mongoose");

const EventSchema = mongoose.Schema({
  title: { type: String },
  description: { type: String },
  creatorId: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  eventDateTime: {
    eventStart: { type: String },
    eventEnd: { type: String },
  },
  location: {
    longitude: {
      type: Number,
    },
    latitude: {
      type: Number,
    },
    name: { type: String },
    description: { type: String },
  },
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Categories" }],
  tags: [{ type: String }],
  dateCreated: { type: Date, default: Date.now },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "Users" }],
  comment_count: { type: Number },
});

module.exports = Event = mongoose.model("Events", EventSchema);
