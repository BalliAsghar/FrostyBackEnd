const e = require("express");
const {
  fetchComments,
  fetchComment,
  insertCommentToEvent,
  removeComment,
  changeComment,
} = require("../models/commentsModel");

exports.getComments = (req, res) => {
  fetchComments();
};

// Get a single comment
exports.getComment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const comment = await fetchComment(id);
    res.status(200).json(comment);
  } catch (err) {
    next(error);
  }
};

exports.postComment = async (req, res, next) => {
  try {
    const { body } = req;
    const newComment = await insertCommentToEvent(body);
    res.status(201).json(newComment);
  } catch (error) {
    next(error);
  }
};

exports.deleteComment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedComment = await removeComment(id);
    res.status(200).json({ deletedComment });
  } catch (error) {
    next(error);
  }
};

exports.updateComment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const updatedComment = await changeComment(id, body);
    res.status(200).json({ updatedComment });
  } catch (error) {
    next(error);
  }
};
