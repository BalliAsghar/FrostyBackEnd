const Event = require("../config/databaseConfig/event.schema.js");
const User = require("../config/databaseConfig/user.schema.js");

const uploadToS3 = require("../utils/uploadToS3");
// ✅
exports.fetchEvents = async (query) => {
  try {
    const { title, creator, description, category } = query;
    const queryObj = {};
    if (title) queryObj.title = title;
    if (creator) queryObj.creator = creator;
    if (description) queryObj.description = description;
    if (category) queryObj.category = category;

    const events = await Event.find(queryObj)
      .populate("creator", "displayName avatarUrl username")
      .populate("participants", "displayName avatarUrl username")
      .sort({ createdAt: 1 });

    if (events) return events;

    return Promise.reject({ statusCode: 404, message: "No event found" });
  } catch (err) {
    return Promise.reject(err);
  }
};
// ✅
exports.insertEvent = async (body, files, user) => {
  try {
    console.log(body);
    // check if body have all the required fields
    const { title, description, eventStart, eventEnd } = body;
    if (!title || !description || !eventStart || !eventEnd) {
      return Promise.reject({
        statusCode: 400,
        message: "Please provide all the required fields",
      });
    }

    // cheack if the user has send image
    const S3Res = files ? await uploadToS3(files) : null;

    // grab the image url from S3
    const eventImage = S3Res ? S3Res.Location : null;

    // create a new event
    const newEvent = new Event({
      ...body,
      eventImage,
      creator: user.id,
    });

    // save the event
    const savedEvent = await newEvent.save();

    // add the event to the user hosted events
    await User.findOneAndUpdate(
      { _id: user.id },
      { $addToSet: { hostedEvents: savedEvent._id } },
      { new: true }
    );

    return savedEvent;
  } catch (err) {
    return Promise.reject(err);
  }
};
// ✅
exports.fetchEvent = async (id) => {
  try {
    const event = await Event.findOne({ eventId: id })
      .populate("creator", "displayName avatarUrl username")
      .populate("participants", "displayName avatarUrl username")

      // nested populate for comments and votes
      .populate({
        path: "comments",
        populate: {
          path: "username",
          select: "displayName avatarUrl username",
        },
      });

    if (event) return event;

    return Promise.reject({ statusCode: 404, message: "No event found" });
  } catch (err) {
    return Promise.reject(err);
  }
};
// ✅
exports.removeEvent = async (id, user) => {
  try {
    const event = await Event.findOne({ eventId: id });
    if (!event)
      return Promise.reject({ statusCode: 404, message: "No event found" });

    // check if the user is the creator of the event
    if (event.creator.toString() !== user.id)
      return Promise.reject({
        statusCode: 400,
        message: "You are not the creator of this event",
      });

    await Event.findOneAndDelete({ eventId: id });
    await User.findOneAndUpdate(
      { _id: user.id },
      { $pull: { hostedEvents: event._id } },
      { new: true }
    );

    return Promise.resolve({
      statusCode: 200,
      message: "Event deleted successfully",
    });
  } catch (error) {
    return Promise.reject(error);
  }
};
// ✅
exports.updateEvent = async (eventId, body, user, files) => {
  try {
    const event = await Event.findOne({ eventId: eventId });
    if (!event) {
      return Promise.reject({ statusCode: 404, message: "No event found" });
    }

    // check if the user is the creator of the event
    if (event.creator.toString() !== user.id)
      return Promise.reject({
        statusCode: 400,
        message: "You are not the creator of this event",
      });

    if (files) {
      const S3Res = await uploadToS3(files);
      const eventImage = S3Res.Location;
      body.eventImage = eventImage;
    }

    const updatedEvent = await Event.findOneAndUpdate(
      { eventId: eventId },
      body,
      { new: true }
    );

    if (!updatedEvent) {
      return Promise.reject({
        statusCode: 400,
        message: "No comment body or vote provided",
      });
    }
    return updatedEvent;
  } catch (error) {
    return Promise.reject(error);
  }
};
// ✅
exports.perticipateInEvent = async (eventId, user) => {
  try {
    const event = await Event.findOne({ eventId: eventId });
    if (!event) {
      return Promise.reject({
        statusCode: 400,
        message: "No event found",
      });
    }

    // check if the user is the creator of the event
    if (event.creator.toString() === user.id)
      return Promise.reject({
        statusCode: 400,
        message: "You are the creator of this event",
      });

    // add the user to the participants array
    const updatedEvent = await Event.findOneAndUpdate(
      { eventId: eventId },
      { $addToSet: { participants: user.id } },
      { new: true }
    );

    // add the event to the user attendedEvents
    await User.findOneAndUpdate(
      { _id: user.id },
      { $addToSet: { attendedEvents: event._id } },
      { new: true }
    );

    return updatedEvent;
  } catch (error) {
    return Promise.reject(error);
  }
};
// ✅
exports.deletePerticipateInEvent = async (eventId, user) => {
  try {
    const event = await Event.findOne({ eventId: eventId });
    if (!event) {
      return Promise.reject({
        statusCode: 400,
        message: "No event found",
      });
    }

    // check if the user is the creator of the event
    if (event.creator.toString() === user.id)
      return Promise.reject({
        statusCode: 400,
        message: "You are the creator of this event",
      });

    const updatedEvent = await Event.findOneAndUpdate(
      { eventId: eventId },
      { $pull: { participants: user.id } },
      { new: true }
    );

    return updatedEvent;
  } catch (error) {
    return Promise.reject(error);
  }
};
