const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  displayName: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  pronouns: { type: String },
  avatarUrl: {
    type: String,
    default:
      "https://t3.ftcdn.net/jpg/03/46/83/96/240_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
  },
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
