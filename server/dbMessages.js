const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    name: String,
    message: String,
    timestamp: String,
    uid: String,
    roomId: String,
  },
  {
    timestamps: true,
  }
);

const Messages = mongoose.model("messages", messageSchema);

module.exports = Messages;
