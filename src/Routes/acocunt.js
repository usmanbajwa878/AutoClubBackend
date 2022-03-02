const router = require("express").Router();
const AccountHelper = require("../Helpers/Account");
const { CODE, RESPONSE_MESSAGES } = require("../Helpers/common");
const { generateMessage } = require("../Helpers/Generators");

router.post("/create", async (req, res) => {
  try {
    const isAccountExists = await AccountHelper.checkAccount(req);
    if (isAccountExists)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.ACCOUNT_ALREADY_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    const account = await AccountHelper.createEmployeeAccount(req);
    const savedAcciunt = await account.save();
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.ACCOUNT_ADDED,
          CODE.SUCCESS,
          true,
          savedAcciunt
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
    const isAccountExists = await AccountHelper.checkAccount(req);
    if (!isAccountExists)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.ACCOUNT_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    const isAccountUpdated = await AccountHelper.updateAccount(req);
    if (!isAccountUpdated)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.ACCOUNT_UPDATED_FAIL,
            CODE.BAD_REQUEST,
            false
          )
        );
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.ACCOUNT_UPDATED,
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

router.put("/attendence", async (req, res) => {
  try {
    const isAccountExists = await AccountHelper.checkAccount(req);
    if (!isAccountExists)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.ACCOUNT_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    const isAccountUpdated = await AccountHelper.markAttendence(
      req.body.userId,
      req.body.attendence
    );
    if (!isAccountUpdated)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.ATTENDENCE_UPDATED_FAIL,
            CODE.BAD_REQUEST,
            false
          )
        );
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.ATTENDENCE_UPDATED,
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

router.put("/leave/update", async (req, res) => {
  try {
    const isAccountExists = await AccountHelper.checkAccount(req);
    if (!isAccountExists)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.ACCOUNT_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    const isAccountUpdated = await AccountHelper.updateLeaveCount(
      req.body.userId,
      req.body.leaveRemaining
    );
    if (!isAccountUpdated)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.LEAVE_UPDATED_FAIL,
            CODE.BAD_REQUEST,
            false
          )
        );
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.LEAVE_COUNT_UPDATED,
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

router.put("/salary/update", async (req, res) => {
  try {
    const isAccountExists = await AccountHelper.checkAccount(req);
    if (!isAccountExists)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.ACCOUNT_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    const isAccountUpdated = await AccountHelper.updateSalary(
      req.body.userId,
      req.body.salary
    );
    if (!isAccountUpdated)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.SALARY_UPDATED_FAIL,
            CODE.BAD_REQUEST,
            false
          )
        );
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.SALARY_UPDATED,
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

router.get("/user/:userId", async (req, res) => {
  try {
    const account = await AccountHelper.getAccountByUserId(req.params.userId);
    if (!account || account.length === 0) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.ACCOUNT_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    return res.status(CODE.SUCCESS).json(
      generateMessage(RESPONSE_MESSAGES.SUCCESS.JOB_FOUND, CODE.SUCCESS, true, {
        account,
      })
    );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});

router.get("/leave/:leaves", async (req, res) => {
  try {
    const account = await AccountHelper.getAccountByLeaves(req.params.leaves);
    if (!account || account.length === 0) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.ACCOUNT_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    return res.status(CODE.SUCCESS).json(
      generateMessage(
        RESPONSE_MESSAGES.SUCCESS.ACCOUNT_FOUND,
        CODE.SUCCESS,
        true,
        {
          account,
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
    const accounts = await AccountHelper.getAllAccounts();
    if (!accounts || accounts.length === 0) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.ACCOUNT_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    return res.status(CODE.SUCCESS).json(
      generateMessage(
        RESPONSE_MESSAGES.SUCCESS.ACCOUNT_FOUND,
        CODE.SUCCESS,
        true,
        {
          accounts,
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
    const { deleted, error } = await AccountHelper.deleteAccount(req);
    if (error || !deleted) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.ACCOUNT_DELETE_FAIL,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    return res.status(CODE.SUCCESS).json(
      generateMessage(
        RESPONSE_MESSAGES.SUCCESS.ACCOUNT_DELETED,
        CODE.SUCCESS,
        true,
        {
          account: deleted,
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
