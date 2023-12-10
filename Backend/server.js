const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// app.js

import "./firebase/firebase.config"; // Importe la configuration Firebase
// Le reste de votre code...

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Socket.io logic
io.on("connection", (socket) => {
  console.log("User connected: " + socket.id);

  // Handle chat events (you would need to implement these)
  require("./src/sockets/chatSocket")(io, socket);
});

// Middleware
app.use(express.json());
app.use("/auth", require("./src/routes/authRoutes"));
app.use("/chat", require("./src/routes/chatRoutes"));

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
