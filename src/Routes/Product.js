const router = require("express").Router();
const ProductHelper = require("../Helpers/ProductHelper");
const { CODE, RESPONSE_MESSAGES } = require("../Helpers/common");
const { generateMessage } = require("../Helpers/Generators");

router.post("/create", async (req, res) => {
  try {
    const isProductExists = await ProductHelper.checkProduct(req);
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
    const product = await ProductHelper.createProduct(req);
    const savedProduct = await product.save();
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.PRODUCT_ADDED,
          CODE.SUCCESS,
          true,
          savedProduct
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
    const product = await ProductHelper.getProductById(req.body.productId);
    if (product.length === 0)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.PRODUCT_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    const isProductUpdated = await ProductHelper.updateProduct(req);
    if (!isProductUpdated)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.PRODUCT_UPDATED_FAIL,
            CODE.BAD_REQUEST,
            false
          )
        );
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.PRODUCT_UPDATED,
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
    const products = await ProductHelper.getAllProducts();
    console.log("PROD", products);
    if (products.length === 0) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.PRODUCT_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.PRODUCT_FOUND,
          CODE.SUCCESS,
          true,
          products
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
    const productCategory = await ProductHelper.getProductByCategory(
      req.params.category
    );
    if (productCategory.length === 0) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.PRODUCT_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.PRODUCT_FOUND,
          CODE.SUCCESS,
          true,
          productCategory
        )
      );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});

router.get("/InHouseUsable/:inHouseUsable", async (req, res) => {
  try {
    const product = await ProductHelper.getProductByInHouseUsable(
      req.params.inHouseUsable
    );
    if (product.length === 0) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.PRODUCT_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.PRODUCT_FOUND,
          CODE.SUCCESS,
          true,
          product
        )
      );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});

router.get("/warranty/:productId", async (req, res) => {
  try {
    const product = await ProductHelper.getProductWarranty(
      req.params.productId
    );

    if (product.length === 0) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.PRODUCT_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.PRODUCT_FOUND,
          CODE.SUCCESS,
          true,
          product
        )
      );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});

router.delete("/delete/:productId", async (req, res) => {
  try {
    const { deleted, error } = await ProductHelper.deleteProduct(req);
    if (error) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(generateMessage(error, CODE.BAD_REQUEST, false));
    }
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.PRODUCT_DELETED,
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

module.exports = router;
