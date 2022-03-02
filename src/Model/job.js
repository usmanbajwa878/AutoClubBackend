const mongoose = require("mongoose");

const Job = mongoose.Schema(
  {
    jobId: mongoose.Types.ObjectId,
    name: { type: String, required: true },
    managerId: { type: mongoose.Types.ObjectId, required: true, ref: "users" },
    workers: [{ type: mongoose.Types.ObjectId, required: true, ref: "users" }],
    orderNumber: { type: String, required: true },
    vehicle: { type: Object, required: true, ref: "vehicle" },
    vehicleId: { type: String, required: true, ref: "vehicle" },
    date: { type: Date, default: Date.now() },
    Est_time: { type: String, required: true },
    status: { type: String, default: "pending" }, //pending,approved
  },
  {
    timeStamps: true,
  }
);

module.exports = mongoose.model("Job", Job);
