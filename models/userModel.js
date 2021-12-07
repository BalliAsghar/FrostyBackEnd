const User = require("../config/databaseConfig/user.schema.js");

exports.fetchUser = () => {
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
