const router = require("express").Router();
const InventoryHelper = require("../Helpers/InventoryHelper");
const { CODE, RESPONSE_MESSAGES } = require("../Helpers/common");
const { generateMessage } = require("../Helpers/Generators");

router.post("/create", async (req, res) => {
  try {
    const isInvetoryExists = await InventoryHelper.checkInventory(req);
    console.log("EIXTS", isInvetoryExists);
    if (isInvetoryExists.length > 0)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.INVENTORY_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    const inventory = await InventoryHelper.createInventory(req);
    const savedInventory = await inventory.save();
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.INVENTORY_ADDED,
          CODE.SUCCESS,
          true,
          savedInventory
        )
      );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});

router.put("/update", async (req, res) => {
  try {
    const isInvetoryExists = await InventoryHelper.checkInventory(req);
    if (!isInvetoryExists)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.INVENTORY_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    const isInventoryUpdated = await InventoryHelper.updateInventory(req);
    if (!isInventoryUpdated)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.INVENTORY_UPDATED_FAIL,
            CODE.BAD_REQUEST,
            false
          )
        );
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.INVENTORY_UPDATED,
          CODE.SUCCESS,
          true,
          req.body
        )
      );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});

router.put("/update/tools", async (req, res) => {
  try {
    const isToolExists = await InventoryHelper.checkToolExistsInInventory(req);
    if (isToolExists)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.TOOL_ALREADY_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    const isInventoryUpdated = await InventoryHelper.updateTools(req);
    if (!isInventoryUpdated)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.INVENTORY_UPDATED_FAIL,
            CODE.BAD_REQUEST,
            false
          )
        );
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.INVENTORY_UPDATED,
          CODE.SUCCESS,
          true,
          req.body
        )
      );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});

router.put("/update/hotSelling", async (req, res) => {
  try {
    const isHotSellingExists =
      await InventoryHelper.checkHotSellingExistsInInventory(req);
    if (isHotSellingExists)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.PRODUCT_ALREADY_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    const isInventoryUpdated = await InventoryHelper.updateHotSelling(req);
    if (!isInventoryUpdated)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.INVENTORY_UPDATED_FAIL,
            CODE.BAD_REQUEST,
            false
          )
        );
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.INVENTORY_UPDATED,
          CODE.SUCCESS,
          true,
          req.body
        )
      );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});

router.put("/update/records", async (req, res) => {
  try {
    const isRecordExists = await InventoryHelper.checkRecordsExistsInInventory(
      req
    );
    if (isRecordExists)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.PRODUCT_ALREADY_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    const isInventoryUpdated = await InventoryHelper.updateRecord(req);
    if (!isInventoryUpdated)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.INVENTORY_UPDATED_FAIL,
            CODE.BAD_REQUEST,
            false
          )
        );
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.INVENTORY_UPDATED,
          CODE.SUCCESS,
          true,
          req.body
        )
      );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});

router.put("/update/waste", async (req, res) => {
  try {
    const isWasteExists = await InventoryHelper.checkWasteExistsInInventory(
      req
    );
    if (isWasteExists)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.PRODUCT_ALREADY_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    const isInventoryUpdated = await InventoryHelper.updateRecord(req);
    if (!isInventoryUpdated)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.INVENTORY_UPDATED_FAIL,
            CODE.BAD_REQUEST,
            false
          )
        );
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.INVENTORY_UPDATED,
          CODE.SUCCESS,
          true,
          req.body
        )
      );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});

router.put("/update/product", async (req, res) => {
  try {
    const isProductExists = await InventoryHelper.checkProductExistsInInventory(
      req
    );
    if (isProductExists)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.PRODUCT_ALREADY_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    const isInventoryUpdated = await InventoryHelper.updateProduct(req);
    if (!isInventoryUpdated)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.INVENTORY_UPDATED_FAIL,
            CODE.BAD_REQUEST,
            false
          )
        );
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.INVENTORY_UPDATED,
          CODE.SUCCESS,
          true,
          req.body
        )
      );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});

