const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String },
  difficulty_level: {
    type: String,
    enum: ["High level", "Medium level", "Low level"],
  },
  score: { type: Number, default: 0 },
});

const userModel = new mongoose.model("user", userSchema);

module.exports = userModel;

// - High level - 10 seconds
// - Medium level - 20 seconds
// - Low level - 30 seconds
