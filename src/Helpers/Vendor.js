const mongoose = require("mongoose");
const Vendor = require("../Model/Vendor");

exports.createVendor = async (req) => {
  const vendor = new Vendor({
    vendorId: mongoose.Types.ObjectId(),
    email: req.body.email,
    directory: [req.body.directory],
    fixingServiceProviders: [req.body.fixingServiceProviders],
    category: req.body.category,
    partCategory: req.body.partCategory,
    carServiceProviders: [req.body.carServiceProviders],
    date: req.body.date,
  });
  return vendor;
};

exports.checkVendor = async (req) => {
  const vendorExists = await Vendor.findOne({
    email: req.body.email,
    category: req.body.category,
    partCategory: req.body.partCategory,
  });
  if (vendorExists) {
    return true;
  }
  return false;
};

exports.getVendor = async (email, category) => {
  const vendor = await Vendor.findOne({ email: email, category: category });
  return vendor;
};

exports.getVendorByCategory = async (category) => {
  const vendor = await Vendor.find({ category: category });
  return vendor;
};
exports.getVendorByPartCategory = async (partCategory) => {
  const vendor = await Vendor.find({ partCategory: partCategory });
  return vendor;
};

exports.deleteVendor = async (req) => {
  try {
    const deleted = await Vendor.findOneAndDelete({
      email: req.body.email,
      category: req.body.category,
    });
    return { deleted, error: null };
  } catch (error) {
    return { deleted: null, error };
  }
};

exports.updateVendor = async (req) => {
  const updated = await Vendor.update(
    { email: req.body.email, category: req.body.email },
    { $set: req.body },
    { upsert: false }
  );
  if (updated.ok) {
    return true;
  }
  return false;
};
