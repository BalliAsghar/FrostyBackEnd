const { fetchEvents, insertEvent } = require("../models/eventsModels");
exports.getEvents = (req, res) => {
  fetchEvents();
};

exports.postEvent = async (req, res) => {
  const { body } = req;
  try {
    const response = await insertEvent(body);
    console.log(response);
  } catch {
    console.log("error in controller");
  }
};
