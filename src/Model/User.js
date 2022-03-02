const mongoose = require("mongoose");

const User = mongoose.Schema({
  userId: mongoose.Types.ObjectId,
  name: { type: String, required: true, min: 3, max: 255 },
  email: { type: String, required: true, max: 255 },
  password: { type: String, required: true, max: 1024, min: 6 },
  phoneNumber: { type: String, required: true },
  joiningDate: { type: String, required: true },
  role: {
    type: String,
    required: true,
    ref: "roles",
    enum: ["worker", "manager"],
    default: "worker",
  }, //wokers,manager
  status: {
    type: String,
    enum: ["permanent", "probation", "observation", "resigned"],
    default: "permanent",
  },
  date: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("users", User);
