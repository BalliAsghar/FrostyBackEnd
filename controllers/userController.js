const {
  fetchUsers,
  insertUser,
  fetchUser,
  updateUser,
} = require("../models/userModel.js");

exports.getUsers = async (req, res) => {
  try {
    const response = await fetchUsers();
    console.log(response);
  } catch {
    console.log("error");
  }
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

exports.patchUser = async (req, res) => {
  const { user_id } = req.params;
  const { body } = req;
  try {
    const response = await updateUser(user_id, body);
    console.log(response);
  } catch {
    console.log("error in controller");
  }
};
