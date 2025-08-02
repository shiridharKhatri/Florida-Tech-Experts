const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    full_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    company: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    lastLogin: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", userSchema);
