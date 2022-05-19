const mongoose = require("mongoose");

const debts = mongoose.Schema({
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
  contractId: { type: mongoose.Types.ObjectId },
  type: { type: String, required: true, default: "company" }, //company,person
  duration: { type: String, required: true },
  summary: { type: String, required: true },
  approvedBy: { type: String, requried: true },
  contractingParty: { type: contractUser },
  status: { type: String, default: "active" }, //active,ended,cancelled
});

const transactionRecord = mongoose.Schema({
  transctionId: { type: mongoose.Types.ObjectId },
  month: { type: String, required: true },
  amount: { type: String, required: true },
  date: { type: String, required: true },
});
const customerAccount = mongoose.Schema({
  customerAccountId: { type: mongoose.Types.ObjectId },
  name: { type: String, required: true },
  amount: { type: String, required: true },
  status: { type: String, required: true, default: "payable" },
  date: { type: String, required: true },
  approvedBy: { type: String, required: true },
  bankDetails: {
    type: [
      {
        bankAccount: { type: String, required: true },
        type: { type: String, required: true, default: "Current" },
        createdAt: { type: String, required: true },
        title: { type: String, required: true },
      },
    ],
    default: [],
  },
  transactionRecord: {
    type: [
      {
        transctionId: mongoose.Types.ObjectId,
        month: { type: String, required: true },
        amount: { type: String, required: true },
        date: { type: String, required: true },
      },
    ],
    default: [],
  },
});
const InsuranceAccount = mongoose.Schema({
  insuranceAccountId: { type: mongoose.Types.ObjectId },
  name: { type: String, required: true },
  initialAmount: { type: String, required: true },
  tenure: { type: String, required: true, default: "1 year" }, //1
  internalCoverage: { type: String, required: true },
  externalCoverage: { type: String, required: true },
  deductionRate: { type: String, required: true },
  bankName: { type: String, required: true },
  status: { type: String, required: true, default: "active" }, //inActive
  date: { type: String, required: true },
  approvedBy: { type: String, required: true },
  planType: { type: String, default: "Annual" }, //Bi-Annual,Annual,Monthly
  bankDetails: {
    type: [
      {
        bankAccount: { type: String, required: true },
        type: { type: String, required: true, default: "Current" },
        createdAt: { type: String, required: true },
        title: { type: String, required: true },
      },
    ],
    default: [],
  },
  transactionRecord: {
    type: [
      {
        transctionId: mongoose.Types.ObjectId,
        month: { type: String, required: true },
        amount: { type: String, required: true },
        date: { type: String, required: true },
      },
    ],
    default: [],
  },
});
const vendorAccount = mongoose.Schema({
  vendorAccountId: { type: mongoose.Types.ObjectId },
  vendorId: { type: mongoose.Types.ObjectId, required: true },
  amount: { type: String, required: true },
  status: { type: String, required: true, default: "payable" },
  date: { type: String, required: true },
  approvedBy: { type: String, required: true },
  paymentType: { type: String, required: true },
  bankDetails: {
    type: [
      {
        bankAccount: { type: String, required: true },
        type: { type: String, required: true, default: "Current" },
        createdAt: { type: String, required: true },
        title: { type: String, required: true },
      },
    ],
    default: [],
  },
  transactionRecord: {
    type: [
      {
        transctionId: mongoose.Types.ObjectId,
        month: { type: String, required: true },
        amount: { type: String, required: true },
        date: { type: String, required: true },
      },
    ],
    default: [],
  },
});
const installmentSchema = mongoose.Schema({
  installmentId: { type: mongoose.Types.ObjectId },
  bankName: { type: String, required: true },
  amount: { type: String, required: true },
  processingFee: { type: String, required: true },
  totalAmount: { type: String, required: true },
  markup: { type: String, required: true },
  approvedBy: { type: String, required: true },
  date: { type: String, required: true },
  period: { type: String, required: true },
  bankDetails: {
    type: [
      {
        bankAccount: { type: String, required: true },
        type: { type: String, required: true, default: "Current" },
        createdAt: { type: String, required: true },
        title: { type: String, required: true },
      },
    ],
    default: [],
  },
  transactionRecord: {
    type: [
      {
        transctionId: mongoose.Types.ObjectId,
        month: { type: String, required: true },
        amount: { type: String, required: true },
        date: { type: String, required: true },
      },
    ],
    default: [],
  },
});

const Expense = mongoose.Schema(
  {
    installments: [{ type: installmentSchema, default: [] }],
    customerAccounts: [{ type: customerAccount, default: [] }], //payable,receiveable
    vendorAccounts: [{ type: vendorAccount, default: [] }], //payable,receiveable,
    InsuranceAccounts: [{ type: InsuranceAccount, default: [] }],
    OwnerExpenses: [{ type: expense, default: [] }], //expense,salary,
    bankBalance: [{ type: bankBalance, default: [] }],
    Recoveries: [{ type: recovery, default: [] }],
    debts: [{ type: debts, default: [] }],
    contracts: [{ type: contracts, default: [] }],
    viewedBy: [{ type: viewedUser, default: [] }],
  },
  {
    timeStamps: true,
  }
);

module.exports = mongoose.model("Expense", Expense);
