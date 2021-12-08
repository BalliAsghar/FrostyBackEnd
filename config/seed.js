const mongoose = require("mongoose");
const connectdb = require("./db");
const dotenv = require("dotenv");
const User = require("./databaseConfig/user.schema");
const Event = require("./databaseConfig/event.schema");
const Comment = require("./databaseConfig/comment.schema");
const Category = require("./databaseConfig/category.schema");
const mockUsers = require("./mockData/MOCK_USERS.json");
const mockEvents = require("./mockData/MOCK_EVENT.json");

const seedData = async () => {
  console.log("Begin seed Users");
  console.log("clear and insert users");
  console.log("Begin delete Users");
  await User.deleteMany({});
  console.log("clear and insert events");
  await Event.deleteMany({});
  await User.insertMany(mockUsers);
  console.log("clear and insert events");
  await Event.insertMany(mockEvents);
};

mongoose
  .connect(
    "mongodb+srv://frostythesnowman2021:frostythesnowman2021@thesnowman.1ublf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DB connection open");
    return seedData();
  })
  .then(() => {
    console.log("closing connection");
    return mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
  });

// seedData()
//   .then(() => {
//     console.log("closing connection");
//     mongoose.connection.close();
//   })
//   .catch((err) => {
//     console.log(err);
//   });

module.exports = seedData;
