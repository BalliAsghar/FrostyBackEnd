const User = require("../config/databaseConfig/user.schema.js");

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
    const postedUser = new User(body);
    const response = await postedUser.save();
    console.log(response);
  } catch (err) {
    console.log(err);
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
  } catch {
    console.log("error in model");
  }
};

exports.removeUser = async (id) => {
  try {
    const user = await User.findById(id);
    const deletedUser = await User.findByIdAndDelete(id);
    return deletedUser;
  } catch {
    console.log("not found");
  }
};
