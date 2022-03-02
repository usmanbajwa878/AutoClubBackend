const router = require("express").Router();
const JobHelper = require("../Helpers/jobHelper");
const { CODE, RESPONSE_MESSAGES } = require("../Helpers/common");
const { generateMessage } = require("../Helpers/Generators");

router.post("/create", async (req, res) => {
  try {
    const isJobExists = await JobHelper.checkJob(req);
    if (isJobExists)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.JOB_ALREADY_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    const job = await JobHelper.createJob(req);
    const savedJob = await job.save();
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.JOB_ADDED,
          CODE.SUCCESS,
          true,
          savedJob
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
    const isjobExists = await JobHelper.checkJob(req);
    if (!isjobExists)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.JOB_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    const isJobUpdated = await JobHelper.updateJob(req);
    if (!isJobUpdated)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.JOB_UPDATED_FAIL,
            CODE.BAD_REQUEST,
            false
          )
        );
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.JOB_UPDATED,
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

router.get("/manager/:managerId", async (req, res) => {
  try {
    const job = await JobHelper.getJobByManager(req.params.managerId);
    if (!job || job.length === 0) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.JOB_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    return res.status(CODE.SUCCESS).json(
      generateMessage(RESPONSE_MESSAGES.SUCCESS.JOB_FOUND, CODE.SUCCESS, true, {
        job,
      })
    );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});

router.get("/order/:orderNumber", async (req, res) => {
  try {
    const job = await JobHelper.getJobByOrderNumber(req.params.orderNumber);
    if (!job || job.length === 0) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.JOB_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    return res.status(CODE.SUCCESS).json(
      generateMessage(RESPONSE_MESSAGES.SUCCESS.JOB_FOUND, CODE.SUCCESS, true, {
        job,
      })
    );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});

router.get("/status/:status", async (req, res) => {
  try {
    const job = await JobHelper.getJobByStatus(req.params.status);
    if (!job || job.length === 0) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.JOB_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    return res.status(CODE.SUCCESS).json(
      generateMessage(RESPONSE_MESSAGES.SUCCESS.JOB_FOUND, CODE.SUCCESS, true, {
        job,
      })
    );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});

router.get("/", async (req, res) => {
  try {
    const job = await JobHelper.getAllJobs();
    if (!job || job.length === 0) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.JOB_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    return res.status(CODE.SUCCESS).json(
      generateMessage(RESPONSE_MESSAGES.SUCCESS.JOB_FOUND, CODE.SUCCESS, true, {
        job,
      })
    );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});

router.get("/vehicle/:vehicleId", async (req, res) => {
  try {
    const job = await JobHelper.getJobByVehicle(req.params.vehicleId);

    if (!job || job.length === 0) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.JOB_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    return res.status(CODE.SUCCESS).json(
      generateMessage(RESPONSE_MESSAGES.SUCCESS.JOB_FOUND, CODE.SUCCESS, true, {
        job,
      })
    );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});
router.delete("/delete", async (req, res) => {
  try {
    const { deleted, error } = await JobHelper.deleteJob(req);
    if (error || !deleted) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.JOB_DELETE_FAIL,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    return res.status(CODE.SUCCESS).json(
      generateMessage(
        RESPONSE_MESSAGES.SUCCESS.JOB_DELETED,
        CODE.SUCCESS,
        true,
        {
          job: deleted,
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
