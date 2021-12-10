const Event = require("../config/databaseConfig/event.schema.js");

exports.fetchEvents = async (query) => {
  try {
    const { title, creator, eventStart } = query;
    const filterQuery = {};
    if (title) filterQuery.title = title;
    if (creator) filterQuery.creator = creator;
    if (eventStart) filterQuery.eventStart = eventStart;
    console.log(filterQuery);

    const events = await Event.find(filterQuery);
    if (events.length > 0) return events;

    return Promise.reject({ statusCode: 404, message: "No events found" });
  } catch (err) {
    return Promise.reject(err);
  }
};

exports.insertEvent = async (body) => {
  try {
    const newEvent = new Event(body);
    const postedEvent = await newEvent.save();
    return postedEvent;
  } catch (err) {
    return Promise.reject(err);
  }
};

exports.fetchEvent = async (id) => {
  try {
    const event = await Event.findOne({ eventId: id });
    return event;
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
