const Event = require("../config/databaseConfig/event.schema.js");
const uploadToS3 = require("../utils/uploadToS3");
// ✅
exports.fetchEvents = async (query) => {
  try {
    const { title, creator, description } = query;
    const queryObj = {};
    if (title) queryObj.title = title;
    if (creator) queryObj.creator = creator;
    if (description) queryObj.description = description;

    const events = await Event.find(queryObj)
      .populate("creator", "displayName avatarUrl username")
      .sort({ createdAt: 1 });

    if (events) return events;

    return Promise.reject({ statusCode: 404, message: "No event found" });
  } catch (err) {
    return Promise.reject(err);
  }
};

exports.insertEvent = async (body, files, user) => {
  try {
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

    return savedEvent;
  } catch (err) {
    return Promise.reject(err);
  }
};

exports.fetchEvent = async (id) => {
  try {
    const event = await Event.findOne({ eventId: id })
      .populate("creator", "displayName avatarUrl username")
      .populate("participants", "displayName avatarUrl username");

    if (event) return event;

    return Promise.reject({ statusCode: 404, message: "No event found" });
  } catch (err) {
    return Promise.reject(err);
  }
};

exports.removeEvent = async (id) => {
  try {
    const event = await Event.findById(id);
    const deletedEvent = await Event.findByIdAndDelete(id);
    return deletedEvent;
  } catch (err) {
    return Promise.reject(err);
  }
};

exports.updateEvent = async (eventId, body) => {
  try {
    console.log(body);
    const updatedEvent = await Event.findOneAndUpdate(
      { eventId: eventId },
      body,
      { new: true }
    );
    console.log(updatedEvent);
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

exports.perticipateInEvent = async (eventId, user) => {
  try {
    const event = await Event.findOne({ eventId: eventId });
    if (!event) {
      return Promise.reject({
        statusCode: 400,
        message: "No event found",
      });
    }

    const updatedEvent = await Event.findOneAndUpdate(
      { eventId: eventId },
      { $addToSet: { participants: user.id } },
      { new: true }
    );

    return updatedEvent;
  } catch (error) {
    return Promise.reject(error);
  }
};

exports.deletePerticipateInEvent = async (eventId, user) => {
  try {
    const event = await Event.findOne({ eventId: eventId });
    if (!event) {
      return Promise.reject({
        statusCode: 400,
        message: "No event found",
      });
    }

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
