const mongoose = require("mongoose");

const warranty = mongoose.Schema({
  warrantyStart: { type: String, required: true },
  warrantyEnd: { type: String, required: true },
  approvedBy: { type: String, required: true },
  duration: { type: String },
});
const worker = mongoose.Schema({
  name: { type: String, required: true },
  status: { type: String, required: true, default: "inUse" }, //returned,innUser
  approvedBy: { type: String, required: true },
  date: { type: String, required: true },
});
const product = mongoose.Schema({
  productId: mongoose.Types.ObjectId,
  name: { type: String, required: true },
  vendor: { type: Object, required: true, ref: "vendors" },
  transportedBy: { type: String, required: true }, //suzuki,toyota,local,etc
  costPrice: { type: String, required: true },
  retailPrice: { type: String, required: true },
  returningCostPrice: { type: String, required: true },
  returningRetailPrice: { type: String, required: true },
  stock: { type: String, required: true },
  type: { type: String, required: true }, //unbranded,genuine
  status: { type: String, required: true, default: "active" }, //used,new
  warranty: { type: warranty },
  makeVehicle: { type: String, required: true },
  model: { type: String, required: true },
  lastRequested: { type: String },
  category: { type: String, required: true }, //suspension,body,material
});
const tool = mongoose.Schema({
  productId: mongoose.Types.ObjectId,
  name: { type: String, required: true },
  vendor: { type: Object, required: true, ref: "vendors" },
  transportedBy: { type: String, required: true }, //suzuki,toyota,local,etc
  costPrice: { type: String, required: true },
  retailPrice: { type: String, required: true },
  returningCostPrice: { type: String, required: true },
  returningRetailPrice: { type: String, required: true },
  stock: { type: String, required: true },
  type: { type: String, required: true }, //unbranded,genuine
  status: { type: String, required: true, default: "active" }, //used,new
  warranty: { type: warranty },
  makeVehicle: { type: String, required: true },
  model: { type: String, required: true },
  lastRequested: { type: String },
  issuedTo: { type: worker, required: true },
  category: { type: String, required: true }, //suspension,body,material
});

const waste = mongoose.Schema({
  date: { type: String, required: true },
  product: { type: product, required: true },
  reason: { type: String, required: true },
  approvedBy: { type: String, required: true },
});

const record = mongoose.Schema({
  items: [{ type: product, required: true }],
  approvedBy: { type: String, required: true },
  vendor: { type: String, required: true },
  date: { type: String, required: true },
  totalBill: { type: String, required: true },
  discount: { type: String, required: true },
  itemCount: { type: String, required: true },
});

const Inventory = mongoose.Schema(
  {
    hotSelling: { type: product },
    tools: { type: tool },
    wasteMaterial: { type: waste },
    records: [{ type: record }],
    products: [{ type: product }],
  },
  {
    timeStamps: true,
  }
);

module.exports = mongoose.model("Inventory", Inventory);
