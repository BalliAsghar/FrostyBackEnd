const { fetchUsers, insertUser, fetchUser } = require("../models/userModel.js");

exports.getUsers = (req, res) => {
  fetchUsers();
};

exports.postUser = async (req, res) => {
  const { body } = req;
  try {
    const reponse = await insertUser(body);
  } catch {
    console.log("failed");
  }
};

exports.getUser = async (req, res) => {
  const { user_id } = req.params;
  try {
    const response = await fetchUser(user_id);
    console.log(response);
  } catch {
    console.log("error in controller");
  }
};
