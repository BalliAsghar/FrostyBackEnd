const { fetchComments, fetchComment } = require("../models/commentsModel");

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
