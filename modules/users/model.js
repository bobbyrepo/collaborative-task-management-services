const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  userId: mongoose.Schema.Types.String,
  email: mongoose.Schema.Types.String,
  password: mongoose.Schema.Types.String,
  admin: mongoose.Schema.Types.Boolean,
});

module.exports = mongoose.model("users", userModel);
