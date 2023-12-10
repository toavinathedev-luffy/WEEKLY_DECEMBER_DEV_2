const jwt = require("jsonwebtoken");

module.exports = (io, socket, next) => {
  const token = socket.handshake.auth.token;

  if (!token) {
    return next(new Error("Unauthorized"));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    socket.request.userId = decoded.userId;
    next();
  } catch (error) {
    console.error(error);
    next(new Error("Invalid token"));
  }
};
