
const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Import message routes
const messageRoutes = require("./routes/messageRoutes");

const app = express();

// Middleware
app.use(cors({
  origin: ["http://localhost:5173","https://portfolio-frontend-2ux6.onrender.com"]
}));

app.use(express.json());

// Register message API route
app.use("/api/messages", messageRoutes);

// Test API
app.get("/", (req, res) => {
  res.send("Portfolio Backend is Running!");
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully!");

    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB Connection Error:", error.message);
  });
