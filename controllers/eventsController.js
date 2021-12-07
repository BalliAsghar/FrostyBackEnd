const {
  fetchEvents,
  insertEvent,
  fetchEvent,
  removeEvent,
} = require("../models/eventsModels");
exports.getEvents = async (req, res) => {
  try {
    const response = await fetchEvents();
    console.log(response);
  } catch {
    console.log("error");
  }
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

exports.getEvent = async (req, res) => {
  const { event_id } = req.params;
  try {
    const response = await fetchEvent(event_id);
    console.log(response);
  } catch {
    console.log("error");
  }
};

exports.deleteEvent = async (req, res) => {
  const { event_id } = req.params;
  console.log("event id:", event_id);
  try {
    const response = await removeEvent(event_id);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
