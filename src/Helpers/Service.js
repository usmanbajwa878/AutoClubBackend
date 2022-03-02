const mongoose = require("mongoose");
const Service = require("../Model/Service");

exports.createService = async (req) => {
  const service = new Service({
    serviceId: mongoose.Types.ObjectId(),
    name: req.body.name,
    make: req.body.make,
    model: req.body.make,
    workType: req.body.workType,
    warrantyPeriod: req.body.warrantyPeriod,
    price: req.body.price,
    workDuration: req.body.workDuration,
  });
  return service;
};

exports.checkService = async (req) => {
  const servcieExists = await Service.findOne({
    name: req.body.name,
    model: req.body.model,
    make: req.body.make,
  });
  if (servcieExists) {
    return true;
  }
  return false;
};

exports.getService = async (name, model, make) => {
  const service = await Service.findOne({
    name: name,
    model: model,
    make: make,
  });
  return service;
};

exports.getServiceByWorkType = async (workType) => {
  const service = await Service.find({ workType: workType });
  return service;
};
exports.getServiceByModel = async (model) => {
  const service = await Service.find({ model: model });
  return service;
};
exports.getServiceByMake = async (make) => {
  const service = await Service.find({ make: make });
  return service;
};

exports.deleteService = async (req) => {
  try {
    const deleted = await Service.findOneAndDelete({
      name: req.body.name,
      make: req.body.make,
      model: req.body.model,
    });
    return { deleted, error: null };
  } catch (error) {
    return { deleted: null, error };
  }
};

exports.updateService = async (req) => {
  const updated = await Service.update(
    { name: req.body.name, make: req.body.make, model: req.body.model },
    { $set: req.body },
    { upsert: false }
  );
  if (updated.ok) {
    return true;
  }
  return false;
};
