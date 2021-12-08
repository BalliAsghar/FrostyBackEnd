const {
  fetchEvents,
  insertEvent,
  fetchEvent,
  removeEvent,
} = require("../models/eventsModels");

exports.getEvents = async (req, res, next) => {
  try {
    const response = await fetchEvents();
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};

exports.postEvent = async (req, res, next) => {
  const { body } = req;
  try {
    const response = await insertEvent(body);
    res.status(201).json(response);
  } catch (err) {
    next(err);
  }
};

exports.getEvent = async (req, res, next) => {
  const { event_id } = req.params;
  try {
    const response = await fetchEvent(event_id);
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};

exports.deleteEvent = async (req, res, next) => {
  try {
    const { event_id } = req.params;
    const response = await removeEvent(event_id);
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};
