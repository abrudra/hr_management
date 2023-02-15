const jwt= require("jsonwebtoken");

const checkAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new Error("Authorization header missing");
    }
    const token = authHeader.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_KEY);
    req.userData = decodedToken;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or Expired token provided..!",
      error: error.message,
    });
  }
};

module.exports = {
    checkAuth,
}