const mongoose = require("mongoose");

const waste = mongoose.Schema({
  date: { type: String, required: true },
  productId: { type: mongoose.Types.ObjectId, ref: "products", required: true },
  reason: { type: String, required: true },
  approvedBy: { type: String, required: true },
});

const record = mongoose.Schema({
  items: [
    {
      productId: { type: mongoose.Types.ObjectId, required: true },
      stock: { type: String, required: true },
    },
  ],
  approvedBy: { type: String, required: true },
  vendorId: { type: mongoose.Types.ObjectId, required: true },
  date: { type: String, required: true },
  totalBill: { type: String, required: true },
  discount: { type: String, required: true },
  itemCount: { type: String, required: true },
});

const Inventory = mongoose.Schema(
  {
    hotSelling: {
      type: [
        {
          productId: { type: mongoose.Types.ObjectId },
          stock: { type: String, required: true },
          soldCount: { type: String, required: true },
        },
      ],
      default: [],
    },
    tools: {
      type: [
        {
          toolId: { type: mongoose.Types.ObjectId },
          stock: { type: String, required: true },
        },
      ],
      default: [],
    },
    wasteMaterial: [{ type: waste, default: [] }],
    records: [{ type: record, default: [] }],
    products: {
      type: [
        {
          productId: { type: mongoose.Types.ObjectId },
          stock: { type: String, required: true },
          soldCount: { type: String, required: true },
        },
      ],
      default: [],
    },
  },
  {
    timeStamps: true,
  }
);

module.exports = mongoose.model("Inventory", Inventory);
