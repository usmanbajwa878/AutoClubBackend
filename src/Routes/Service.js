const router = require("express").Router();
const ServiceHelper = require("../Helpers/Service");
const { CODE, RESPONSE_MESSAGES } = require("../Helpers/common");
const { generateMessage } = require("../Helpers/Generators");

router.post("/create", async (req, res) => {
  try {
    const isServiceExists = await ServiceHelper.checkService(req);
    if (isServiceExists)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.SERVICE_ALREADY_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    const service = await ServiceHelper.createService(req);
    const savedService = await service.save();
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.SERVICE_ADDED,
          CODE.SUCCESS,
          true,
          savedService
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
    const isServiceExists = await ServiceHelper.checkService(req);
    if (!isServiceExists)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.SERVICE_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    const isServiceUpdated = await ServiceHelper.updateService(req);
    if (!isServiceUpdated)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.SERVICE_UPDATED_FAIL,
            CODE.BAD_REQUEST,
            false
          )
        );
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.SERVICE_UPDATED,
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

router.get("/byMake/:make", async (req, res) => {
  try {
    const service = await ServiceHelper.getServiceByMake(req.params.make);
    if (!service) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.SERVICE_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.SERVICE_FOUND,
          CODE.SUCCESS,
          true,
          service
        )
      );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});

router.get("/byModel/:model", async (req, res) => {
  try {
    const service = await ServiceHelper.getServiceByModel(req.params.model);
    if (!service) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.SERVICE_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.SERVICE_FOUND,
          CODE.SUCCESS,
          true,
          service
        )
      );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});

router.get("/byWorkType/:workType", async (req, res) => {
  try {
    const service = await ServiceHelper.getServiceByWorkType(
      req.params.workType
    );

    if (!service) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.SERVICE_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.SERVICE_FOUND,
          CODE.SUCCESS,
          true,
          service
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
    const { deleted, error } = await ServiceHelper.deleteService(req);
    if (error) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(generateMessage(error, CODE.BAD_REQUEST, false));
    }
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.SERVICE_DELETED,
          CODE.SUCCESS,
          true,
          { vendor: deleted }
        )
      );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});

module.exports = router;
