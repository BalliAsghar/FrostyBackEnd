const { fetchUser } = require("../models/userModel.js");
exports.getUsers = (req, res) => {
  fetchUser();
};
