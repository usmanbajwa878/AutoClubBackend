const res = require("express/lib/response");
const mongoose = require("mongoose");
const Tool = require("../Model/Tools");

// toolId: mongoose.Types.ObjectId,
// vendorId: { type: mongoose.Types.ObjectId, required: true, ref: "vendors" },
// name: { type: String, required: true },
// transportedBy: { type: String, required: true }, //suzuki,toyota,local,etc
// costPrice: { type: String, required: true },
// retailPrice: { type: String, required: true },
// returningCostPrice: { type: String, required: true },
// returningRetailPrice: { type: String, required: true },
// type: { type: String, required: true }, //unbranded,genuine
// status: { type: String, required: true, default: "active" }, //used,new
// warranty: { type: warranty },
// makeVehicle: { type: String, required: true },
// model: { type: String, required: true },
// lastRequested: { type: Date },
// issuedTo: { type: worker, default: [] },
// category: { type: String, required: true }, //suspension,body,material

exports.createTool = async (req) => {
  const tool = new Tool({
    toolId: mongoose.Types.ObjectId(),
    name: req.body.name,
    vendorId: req.body.vendorId,
    transportedBy: req.body.transportedBy, //suzuki,toyota,local,etc
    costPrice: req.body.costPrice,
    retailPrice: req.body.retailPrice,
    returningCostPrice: req.body.returningCostPrice,
    returningRetailPrice: req.body.returningRetailPrice,
    type: req.body.type, //unbranded,genuine
    status: req.body.status, //used,new
    warranty: req.body.warranty,
    useableBy: req.body.useableBy,
    model: req.body.model,
    lastRequested: req.body.lastRequested,
    category: req.body.category,
    issueHistory: req.body.issueHistory,
  });
  return tool;
};

exports.checkTool = async (req) => {
  const tools = await Tool.find({
    name: req.body.name,
    category: req.body.category,
    type: req.body.type,
  });
  return tools.length > 0 ? true : false;
};

exports.getTool = async (req) => {
  const tool = await Tool.findOne({
    name: req.body.name,
    category: req.body.category,
    type: req.body.type,
  });
  return tool;
};

exports.getAllTools = async (req) => {
  const tools = await Tool.find();
  return tools;
};
exports.getToolsById = async (toolId) => {
  const tool = await Tool.find({ toolId: toolId });

  return tool;
};

exports.getToolByCategory = async (category) => {
  const tool = await Tool.find({ category: category });
  return tool;
};

exports.getToolIssueHistory = async (toolId) => {
  const tool = await Tool.find({ toolId: toolId }).select("issueHistory");
  return tool;
};

exports.getToolWarranty = async (toolId) => {
  const toolWarranty = await Tool.find({ toolId: toolId }).select("warranty");
  return toolWarranty;
};

exports.deleteTool = async (req) => {
  try {
    const deleted = await Tool.findOneAndDelete({
      toolId: req.params.toolId,
    });
    return { deleted, error: null };
  } catch (error) {
    return { deleted: null, error };
  }
};

exports.updateTool = async (req) => {
  const updated = await Tool.update(
    { toolId: req.body.toolId },
    { $set: req.body },
    { upsert: false }
  );
  if (updated.ok) {
    return true;
  }
  return false;
};
