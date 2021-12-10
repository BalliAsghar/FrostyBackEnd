const {
  fetchUsers,
  insertUser,
  fetchUser,
  updateUser,
  removeUser,
  fetchEventsByUsername,
} = require("../models/userModel.js");

exports.getUsers = async (req, res, next) => {
  try {
    const users = await fetchUsers();
    res.status(200).send({ users });
  } catch (err) {
    next(err);
  }
};

exports.postUser = async (req, res, next) => {
  const { body } = req;
  try {
    const response = await insertUser(body);
    res.status(201).send({ response });
  } catch (err) {
    next(err);
  }
};

exports.getUser = async (req, res, next) => {
  const { user_id } = req.params;
  try {
    const user = await fetchUser(user_id);
    res.status(200).send({ user });
  } catch (err) {
    next(err);
  }
};

exports.patchUser = async (req, res, next) => {
  const { user_id } = req.params;
  const { body } = req;
  try {
    const updatedUser = await updateUser(user_id, body);
    res.status(200).send({ updatedUser });
  } catch (err) {
    next(err);
  }
};

exports.deleteUser = async (req, res, next) => {
  const { user_id } = req.params;
  try {
    const response = await removeUser(user_id);
    console.log(response);
  } catch (err) {
    next(err);
  }
};

exports.getEventsByUsername = async (req, res, next) => {
  try {
    const { username } = req.params;
    const events = await fetchEventsByUsername(username);
    res.status(200).send({ events });
  } catch (error) {
    next(error);
  }
};
