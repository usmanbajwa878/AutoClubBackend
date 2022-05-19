const mongoose = require("mongoose");

const warranty = mongoose.Schema({
  warrantyPeriod: { type: String },
  warrantyClaim: { type: String },
});

const worker = mongoose.Schema({
  workerId: { type: mongoose.Types.ObjectId },
  name: { type: String },
  status: { type: String, default: "inUse" }, //returned,innUser
  approvedBy: { type: String },
  date: { type: String, default: new Date() },
});

const tool = mongoose.Schema({
  toolId: mongoose.Types.ObjectId,
  vendorId: { type: mongoose.Types.ObjectId, required: true, ref: "vendors" },
  name: { type: String, required: true },
  transportedBy: { type: String, required: true }, //suzuki,toyota,local,etc
  costPrice: { type: String, required: true },
  retailPrice: { type: String, required: true },
  returningCostPrice: { type: String, required: true },
  returningRetailPrice: { type: String, required: true },
  type: { type: String, required: true }, //unbranded,genuine
  status: { type: String, required: true, default: "active" }, //used,new
  warranty: { type: warranty },
  useableBy: { type: String, required: true },
  model: { type: String, required: true },
  lastRequested: { type: Date },
  issueHistory: { type: { worker }, default: [] },
  category: { type: String, required: true }, //suspension,body,material
});

module.exports = mongoose.model("tool", tool);
