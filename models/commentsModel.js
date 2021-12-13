const Comment = require("../config/databaseConfig/comment.schema");
const Event = require("../config/databaseConfig/event.schema");

exports.fetchComment = async (Id) => {
  try {
    const comment = await Comment.findById(Id).populate(
      "eventId",
      "title eventId"
    );
    if (!comment)
      return Promise.reject({ statusCode: 404, message: "Comment not found" });

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

exports.insertCommentToEvent = async (eventId, body, user) => {
  try {
    const { commentBody } = body;
    const event = await Event.findOne({ eventId: eventId });
    if (!event)
      return Promise.reject({ statusCode: 404, message: "No event found" });
    const comment = await Comment.create({
      eventId: event._id,
      username: user.id,
      refId: eventId,
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

exports.removeComment = async (id, user) => {
  try {
    const comment = await Comment.findById(id);
    if (!comment)
      return Promise.reject({ statusCode: 404, message: "Comment not found" });
    if (comment.username.toString() !== user.id)
      return Promise.reject({
        statusCode: 403,
        message: "You are not allowed to delete this comment",
      });
    await Comment.findByIdAndDelete(id);
    return comment;
  } catch (error) {
    return Promise.reject(error);
  }
};

exports.upVote = async (id, user) => {
  try {
    const comment = await Comment.findById(id);
    if (!comment)
      return Promise.reject({ statusCode: 404, message: "Comment not found" });

    // check if user is comment owner
    if (comment.username.toString() == user.id)
      return Promise.reject({
        statusCode: 403,
        message: "You are crazy! You can't upvote your own comment",
      });
    // check if user has already upvoted comment
    if (comment.upVoters.includes(user.id))
      return Promise.reject({
        statusCode: 403,
        message: "You have already upvoted this comment",
      });

    // upvote comment
    await Comment.findByIdAndUpdate(
      id,
      {
        $push: { upVoters: user.id },
        $inc: { votes: 1 },
      },
      { new: true }
    );

    return comment;
  } catch (error) {
    return Promise.reject(error);
  }
};

exports.fetchComments = async (eventId) => {
  try {
    console.log(eventId);
    const comments = await Comment.find({ refId: eventId })
      .populate("username", "displayName")
      .exec();
    if (comments.length === 0)
      return Promise.reject({ statusCode: 404, message: "No comments found" });
    return comments;
  } catch (error) {
    return Promise.reject(error);
  }
};
