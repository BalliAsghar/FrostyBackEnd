const uploadToS3 = require("./uploadToS3");
const uploadPhoto = async (req, res, next) => {
  try {
    if (!req.files)
      return Promise.reject({
        statusCode: 400,
        message: "No file was uploaded",
      });
    const { image } = req.files;

    const response = await uploadToS3(image);
    res.send(response);
  } catch (error) {
    next(error);
  }
};

module.exports = { uploadPhoto };
