const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  displayName: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  pronouns: { type: String },
  avatarUrl: { type: String },
  dateJoined: { type: String, default: Date.now },
  followedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  followedCategories: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  ],
  postedPictures: [{ type: String }],
  attendedEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }],
  hostedEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }],
});

module.exports = User = mongoose.model("User", UserSchema);
