const jwt = require("jsonwebtoken");

const authUser = (req, res, next) => {
  try {
    let token =
      req.cookies?.token ||
      (req.headers.authorization && req.headers.authorization.split(" ")[1]);

    if (!token) {
      return res.status(401).json({ msg: "No token, authorization denied" });
    }

    // Decode token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = { id: decoded.id }; // ✅ ensure req.user.id is set
    next();
  } catch (err) {
    console.error("JWT verification failed:", err.message);
    return res.status(401).json({ msg: "Token is not valid" });
  }
};

module.exports = authUser;