router.get("/", async (req, res) => {
  try {
    const inventory = await InventoryHelper.getInventory(req);
    if (!inventory || inventory.length === 0) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.INVENTORY_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.INVENTORY_FOUND,
          CODE.SUCCESS,
          true,
          inventory
        )
      );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});

router.get("/products", async (req, res) => {
  try {
    const inventoryProducts = await InventoryHelper.getInventoryProducts(req);
    if (!inventoryProducts || inventoryProducts.length === 0) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.INVENTORY_PRODUCTS_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.INVENTORY_PRODUCTS_FOUND,
          CODE.SUCCESS,
          true,
          inventoryProducts
        )
      );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});

router.get("/products/:productId", async (req, res) => {
  try {
    const inventoryProducts = await InventoryHelper.getProductInInventory(
      req.params.productId
    );
    if (!inventoryProducts || inventoryProducts.length === 0) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.INVENTORY_PRODUCTS_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.INVENTORY_PRODUCTS_FOUND,
          CODE.SUCCESS,
          true,
          inventoryProducts
        )
      );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});

router.get("/tools", async (req, res) => {
  try {
    const inventoryTools = await InventoryHelper.getInventoryTools(req);
    if (!inventoryTools || inventoryTools.length === 0) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.INVENTORY_TOOLS_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.INVENTORY_TOOLS_FOUND,
          CODE.SUCCESS,
          true,
          inventoryTools
        )
      );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});

router.get("/tools/:toolId", async (req, res) => {
  try {
    const inventoryTools = await InventoryHelper.getToolInInventory(
      req.params.toolId
    );
    if (!inventoryTools || inventoryTools.length === 0) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.INVENTORY_TOOLS_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.INVENTORY_TOOLS_FOUND,
          CODE.SUCCESS,
          true,
          inventoryTools
        )
      );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});

router.get("/waste", async (req, res) => {
  try {
    const inventoryWasteProducts = await InventoryHelper.getWasteProducts(req);
    if (!inventoryWasteProducts || inventoryWasteProducts.length === 0) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.INVENTORY_WASTE_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.INVENTORY_WASTE_FOUND,
          CODE.SUCCESS,
          true,
          inventoryWasteProducts
        )
      );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});
router.get("/record", async (req, res) => {
  try {
    const inventoryRecords = await InventoryHelper.getInventoryRecord(req);
    if (!inventoryRecords || inventoryRecords.length === 0) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.INVENTORY_RECORDS_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.INVENTORY_RECORDS_FOUND,
          CODE.SUCCESS,
          true,
          inventoryRecords
        )
      );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});

router.get("/HotSelling", async (req, res) => {
  try {
    const inventoryHotSelling = await InventoryHelper.getHotSellingProducts(
      req
    );
    if (!inventoryHotSelling || inventoryHotSelling.length === 0) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.INVENTORY_HOTSELLING_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.INVENTORY_HOTSELLING_FOUND,
          CODE.SUCCESS,
          true,
          inventoryHotSelling
        )
      );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});

router.delete("/product/:productId", async (req, res) => {
  try {
    const { deleted, error } = await InventoryHelper.deleteProductFromInventory(
      req.params.productId
    );
    if (error || !deleted) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.INVENTORY_PRODUCT_DELETION_FAILED,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.INVENTORY_PRODUCT_DELETED,
          CODE.SUCCESS,
          true,
          { product: deleted }
        )
      );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});
router.delete("/tools/:toolId", async (req, res) => {
  try {
    const { deleted, error } = await InventoryHelper.deleteToolFromInventory(
      req.params.toolId
    );
    if (error || !deleted) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.INVENTORY_TOOLS_DELETION_FAILED,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.INVENTORY_TOOL_DELETED,
          CODE.SUCCESS,
          true,
          { product: deleted }
        )
      );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});

router.delete("/reset", async (req, res) => {
  try {
    const { deleted, error } = await InventoryHelper.resetInventory(req);
    if (error || !deleted) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.INVENTORY_DELETION_FAILED,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    const inventory = await InventoryHelper.createInventory(req);
    const savedInventory = await inventory.save();
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.INVENTORY_RESETED,
          CODE.SUCCESS,
          true,
          savedInventory
        )
      );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});

module.exports = router;
