const Comment = require("../config/databaseConfig/comment.schema");
exports.fetchComments = async () => {
  try {
    const comments = await Comment.find({});
    if (comments.length === 0) {
      return Promise.reject({ statusCode: 404, message: "No comments found" });
    }
    return comments;
  } catch (error) {}
};
