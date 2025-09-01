const mongoose = require("mongoose");

async function connectionToDb() {
  mongoose.connect(process.env.DB_CONNECT)
    .then(() => console.log("✅ Connected to MongoDB Atlas"))
    .catch(err => {
      console.error("❌ Error connecting to MongoDB:", err.message);
      process.exit(1);
    });
}

module.exports = connectionToDb;
