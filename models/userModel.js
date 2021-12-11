const User = require("../config/databaseConfig/user.schema.js");
const Event = require("../config/databaseConfig/event.schema.js");

exports.fetchUsers = async () => {
  try {
    const users = await User.find({});

    if (users.length > 0) {
      return users;
    }

    return Promise.reject({ statusCode: 404, message: "Users not found" });
  } catch (err) {
    return Promise.reject(err);
  }
};

exports.insertUser = async (body) => {
  try {
    const user = await User.findOne({ username: body.username });
    const email = await User.findOne({ email: body.email });
    if (user || email) {
      return Promise.reject({
        statusCode: 400,
        message: "Username or email already exists",
      });
    }
    const newUser = await User.create(body);
    return newUser;
  } catch (err) {
    return Promise.reject(err);
  }
};

exports.fetchUser = async (id) => {
  try {
    const user = await User.findById(id).exec();

    if (!user) {
      return Promise.reject({ statusCode: 404, message: "User not found" });
    }
    return user;
  } catch (err) {
    return Promise.reject(err);
  }
};

exports.updateUser = async (id, body) => {
  try {
    await User.findByIdAndUpdate(id, body);
    const updatedUser = User.findById(id);
    return updatedUser;
  } catch (err) {
    return Promise.reject(err);
  }
};

exports.removeUser = async (id) => {
  try {
    const user = await User.findById(id);
    const deletedUser = await User.findByIdAndDelete(id);
    return deletedUser;
  } catch (err) {
    return Promise.reject(err);
  }
};

exports.fetchEventsByUsername = async (username) => {
  // find all events where creator is the same as the one passed in
  try {
    const events = await Event.find({ creator: username });
    if (events.length > 0) {
      return events;
    }
    return Promise.reject({
      statusCode: 404,
      message: "Events not found",
    });
  } catch (err) {
    return Promise.reject(err);
  }
};
