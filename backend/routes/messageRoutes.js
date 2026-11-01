const express = require("express");
const Message = require("../module/Message");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const newMessage = await Message.create({
      name,
      email,
      message
    });

    res.status(201).json({
      message: "Message saved successfully!",
      data: newMessage
    });

  } catch (error) {
    console.error("SAVE MESSAGE ERROR:", error);

    res.status(500).json({
      message: "Failed to save message",
      error: error.message
    });
  }
});

module.exports = router;