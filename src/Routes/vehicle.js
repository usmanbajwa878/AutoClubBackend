const router = require("express").Router();
const VehicleHelper = require("../Helpers/Vehicle");
const { CODE, RESPONSE_MESSAGES } = require("../Helpers/common");
const { generateMessage } = require("../Helpers/Generators");

router.post("/create", async (req, res) => {
  try {
    const isVehicleExists = await VehicleHelper.checkVehicle(req);
    if (isVehicleExists)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.VEHICLE_ALREADY_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    const vehicle = await VehicleHelper.createVehicle(req);
    const savedVehicle = await vehicle.save();
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.VEHICLE_ADDED,
          CODE.SUCCESS,
          true,
          savedVehicle
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
    const isVehicleExists = await VehicleHelper.checkVehicle(req);
    if (!isVehicleExists)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.VEHICLE_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    const isVehicleUpdated = await VehicleHelper.updateVehicle(req);
    if (!isVehicleUpdated)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.VEHICLE_UPDATED_FAIL,
            CODE.BAD_REQUEST,
            false
          )
        );
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.VEHICLE_UPDATED,
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

router.get("/specific/:regNo/:vehicleModel", async (req, res) => {
  try {
    const vendor = await VehicleHelper.getVehicle(
      req.params.regNo,
      req.params.vehicleModel
    );
    if (!vendor) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.VEHICLE_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    return res.status(CODE.SUCCESS).json(
      generateMessage(
        RESPONSE_MESSAGES.SUCCESS.VEHICLE_FOUND,
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

router.get("/type/:type", async (req, res) => {
  try {
    const vehicle = await VehicleHelper.getVehicleByType(req.params.type);
    if (!vehicle || vehicle.length === 0) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.VEHICLE_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    return res.status(CODE.SUCCESS).json(
      generateMessage(
        RESPONSE_MESSAGES.SUCCESS.VEHICLE_FOUND,
        CODE.SUCCESS,
        true,
        {
          vehicle,
        }
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
    const vehicle = await VehicleHelper.getAllVehicle();
    if (!vehicle) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.VEHICLE_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    return res.status(CODE.SUCCESS).json(
      generateMessage(
        RESPONSE_MESSAGES.SUCCESS.VEHICLE_FOUND,
        CODE.SUCCESS,
        true,
        {
          vehicle,
        }
      )
    );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});

router.get("/model/:model", async (req, res) => {
  try {
    const vehicle = await VehicleHelper.getVehicleByModel(req.params.model);

    if (!vehicle || vehicle.length === 0) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.VEHICLE_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    return res.status(CODE.SUCCESS).json(
      generateMessage(
        RESPONSE_MESSAGES.SUCCESS.VEHICLE_FOUND,
        CODE.SUCCESS,
        true,
        {
          vehicle,
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
    const { deleted, error } = await VehicleHelper.deleteVehicle(req);
    if (error || !deleted) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.VEHICLE_DELETE_FAIL,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    return res.status(CODE.SUCCESS).json(
      generateMessage(
        RESPONSE_MESSAGES.SUCCESS.VEHICLE_DELETED,
        CODE.SUCCESS,
        true,
        {
          vehicle: deleted,
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
