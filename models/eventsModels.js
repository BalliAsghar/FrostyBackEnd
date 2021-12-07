const Event = require("../config/databaseConfig/event.schema.js");

exports.fetchEvents = () => {
  console.log("Fetch Events");
};

exports.insertEvent = async (body) => {
  try {
    const newEvent = new Event(body);
    const postedEvent = await newEvent.save();
    return postedEvent;
  } catch {
    console.log("error in model");
  }
};

exports.fetchEvent = async (id) => {
  try {
    const event = await Event.findById(id).populate("creatorId").exec();
    return event;
  } catch (err) {
    console.log(err);
  }
};
