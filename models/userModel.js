const User = require("../config/databaseConfig/user.schema.js");

exports.fetchUsers = () => {
  console.log("Fetch User");
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
