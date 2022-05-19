const res = require("express/lib/response");
const mongoose = require("mongoose");
const Inventory = require("../Model/Inventory");

// {
//   hotSelling: [
//     {
//       productId: { type: mongoose.Types.ObjectId },
//       stock: { type: String, required: true },
//       soldCount: { type: String, required: true },
//     },
//   ],
//   tools: [
//     {
//       toolId: { type: mongoose.Types.ObjectId },
//       stock: { type: String, required: true },
//     },
//   ],
//   wasteMaterial: { type: waste, default: [] },
//   records: [{ type: record, default: [] }],
//   products: [
//     {
//       productId: { type: mongoose.Types.ObjectId },
//       stock: { type: String, required: true },
//       soldCount: { type: String, required: true },
//     },
//   ],
// },
// {
//   timeStamps: true,
// }

exports.createInventory = async (req) => {
  const inventory = new Inventory({
    hotSelling: req.body.hotSelling,
    tools: req.body.tools,
    wasteMaterial: req.body.wasteMaterial,
    records: req.body.records,
    products: req.body.products,
  });
  return inventory;
};

exports.checkInventory = async () => {
  const inventoryExists = await Inventory.find();
  if (inventoryExists) {
    return true;
  }
  return false;
};

exports.checkProductExistsInInventory = async (req) => {
  const products = await Inventory.find({
    products: {
      $elemMatch: {
        productId: req.body.productId,
      },
    },
  });
  console.log("PRODUCTS", products);
  return products.length > 0 ? true : false;
};
exports.checkToolExistsInInventory = async (req) => {
  const tools = await Inventory.find({
    tools: {
      $elemMatch: {
        toolId: req.body.toolId,
      },
    },
  });
  return tools.length > 0 ? true : false;
};
exports.checkHotSellingExistsInInventory = async (req) => {
  const hotSelling = await Inventory.find({
    hotSelling: {
      $elemMatch: {
        productId: req.body.productId,
      },
    },
  });
  return hotSelling.length > 0 ? true : false;
};
exports.checkWasteExistsInInventory = async (req) => {
  const wasteMaterial = await Inventory.find({
    wasteMaterial: {
      $elemMatch: {
        productId: req.body.productId,
      },
    },
  });
  return wasteMaterial.length > 0 ? true : false;
};
exports.checkRecordsExistsInInventory = async (req) => {
  const records = await Inventory.find({
    records: {
      $elemMatch: {
        items: {
          $elemMatch: {
            productId: req.body.productId,
          },
        },
      },
    },
  });
  return records.length > 0 ? true : false;
};
exports.getProductInInventory = async (productId) => {
  const products = await Inventory.find({
    products: {
      $elemMatch: {
        productId: productId,
      },
    },
  });
  return products;
};
exports.getToolInInventory = async (toolId) => {
  const tools = await Inventory.find({
    tools: {
      $elemMatch: {
        toolId: toolId,
      },
    },
  });
  return tools;
};

exports.getInventory = async () => {
  const inventory = await Inventory.find({});
  console.log(inventory);
  return inventory;
};

exports.getHotSellingProducts = async (req) => {
  const hotSelling = await Inventory.find().select("hotSelling");
  return hotSelling;
};
exports.getWasteProducts = async (req) => {
  const wasteProducts = await Inventory.find().select("wasteMaterial");
  return wasteProducts;
};
exports.getInventoryRecord = async (req) => {
  const inventoryRecord = await Inventory.find().select("records");
  return inventoryRecord;
};
exports.getInventoryTools = async (req) => {
  const inventoryTools = await Inventory.find().select("tools");
  return inventoryTools;
};
exports.getInventoryProducts = async (req) => {
  const inventoryProducts = await Inventory.find().select("products");
  return inventoryProducts;
};

exports.deleteProductFromInventory = async (productId) => {
  try {
    const deleted = await Inventory.update(
      {},
      { $pull: { products: { productId: productId } } }
    );
    return { deleted, error: null };
  } catch (error) {
    return { deleted: null, error };
  }
};

exports.deleteToolFromInventory = async (toolId) => {
  try {
    const deleted = await Inventory.update(
      {},
      { $pull: { tools: { toolId: toolId } } }
    );
    return { deleted, error: null };
  } catch (error) {
    return { deleted: null, error };
  }
};
exports.resetInventory = async (req) => {
  try {
    const deleted = await Inventory.deleteMany({});
    return { deleted, error: null };
  } catch (error) {
    return { deleted: null, error };
  }
};

exports.updateTools = async (req) => {
  const updated = await Inventory.update(
    {},
    { $push: { tools: req.body } },
    { upsert: false }
  );
  if (updated.ok) {
    return true;
  }
  return false;
};

exports.updateProduct = async (req) => {
  const updated = await Inventory.update(
    {},
    { $push: { products: req.body } },
    { upsert: false }
  );
  if (updated.ok) {
    return true;
  }
  return false;
};
exports.updateHotSelling = async (req) => {
  const updated = await Inventory.update(
    {},
    { $push: { hotSelling: req.body } },
    { upsert: false }
  );
  if (updated.ok) {
    return true;
  }
  return false;
};
exports.updateWaste = async (req) => {
  const updated = await Inventory.update(
    {},
    { $push: { wasteMaterial: req.body } },
    { upsert: false }
  );
  if (updated.ok) {
    return true;
  }
  return false;
};
exports.updateRecord = async (req) => {
  const updated = await Inventory.update(
    {},
    { $push: { records: req.body } },
    { upsert: false }
  );
  if (updated.ok) {
    return true;
  }
  return false;
};

exports.updateInventory = async (req) => {
  const updated = await Inventory.update(
    {},
    { $set: req.body },
    { upsert: true, new: true }
  );
  if (updated.ok) {
    return true;
  }
  return false;
};
