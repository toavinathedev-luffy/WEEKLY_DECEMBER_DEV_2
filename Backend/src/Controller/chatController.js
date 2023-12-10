const express = require("express");
const Message = require("../models/message");
const authMiddleware = require("../utils/authMiddleware");

const router = express.Router();

// Get recent messages
router.get("/messages", authMiddleware, async (req, res) => {
  try {
    const userId = req.userId;
    const messages = await Message.find({ sender: userId })
      .sort("-createdAt")
      .limit(10);
    res.json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Send message
router.post("/send", authMiddleware, async (req, res) => {
  try {
    const { text, room } = req.body;
    const userId = req.userId;
    const message = new Message({ text, sender: userId, room });
    await message.save();
    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Other chat-related endpoints can be added here

module.exports = router;
