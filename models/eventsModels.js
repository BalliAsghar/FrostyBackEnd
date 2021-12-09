const Event = require("../config/databaseConfig/event.schema.js");

exports.fetchEvents = async () => {
  try {
    const events = await Event.find({});
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
    const event = await Event.findOne({ event_id: id });
    return event;
  } catch (err) {
    console.log(err);
  }
};

exports.removeEvent = async (id) => {
  try {
    const event = await Event.findById(id);
    const deletedEvent = await Event.findByIdAndDelete(id);
    return deletedEvent;
  } catch (err) {
    console.log(err);
  }
};
