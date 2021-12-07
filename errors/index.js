module.exports = (err, req, res, next) => {
  if (err.kind === "ObjectId") {
    return res.status(404).json({
      status: "error",
      message: "Invalid ID",
    });
  }

  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    status: "error",
    message,
  });
};
