const mongoose = require("mongoose");
const Job = require("../Model/job");

exports.createJob = async (req) => {
  const job = new Job({
    jobId: mongoose.Types.ObjectId(),
    name: req.body.name,
    managerId: req.body.managerId,
    workers: req.body.workers,
    orderNumber: req.body.orderNumber,
    vehicle: req.body.vehicle,
    vehicleId: req.body.vehicleId,
    Est_time: req.body.Est_time,
    status: req.body.status,
    date: req.body.date,
  });
  return job;
};

exports.checkJob = async (req) => {
  const jobExists = await Job.findOne({
    vehicleId: req.body.vehicleId,
    orderNumber: req.body.orderNumber,
  });
  if (jobExists) {
    return true;
  }
  return false;
};

exports.getJob = async (name, vehicle, orderNumber) => {
  const job = await Job.findOne({
    name: req.body.name,
    vehicleId: req.body.vehicleId,
    orderNumber: req.body.orderNumber,
  });
  return job;
};

exports.getAllJobs = async () => {
  const job = await Job.find();
  return job;
};
exports.getJobByVehicle = async (vehicleId) => {
  const job = await Job.find({ vehicleId: vehicleId });
  return job;
};
exports.getJobByOrderNumber = async (orderNumber) => {
  const job = await Job.find({ orderNumber: orderNumber });
  return job;
};
exports.getJobByManager = async (managerId) => {
  const job = await Job.find({ managerId: managerId });
  return job;
};

exports.getJobByStatus = async (status) => {
  const job = await Job.find({ status: status });
  return job;
};

exports.deleteJob = async (req) => {
  try {
    const deleted = await Job.findOneAndDelete({
      vehicleId: req.body.vehicleId,
      managerId: req.body.managerId,
    });
    return { deleted, error: null };
  } catch (error) {
    return { deleted: null, error };
  }
};

exports.updateJob = async (req) => {
  const updated = await Job.update(
    { vehicleId: req.body.vehicleId, managerId: req.body.managerId },
    { $set: req.body },
    { upsert: false }
  );
  if (updated.ok) {
    return true;
  }
  return false;
};
