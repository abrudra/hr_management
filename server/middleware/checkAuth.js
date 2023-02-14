const jwt= require("jsonwebtoken");


const checkAuth =  async (req , res ,next) =>{
    try {
      const token = await req.header.authorization.split(" ")[1];
      const decodedToken = jwt.verify(token, process.env.JWT_KEY);
      req.userData = decodedToken;
      next();
    } catch (error) {
      return res.status(401).json({
        message: "Invalid or Expired token provided..!",
      });
    }
}

module.exports = {
    checkAuth,
}