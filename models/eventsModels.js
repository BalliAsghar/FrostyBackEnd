const Event = require("../config/databaseConfig/event.schema.js");
// ✅
exports.fetchEvents = async (query) => {
  try {
    const { title, creator, description } = query;
    const queryObj = {};
    if (title) queryObj.title = title;
    if (creator) queryObj.creator = creator;
    if (description) queryObj.description = description;
    const events = await Event.find(queryObj);

    if (events) return events;

    return Promise.reject({ statusCode: 404, message: "No event found" });
  } catch (err) {
    return Promise.reject(err);
  }
};

exports.insertEvent = async (body) => {
  try {
    //
  } catch (err) {
    return Promise.reject(err);
  }
};

exports.fetchEvent = async (id) => {
  try {
    console.log(id);
    const event = await Event.find({ eventId: id });
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
