const Comment = require("../config/databaseConfig/comment.schema");

exports.fetchComments = async () => {
  try {
    const comments = await Comment.find({});
    if (comments.length === 0) {
      return Promise.reject({ statusCode: 404, message: "No comments found" });
    }
    return comments;
  } catch (error) {
    return Promise.reject(error);
  }
};

exports.fetchComment = async (id) => {
  try {
    const comment = await Comment.findById(id);
    if (!comment) {
      return Promise.reject({ statusCode: 404, message: "No comment found" });
    }
    return comment;
  } catch (error) {
    return Promise.reject(error);
  }
};

exports.fetchEventComments = async (eventId) => {
  try {
    const comments = await Comment.find({ eventId });
    if (comments.length === 0)
      return Promise.reject({ statusCode: 404, message: "No comments found" });
    return comments;
  } catch (error) {
    return Promise.reject(error);
  }
};
