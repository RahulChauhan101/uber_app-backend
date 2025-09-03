const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const userRoutes = require("./routes/user.routes");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// Default test route
app.get("/", (req, res) => {
  res.send("🚀 Uber backend running...");
});

// MongoDB connection
mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => {
    console.log("✅ MongoDB Connected");

    // Start server only after DB connection
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () =>
      console.log(`🚀 Server running on port ${PORT}`)
    );
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1); // stop app if no DB connection
  });
