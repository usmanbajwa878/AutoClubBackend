const mongoose = require("mongoose");
const User = require("../Model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.createUser = async (req, password = "") => {
  const user = new User({
    userId: mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    password: password || req.body.password,
    phoneNumber: req.body.phoneNumber,
    joiningDate: req.body.joiningDate,
    role: req.body.role,
    status: req.body.currentStatus,
  });
  return user;
};

exports.checkUser = async (req) => {
  const userExists = await User.findOne({ email: req.body.email });
  if (userExists) {
    return true;
  }
  return false;
};

exports.getUser = async (req) => {
  const user = await User.findOne({ email: req.body.email });
  return user;
};

exports.EncryptPassword = async (req) => {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);
  return hashPassword;
};

exports.valdiatePassword = async (req, hash) => {
  const isEqual = await bcrypt.compare(req.body.password, hash);
  return isEqual;
};

exports.changePassword = async (req) => {
  const user = await User.findOneAndUpdate(
    { email: req.body.email },
    { $set: { password: await this.EncryptPassword(req) } }
  );
  return user;
};

exports.generateToken = async (user) => {
  const token = jwt.sign({ userId: user.userId }, process.env.TOKEN_SECRET);
  return token;
};
