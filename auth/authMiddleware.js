const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  // Get token from header
  const token = req.header("x-auth-token");

  if (!token)
    return res.status(401).json({ message: "No token, authorization denied" });

  // Verify token
  try {
    jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
      if (error == null) {
        req.user = decoded;
        next();
      } else {
        return res.json({
          Status: 401,
          message: "Not a Valid Token, authorization denied",
        });
      }
    });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};
