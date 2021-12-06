const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  displayName: { type: String },
  dateOfBirth: { type: String },
  pronouns: { type: String },
  avatarUrl: { type: String },
  dateJoined: { type: String, default: Date.now() },
  followedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Users" }],
  followedCategories: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Categories" },
  ],
  postedPictures: [{ type: String }],
  attendedEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: "Events" }],
  hostedEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: "Events" }],
});

module.exports = User = mongoose.model("Users", UserSchema);
