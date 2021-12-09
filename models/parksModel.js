const Location = require("../config/databaseConfig/location.schema");

exports.fetchParks = async () => {
  try {
    const parks = await Location.find({});
    if (parks.length > 0) return parks;
    return Promise.reject({ statusCode: 404, message: "No parks found" });
  } catch (err) {
    return Promise.reject(err);
  }
};

exports.fetchPark = async (id) => {
  try {
    const park = await Location.findOne({ parkId: id });
    console.log(park);
    if (park) return park;
    return Promise.reject({ statusCode: 404, message: "Park not found" });
  } catch (err) {
    return Promise.reject(err);
  }
};
