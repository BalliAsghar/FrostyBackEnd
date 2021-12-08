const mongoose = require("mongoose");

module.exports.connectDB = async () => {
  await mongoose.connect(process.env.DB_URL);
};

module.exports.closeDB = async () => {
  await mongoose.connection.close();
};
