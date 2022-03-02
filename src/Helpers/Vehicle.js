const mongoose = require("mongoose");
const Vehicle = require("../Model/Vehicle");

exports.createVehicle = async (req) => {
  const vehicle = new Vehicle({
    vehicleId: mongoose.Types.ObjectId(),
    ownerName: req.body.ownerName,
    regNo: req.body.regNo,
    ownerPhoneNumber: req.body.ownerPhoneNumber,
    vehicleModel: req.body.vehicleModel,
    vehicleType: req.body.vehicleType,
    workHistory: [req.body.workHistory],
    lastMaintainceDate: req.body.lastMaintainceDate,
    nextMaintainceDate: req.body.nextMaintainceDate,
  });
  return vehicle;
};

exports.checkVehicle = async (req) => {
  const vehicleExists = await Vehicle.findOne({
    regNo: req.body.regNo,
    vehicleModel: req.body.vehicleModel,
  });
  if (vehicleExists) {
    return true;
  }
  return false;
};

exports.getVehicle = async (regNo, vehicleModel) => {
  const vehicle = await Vehicle.findOne({
    regNo: regNo,
    vehicleModel: vehicleModel,
  });
  return vehicle;
};

exports.getAllVehicle = async () => {
  const vehicle = await Vehicle.find();
  return vehicle;
};

exports.getVehicleByType = async (type) => {
  const vehicle = await Vehicle.find({ vehicleType: type });
  return vehicle;
};
exports.getVehicleByModel = async (model) => {
  const vehicle = await Vehicle.find({ vehicleModel: model });
  return vehicle;
};

exports.deleteVehicle = async (req) => {
  try {
    const deleted = await Vehicle.findOneAndDelete({
      regNo: req.body.regNo,
      vehicleModel: req.body.vehicleModel,
    });
    console.log("DELETED", deleted);
    return { deleted, error: null };
  } catch (error) {
    return { deleted: null, error };
  }
};

exports.updateVehicle = async (req) => {
  const updated = await Vehicle.update(
    { regNo: req.body.regNo, vehicleModel: req.body.vehicleModel },
    { $set: req.body },
    { upsert: false }
  );
  if (updated.ok) {
    return true;
  }
  return false;
};
