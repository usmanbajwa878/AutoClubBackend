const mongoose = require("mongoose");

const history = mongoose.Schema({
  historyId: mongoose.Schema.ObjectId,
  jobId: { type: mongoose.Schema.ObjectId, required: false, ref: "job" },
  managerId: { type: String, required: false },
  totalCost: { type: String, required: false },
  warranty: { type: String, required: false },
  details: { type: String },
});

const Vehicle = mongoose.Schema(
  {
    vehicleId: mongoose.Types.ObjectId,
    ownerName: { type: String, required: true },
    regNo: { type: String, required: true },
    ownerPhoneNumber: { type: String, required: true },
    vehicleModel: { type: Number, required: true },
    vehicleType: { type: String, required: true }, //suzuki,honda,etc
    workHistory: [{ type: history, required: false }],
    lastMaintainceDate: { type: String, required: true },
    nextMaintainceDate: { type: String, required: true },
  },
  {
    timeStamps: true,
  }
);

module.exports = mongoose.model("vehicle", Vehicle);
