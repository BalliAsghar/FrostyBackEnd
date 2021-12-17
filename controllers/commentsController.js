const e = require("express");
const {
  fetchComments,
  fetchComment,
  insertCommentToEvent,
  removeComment,
  upVote,
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
    next(err);
  }
};

exports.postComment = async (req, res, next) => {
  try {
    const { body } = req;
    const { eventId } = req.params;
    const newComment = await insertCommentToEvent(eventId, body, req.user);
    res.status(201).json(newComment);
  } catch (err) {
    next(err);
  }
};

exports.deleteComment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedComment = await removeComment(id, req.user);
    res.status(200).json({ deletedComment });
  } catch (err) {
    next(err);
  }
};

exports.updateComment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedComment = await upVote(id, req.user);
    res.status(200).json({ updatedComment });
  } catch (err) {
    next(err);
  }
};

exports.getCommentsByEvent = async (req, res, next) => {
  try {
    const { eventId } = req.params;
    const comments = await fetchComments(eventId);
    res.status(200).json(comments);
  } catch (err) {
    next(err);
  }
};
