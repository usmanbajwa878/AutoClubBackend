const mongoose = require("mongoose");

const directory = mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  mobileNumber: { type: String, required: true },
});
const serviceProviderRecord = mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  lastVisit: { type: String, required: true },
});
const Vendor = mongoose.Schema({
  vendorId: mongoose.Types.ObjectId,
  directory: [{ type: directory, required: true }],
  fixingServiceProviders: [{ type: serviceProviderRecord }],
  category: { type: String, required: true },//Honda,Toyota,Suzuki
  partCategory: { type: String, required: true },//suspenion,body,material
  date: { type: Date, default: Date.now() },
  carServiceProviders: [{ type: serviceProviderRecord }],
  email: { type: String, required: true },
});

module.exports = mongoose.model("vendors", Vendor);
