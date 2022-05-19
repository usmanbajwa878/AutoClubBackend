const res = require("express/lib/response");
const mongoose = require("mongoose");
const Product = require("../Model/Product");

// productId: mongoose.Types.ObjectId,
// name: { type: String, required: true },
// vendor: { type: Object, required: true, ref: "vendors" },
// transportedBy: { type: String, required: true }, //suzuki,toyota,local,etc
// costPrice: { type: String, required: true },
// retailPrice: { type: String, required: true },
// returningCostPrice: { type: String, required: true },
// returningRetailPrice: { type: String, required: true },
// stock: { type: String, required: true },
// type: { type: String, required: true }, //unbranded,genuine
// status: { type: String, required: true, default: "active" }, //used,new
// warranty: { type: warranty },
// makeVehicle: { type: String, required: true },
// model: { type: String, required: true },
// lastRequested: { type: String },
// category: { type: String, required: true }, //suspension,body,material

exports.createProduct = async (req) => {
  const product = new Product({
    productId: mongoose.Types.ObjectId(),
    name: req.body.name,
    vendorId: req.body.vendorId,
    transportedBy: req.body.transportedBy, //suzuki,toyota,local,etc
    costPrice: req.body.costPrice,
    retailPrice: req.body.retailPrice,
    returningCostPrice: req.body.returningCostPrice,
    returningRetailPrice: req.body.returningRetailPrice,
    stock: req.body.stock,
    type: req.body.type, //unbranded,genuine
    status: req.body.status, //used,new
    warranty: req.body.warranty,
    useableBy: req.body.useableBy,
    model: req.body.model,
    lastRequested: req.body.lastRequested,
    category: req.body.category,
  });
  return product;
};

exports.checkProduct = async (req) => {
  const products = await Product.find({
    name: req.body.name,
    category: req.body.category,
    type: req.body.type,
  });
  return products.length > 0 ? true : false;
};

exports.getProduct = async (req) => {
  const product = await Product.findOne({
    name: req.body.name,
    category: req.body.category,
    type: req.body.type,
  });
  return product;
};

exports.getAllProducts = async (req) => {
  const products = await Product.find();
  return products;
};
exports.getProductById = async (productId) => {
  const product = await Product.find({ productId: productId });

  return product;
};

exports.getProductByCategory = async (category) => {
  const product = await Product.find({ category: category });
  return product;
};

exports.getProductByInHouseUsable = async (inHouseUsable) => {
  const product = await Product.find({ inHouseUsable: inHouseUsable });
  return product;
};

exports.getProductWarranty = async (productId) => {
  const productWarranty = await Product.find({ productId: productId }).select(
    "warranty"
  );
  return productWarranty;
};

exports.deleteProduct = async (req) => {
  try {
    const deleted = await Product.findOneAndDelete({
      productId: req.params.productId,
    });
    return { deleted, error: null };
  } catch (error) {
    return { deleted: null, error };
  }
};

exports.updateProduct = async (req) => {
  const updated = await Product.update(
    { productId: req.body.productId },
    { $set: req.body },
    { upsert: false }
  );
  if (updated.ok) {
    return true;
  }
  return false;
};
