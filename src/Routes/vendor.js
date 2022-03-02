const router = require("express").Router();
const VendorHelper = require("../Helpers/Vendor");
const { CODE, RESPONSE_MESSAGES } = require("../Helpers/common");
const { generateMessage } = require("../Helpers/Generators");

router.post("/create", async (req, res) => {
  try {
    const isVendorExists = await VendorHelper.checkVendor(req);
    if (isVendorExists)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.VENDOR_ALREADY_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    const vendor = await VendorHelper.createVendor(req);
    const savedVendor = await vendor.save();
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.VENDOR_ADDED,
          CODE.SUCCESS,
          true,
          savedVendor
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
    const isVendorExists = await VendorHelper.checkVendor(req);
    if (!isVendorExists)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.VENDOR_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    const isVendorUpdated = await VendorHelper.updateVendor(req);
    if (!isVendorUpdated)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.VENDOR_UPDATED_FAIL,
            CODE.BAD_REQUEST,
            false
          )
        );
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.VENDOR_UPDATED,
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
router.get("/specific/:email/:category", async (req, res) => {
  try {
    const vendor = await VendorHelper.getVendor(
      req.params.email,
      req.params.category
    );
    if (!vendor) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.VENDOR_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    return res.status(CODE.SUCCESS).json(
      generateMessage(
        RESPONSE_MESSAGES.SUCCESS.VENDOR_FOUND,
        CODE.SUCCESS,
        true,
        {
          vendor,
        }
      )
    );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});

router.get("/category/:category", async (req, res) => {
  try {
    const vendor = await VendorHelper.getVendorByCategory(req.params.category);
    if (!vendor) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.VENDOR_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    return res.status(CODE.SUCCESS).json(
      generateMessage(
        RESPONSE_MESSAGES.SUCCESS.VENDOR_FOUND,
        CODE.SUCCESS,
        true,
        {
          vendor,
        }
      )
    );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});

router.get("/part/:partCategory", async (req, res) => {
  try {
    const vendor = await VendorHelper.getVendorByPartCategory(
      req.params.partCategory
    );

    if (!vendor) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.VENDOR_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    return res.status(CODE.SUCCESS).json(
      generateMessage(
        RESPONSE_MESSAGES.SUCCESS.VENDOR_FOUND,
        CODE.SUCCESS,
        true,
        {
          vendor,
        }
      )
    );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});
router.delete("/delete", async (req, res) => {
  try {
    const { deleted, error } = await VendorHelper.deleteVendor(req);
    if (error) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(generateMessage(error, CODE.BAD_REQUEST, false));
    }
    return res.status(CODE.SUCCESS).json(
      generateMessage(
        RESPONSE_MESSAGES.SUCCESS.VENDOR_DELETED,
        CODE.SUCCESS,
        true,
        {
          vendor: deleted,
        }
      )
    );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});

module.exports = router;
