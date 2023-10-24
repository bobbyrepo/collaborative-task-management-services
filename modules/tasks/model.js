const mongoose = require("mongoose");

const taskModel = new mongoose.Schema({
  user: mongoose.Schema.Types.String,
  userId: mongoose.Schema.Types.String,
  title: mongoose.Schema.Types.String,
  details: mongoose.Schema.Types.String,
  resolved: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("tasks", taskModel);
