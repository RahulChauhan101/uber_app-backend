const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    minlength: [3, "First name must be at least 3 characters long"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "Password must be at least 6 characters long"],
  },
  soketId: {
    type :String,
  },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
// const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema({
//   fullname: { type: String, required: true, minlength: 3 },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true, minlength: 6 },
// });

// module.exports = mongoose.model("User", UserSchema);
