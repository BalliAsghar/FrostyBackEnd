exports.handleWrongMethods = (req, res) => {
  res.status(405).send({ message: "Method not allowed" });
};

exports.handleWrongUrls = (req, res) => {
  res.status(404).send({ message: "Invalid Url" });
};
