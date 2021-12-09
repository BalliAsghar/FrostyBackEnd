const { fetchParks, fetchPark } = require("../models/parksModel");

exports.getAllParks = async (req, res, next) => {
  try {
    const parks = await fetchParks();
    res.status(200).json({ parks });
  } catch (error) {
    next(error);
  }
};

exports.getPark = async (req, res, next) => {
  try {
    const { parkId } = req.params;
    const park = await fetchPark(parkId);
    res.status(200).json({ park });
  } catch (error) {
    next(error);
  }
};
