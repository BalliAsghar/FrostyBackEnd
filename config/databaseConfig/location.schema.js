const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  parkId: { type: Number, unqiue: true },
  name: { type: String },
  description: { type: String },
  longitude: {
    type: Number,
  },
  latitude: {
    type: Number,
  },
});

module.exports = Location = mongoose.model("Location", locationSchema);
