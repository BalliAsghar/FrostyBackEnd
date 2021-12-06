const { fetchEvents, insertEvent } = require("../models/eventsModels");
exports.getEvents = (req, res) => {
  fetchEvents();
};

exports.postEvent = (req, res) => {
  insertEvent();
};
