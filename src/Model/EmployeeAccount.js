const mongoose = require("mongoose");

const loan = mongoose.Schema({
  loanId: mongoose.Types.ObjectId,
  amount: { type: String, required: true },
  dateIssued: { type: String, required: true },
  approvedBy: { type: String, required: true },
  period: { type: String, required: true },
  dueDate: { type: String, required: true },
  status: { type: String, required: true, default: "active" }, //active,dismissed
});

const salaryPaid = mongoose.Schema({
  amount: { type: String, required: true },
  date: { type: Date, default: Date.now() },
});

const attendence = mongoose.Schema({
  date: { type: String, required: false },
  checkIn: { type: String, required: false },
  checkOut: { type: String, required: false },
});

const deductions = mongoose.Schema({
  date: { type: String, required: true },
  amount: { type: String, required: true },
  reason: { type: String, required: true },
  deductedBy: { type: String, required: true },
  month: { type: String, required: true },
});
const bankDetails = mongoose.Schema({
  bankAccount: { type: String, required: true },
  type: { type: String, required: true, default: "Current" },
  createdAt: { type: String, required: true },
  title: { type: String, required: true },
});

const EmployeeAccount = mongoose.Schema(
  {
    accountId: mongoose.Types.ObjectId,
    userId: { type: mongoose.Types.ObjectId, required: true, ref: "users" },
    salary: { type: Number, required: true },
    bankDetails: { type: bankDetails },
    salaryPaidRecord: [{ type: salaryPaid, required: true }], //salary paid till now
    salaryDeductions: [{ type: deductions, required: true }],
    loans: [{ type: loan, required: true }], // loan
    leaveAssigned: { type: String, default: "9" },
    leaveRemaining: { type: String, default: "0" },
    Attendence: [{ type: attendence, default: [] }],
    currentMonthWorkingDays: { type: String },
  },
  {
    timeStamps: true,
  }
);

module.exports = mongoose.model("EmployeeAccount", EmployeeAccount);
