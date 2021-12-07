const { fetchUser, insertUser } = require("../models/userModel.js");

exports.getUsers = (req, res) => {
  fetchUser();
};

exports.postUser = async (req, res) => {
  const { body } = req;
  try {
    const reponse = await insertUser(body);
  } catch {
    console.log("failed");
  }
};
