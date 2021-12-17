const mongoose = require("mongoose");
const connectdb = require("./db");
const dotenv = require("dotenv");
const User = require("./databaseConfig/user.schema");
const Event = require("./databaseConfig/event.schema");
const Comment = require("./databaseConfig/comment.schema");
const Category = require("./databaseConfig/category.schema");
const Chat = require("./databaseConfig/chat.schema");
const mockUsers = require("./mockData/MOCK_USERS.json");
const mockEvents = require("./mockData/MOCK_EVENT.json");
const LocationSchema = require(`./databaseConfig/location.schema`);
const mockParks = require(`./mockData/MOCK_PARKS.json`);
const mockComments = require("./mockData/MOCK_COMMENTS.json");
const mockChat = require("./mockData/MOCK_CHAT.json");

// load envs
dotenv.config({
  path: "./.env.develop",
});

const runSeed = () => {
  console.log("running seed");
  mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("DB connection open");
      return User.deleteMany({});
    })
    .then(() => {
      return Event.deleteMany({});
    })
    .then(() => {
      return LocationSchema.deleteMany({});
    })
    .then(() => {
      return Comment.deleteMany({});
    })
    .then(() => {
      return Chat.deleteMany({});
    })
    .then(() => {
      return User.insertMany(mockUsers);
    })
    .then(() => {
      return Event.insertMany(mockEvents);
    })
    .then(() => {
      return LocationSchema.insertMany(mockParks);
    })
    .then(() => {
      return Comment.insertMany(mockComments);
    })
    .then(() => {
      return Chat.insertMany(mockChat);
    })
    .then(() => {
      return mongoose.connection.close();
    })
    .catch((err) => {
      console.log(err);
    });
};

runSeed();

module.exports = runSeed;
