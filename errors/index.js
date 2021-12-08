module.exports = (err, req, res, next) => {
  console.log(err);
  // ObjectId Error is thrown by mongoose when trying to find a document that doesn't exist
  if (err.kind === "ObjectId") {
    return res.status(404).json({
      statusCode: 404,
      message: "Invalid ID",
    });
  }

  // is stausCode is provided, use it, otherwise use the default status code of 500
  const statusCode = err.statusCode || 500;
  // is message is provided, use it, otherwise use the default message of "Internal Server Error"
  const message = err.message || "Internal Server Error";
  // send the response with the status code and message
  res.status(statusCode).json({
    statusCode: statusCode,
    message,
  });
};
