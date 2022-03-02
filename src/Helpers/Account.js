const mongoose = require("mongoose");
const EmployeeAccount = require("../Model/EmployeeAccount");

exports.createEmployeeAccount = async (req) => {
  const account = new EmployeeAccount({
    accountId: mongoose.Types.ObjectId(),
    userId: req.body.userId,
    salary: req.body.salary,
    bankDetails: req.body.bankDetails,
    salaryPaidRecord: [req.body.salaryPaidRecord],
    salaryDeductions: [req.body.salaryDeductions],
    loans: [req.body.loans],
    leaveAssigned: req.body.leaveAssigned,
    Attendence: [req.body.Attendence],
    currentMonthWorkingDays: req.body.currentMonthWorkingDays,
  });
  return account;
};

exports.checkAccount = async (req) => {
  const accountExists = await EmployeeAccount.findOne({
    userId: req.body.userId,
  });
  if (accountExists) {
    return true;
  }
  return false;
};

exports.getAccountByUserId = async (userId) => {
  const account = await EmployeeAccount.findOne({ userId: userId });
  return account;
};

exports.markAttendence = async (userId, attendence) => {
  const account = await EmployeeAccount.findOneAndUpdate(
    { userId: userId },
    {
      $push: { Attendence: attendence },
    }
  );
  return account;
};
exports.updateLeaveCount = async (userId, leaveRemaining) => {
  const account = await EmployeeAccount.findOneAndUpdate(
    { userId: userId },
    {
      $set: { leaveRemaining: leaveRemaining },
    }
  );
  return account;
};
exports.updateSalary = async (userId, salary) => {
  const account = await EmployeeAccount.findOneAndUpdate(
    { userId: userId },
    {
      $set: { salary: salary },
    }
  );
  return account;
};
exports.getAllAccounts = async () => {
  const account = await EmployeeAccount.find();
  return account;
};

exports.getAccountByLeaves = async (leaveAssigned) => {
  const account = await EmployeeAccount.find({ leaveAssigned: leaveAssigned });
  return account;
};

exports.deleteAccount = async (req) => {
  try {
    const deleted = await EmployeeAccount.findOneAndDelete({
      userId: req.body.userId,
    });
    return { deleted, error: null };
  } catch (error) {
    return { deleted: null, error };
  }
};

exports.updateAccount = async (req) => {
  const updated = await EmployeeAccount.update(
    { userId: req.body.userId },
    { $set: req.body },
    { upsert: false }
  );
  if (updated.ok) {
    return true;
  }
  return false;
};
