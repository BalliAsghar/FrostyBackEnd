const { fetchComments } = require("../models/commentsModel");
exports.getComments = (req, res) => {
  fetchComments();
};
