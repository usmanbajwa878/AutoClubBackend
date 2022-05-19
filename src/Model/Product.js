const mongoose = require("mongoose");

const warranty = mongoose.Schema({
  warrantyPeriod: { type: String },
  warrantyClaim: { type: String },
});

const product = mongoose.Schema({
  productId: mongoose.Types.ObjectId,
  name: { type: String, required: true },
  vendorId: { type: mongoose.Types.ObjectId, required: true, ref: "vendors" },
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
  lastRequested: { type: String },
  category: { type: String, required: true }, //suspension,body,material
});

module.exports = mongoose.model("product", product);
