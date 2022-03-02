const mongoose = require("mongoose");

const debit = mongoose.Schema({
  amount: { type: String, required: true },
  dateIssued: { type: String, required: true },
  approvedBy: { type: String, required: true },
  period: { type: String, required: true },
  dueDate: { type: String, required: true },
  status: { type: String, required: true, default: "active" }, //active,dismissed
});

const expense = mongoose.Schema({
  amount: { type: String, required: true },
  type: { type: String, required: true, default: "self" }, //self,family,workshop,salary
  usedBy: { type: String, required: true },
  createdAt: { type: String, required: true },
});

const viewedUser = mongoose.Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
});

const bankBalance = mongoose.Schema({
  amount: { type: String, required: true },
  type: { type: String, required: true, default: "debited" }, //debited,credited
  createdAt: { type: String, required: true },
});

const recovery = mongoose.Schema({
  amount: { type: String, required: true },
  type: { type: String, required: true, default: "customer" }, //customer,company
  createdAt: { type: String, required: true },
  recoverdBy: { type: String },
});

const contractUser = mongoose.Schema({
  name: { type: String, required: true },
  signedBy: { type: String, required: true },
  designation: { type: String, required: true },
});

const bankDetails = mongoose.Schema({
  bankAccount: { type: String, required: true },
  type: { type: String, required: true, default: "Current" },
  createdAt: { type: String, required: true },
  title: { type: String, required: true },
});

const contracts = mongoose.Schema({
  contractId: { type: String, required: true },
  type: { type: String, required: true, default: "company" }, //company,person
  duration: { type: String, required: true },
  summary: { type: String, required: true },
  approvedBy: { type: String, requried: true },
  contractingParty: { type: contractUser },
  status: { type: String, default: "active" }, //active,ended,cancelled
});

const customerAccount = mongoose.Schema({
  name: { type: String, required: true },
  amount: { type: String, required: true },
  status: { type: String, required: true, default: "payable" },
  date: { type: String, required: true },
  approvedBy: { type: String, required: true },
  bankDetails: { type: bankDetails, required: true },
});
const InsuranceAccount = mongoose.Schema({
  name: { type: String, required: true },
  amount: { type: String, required: true },
  status: { type: String, required: true, default: "payable" },
  date: { type: String, required: true },
  approvedBy: { type: String, required: true },
  bankDetails: { type: bankDetails, required: true },
  type: { type: String, required: true },
});
const vendorAccount = mongoose.Schema({
  name: { type: String, required: true },
  amount: { type: String, required: true },
  status: { type: String, required: true, default: "payable" },
  date: { type: String, required: true },
  approvedBy: { type: String, required: true },
  bankDetails: { type: bankDetails, required: true },
});
const installment = mongoose.Schema({
  installmentId: mongoose.Types.ObjectId,
  bankName: { type: String, required: true },
  amount: { type: String, required: true },
  processingFee: { type: String, required: true },
  totalAmount: { type: String, required: true },
  markup: { type: String, required: true },
  approvedBy: { type: String, required: true },
  date: { type: String, required: true },
  period: { type: String, required: true },
  bankDetails: { type: bankDetails, required: true },
});

const Expense = mongoose.Schema(
  {
    installments: [{ type: installment }],
    customerAccounts: [{ type: customerAccount }], //payable,receiveable
    vendorAccounts: [{ type: vendorAccount }], //payable,receiveable,
    InsuranceAccounts: [{ type: InsuranceAccount }],
    OwnerExpenses: [{ type: expense }], //expense,salary,
    bankBalance: [{ type: bankBalance }],
    Recoveries: [{ type: recovery }],
    debts: [{ type: debit }],
    contracts: [{ type: contracts }],
    viewedBy: [{ type: viewedUser }],
  },
  {
    timeStamps: true,
  }
);

module.exports = mongoose.model("Expense", Expense);
