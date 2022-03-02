const router = require("express").Router();
const UserHelper = require("../Helpers/User");
const { CODE, RESPONSE_MESSAGES } = require("../Helpers/common");
const { generateMessage } = require("../Helpers/Generators");

router.post("/register", async (req, res) => {
  try {
    const isUserExists = await UserHelper.checkUser(req);
    if (isUserExists)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.USER_ALREADY_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    const password = await UserHelper.EncryptPassword(req);
    const user = await UserHelper.createUser(req, password);
    const savedUser = await user.save();
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.SIGN_UP,
          CODE.SUCCESS,
          true,
          savedUser
        )
      );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});

router.post("/login", async (req, res) => {
  try {
    const isUserExists = await UserHelper.checkUser(req);
    if (!isUserExists) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.WRONG_EMAIL_OR_PASSWORD,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    const userData = await UserHelper.getUser(req);
    const isMatched = await UserHelper.valdiatePassword(req, userData.password);
    if (!isMatched) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.WRONG_EMAIL_OR_PASSWORD,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    const token = await UserHelper.generateToken(userData);
    return res.status(CODE.SUCCESS).json(
      generateMessage(RESPONSE_MESSAGES.SUCCESS.LOG_IN, CODE.SUCCESS, true, {
        user: userData,
        token: token,
      })
    );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});

router.post("/forgetPassword", async (req, res) => {
  try {
    const isUserExists = await UserHelper.checkUser(req);
    if (!isUserExists) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.WRONG_EMAIL,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    const user = await UserHelper.changePassword(req);
    const savedUser = await user.save();
    const token = await UserHelper.generateToken(savedUser);
    return res.status(CODE.SUCCESS).json(
      generateMessage(
        RESPONSE_MESSAGES.SUCCESS.PASSWORD_UPDATED,
        CODE.SUCCESS,
        true,
        {
          user: savedUser,
          token: token,
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
