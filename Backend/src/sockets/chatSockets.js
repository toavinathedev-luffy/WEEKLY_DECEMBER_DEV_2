const Message = require("../models/message");

module.exports = (io, socket) => {
  console.log("Socket connected: " + socket.id);

  // Join room
  socket.on("joinRoom", (room) => {
    socket.join(room);
  });

  // Handle message events
  socket.on("sendMessage", async (data) => {
    try {
      const { text, room } = data;
      const userId = socket.request.userId; // Assuming userId is attached to socket.request during authentication
      const message = new Message({ text, sender: userId, room });
      await message.save();
      io.to(room).emit("message", message);
    } catch (error) {
      console.error(error);
    }
  });

  // Handle other socket events as needed
  // ...

  // Disconnect
  socket.on("disconnect", () => {
    console.log("Socket disconnected: " + socket.id);
  });
};
