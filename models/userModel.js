const User = require("../config/databaseConfig/user.schema.js");

exports.fetchUsers = async () => {
  try {
    const users = await User.find({});
    return users;
  } catch {
    console.log("error in model");
  }
};

exports.insertUser = async (body) => {
  try {
    const postedUser = new User(body);
    const response = await postedUser.save();
    console.log(response);
  } catch {
    console.log("error");
  }
};

exports.fetchUser = async (id) => {
  try {
    const user = await User.findById(id);
    return user;
  } catch {
    console.log("error in model");
  }
};

exports.updateUser = async (id, body) => {
  try {
    await User.findByIdAndUpdate(id, body);
    const updatedUser = User.findById(id);
    return updatedUser;
  } catch {
    console.log("error in model");
  }
};
