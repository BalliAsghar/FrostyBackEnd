const Comment = require("../config/databaseConfig/comment.schema");
const Event = require("../config/databaseConfig/event.schema");

exports.fetchComment = async (id, user) => {
  try {
    return "Hello";
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

exports.insertCommentToEvent = async (eventId, body, user) => {
  try {
    const { commentBody } = body;
    const event = await Event.findOne({ eventId: eventId });
    if (!event)
      return Promise.reject({ statusCode: 404, message: "No event found" });
    const comment = await Comment.create({
      eventId,
      username: user.id,
      commentBody,
    });

    // push comment to event comments array
    await Event.findOneAndUpdate(
      { eventId: eventId },
      {
        $push: { comments: comment._id },
      },
      { new: true }
    );

    return comment;
  } catch (error) {
    return Promise.reject(error);
  }
};

exports.removeComment = async (id) => {
  try {
    const comment = await Comment.findByIdAndDelete(id);
    if (!comment)
      return Promise.reject({ statusCode: 404, message: "No comment found" });
    return comment;
  } catch (error) {
    return Promise.reject(error);
  }
};

exports.changeComment = async (id, body) => {
  try {
    const { newCommentBody, newVote } = body;
    if (newVote) {
      const vote = await Comment.findByIdAndUpdate(
        id,
        {
          $inc: { votes: newVote },
        },
        { new: true }
      );
      return vote;
    }
    if (newCommentBody) {
      const comment = await Comment.findByIdAndUpdate(
        id,
        {
          commentBody: newCommentBody,
        },
        { new: true }
      );
      return comment;
    }
    return Promise.reject({
      statusCode: 400,
      message: "No comment body or vote provided",
    });
  } catch (error) {
    return Promise.reject(error);
  }
};
