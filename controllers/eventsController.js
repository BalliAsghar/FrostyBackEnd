const {
  fetchEvents,
  insertEvent,
  fetchEvent,
  removeEvent,
} = require("../models/eventsModels");
const { fetchEventComments } = require("../models/commentsModel");

exports.getEvents = async (req, res, next) => {
  try {
    const events = await fetchEvents();
    res.status(200).json({ events });
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
  const { eventId } = req.params;
  try {
    const event = await fetchEvent(eventId);
    res.status(200).json({ event });
  } catch (err) {
    next(err);
  }
};

exports.deleteEvent = async (req, res, next) => {
  try {
    const { eventId } = req.params;
    const response = await removeEvent(eventId);
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};

exports.getEventComments = async (req, res, next) => {
  try {
    const { eventId } = req.params;
    const comments = await fetchEventComments(eventId);
    res.status(200).json({ comments });
  } catch (err) {
    next(err);
  }
};

exports.postCommentToEvent = async (req, res, next) => {
  const { eventId } = req.params;
  const { body } = req;
  try {
    const comment = await insertCommentToEvent(eventId, body);
    res.status(201).json({ comment });
  } catch (err) {
    next(err);
  }
};
