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
