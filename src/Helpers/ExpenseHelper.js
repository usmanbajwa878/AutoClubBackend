const mongoose = require("mongoose");
const Expense = require("../Model/Expense");

// const debts = mongoose.Schema({
//     amount: { type: String, required: true },
//     dateIssued: { type: String, required: true },
//     approvedBy: { type: String, required: true },
//     period: { type: String, required: true },
//     dueDate: { type: String, required: true },
//     status: { type: String, required: true, default: "active" }, //active,dismissed
//   });

//   const expense = mongoose.Schema({
//     amount: { type: String, required: true },
//     type: { type: String, required: true, default: "self" }, //self,family,workshop,salary
//     usedBy: { type: String, required: true },
//     createdAt: { type: String, required: true },
//   });

//   const viewedUser = mongoose.Schema({
//     name: { type: String, required: true },
//     date: { type: String, required: true },
//   });

//   const bankBalance = mongoose.Schema({
//     amount: { type: String, required: true },
//     type: { type: String, required: true, default: "debited" }, //debited,credited
//     createdAt: { type: String, required: true },
//   });

//   const recovery = mongoose.Schema({
//     amount: { type: String, required: true },
//     type: { type: String, required: true, default: "customer" }, //customer,company
//     createdAt: { type: String, required: true },
//     recoverdBy: { type: String },
//   });

//   const contractUser = mongoose.Schema({
//     name: { type: String, required: true },
//     signedBy: { type: String, required: true },
//     designation: { type: String, required: true },
//   });

//   const bankDetails = mongoose.Schema({
//     bankAccount: { type: String, required: true },
//     type: { type: String, required: true, default: "Current" },
//     createdAt: { type: String, required: true },
//     title: { type: String, required: true },
//   });

//   const contracts = mongoose.Schema({
//     contractId: mongoose.Types.ObjectId,
//     type: { type: String, required: true, default: "company" }, //company,person
//     duration: { type: String, required: true },
//     summary: { type: String, required: true },
//     approvedBy: { type: String, requried: true },
//     contractingParty: { type: contractUser },
//     status: { type: String, default: "active" }, //active,ended,cancelled
//   });

//   const customerAccount = mongoose.Schema({
//     customerAccountId: mongoose.Types.ObjectId(),
//     name: { type: String, required: true },
//     amount: { type: String, required: true },
//     status: { type: String, required: true, default: "payable" },
//     date: { type: String, required: true },
//     approvedBy: { type: String, required: true },
//     bankDetails: { type: bankDetails, required: true },
//     transactionRecord: [
//       {
//         type: {
//           month: { type: String },
//           amount: { type: String },
//           date: { type: String },
//         },
//         default: [],
//       },
//     ],
//   });
//   const InsuranceAccount = mongoose.Schema({
//     insuranceAccountId: mongoose.Types.ObjectId(),
//     name: { type: String, required: true },
//     initialAmount: { type: String, required: true },
//     tenure: { type: String, required: true, default: "1 year" }, //1
//     internalCoverage: { type: String, required: true },
//     externalCoverage: { type: String, required: true },
//     deductionRate: { type: String, required: true },
//     bankName: { type: String, required: true },
//     status: { type: String, required: true, default: "active" }, //inActive
//     date: { type: String, required: true },
//     approvedBy: { type: String, required: true },
//     bankDetails: { type: bankDetails, required: true },
//     planType: { type: String, default: "Annual" }, //Bi-Annual,Annual,Monthly
//     transactionRecord: [
//       {
//         type: {
//           month: { type: String },
//           amount: { type: String },
//           date: { type: String },
//         },
//         default: [],
//       },
//     ],
//   });
//   const vendorAccount = mongoose.Schema({
//     vendorAccountId: mongoose.Types.ObjectId(),
//     vendorId: { type: mongoose.Types.ObjectId, required: true },
//     amount: { type: String, required: true },
//     status: { type: String, required: true, default: "payable" },
//     date: { type: String, required: true },
//     approvedBy: { type: String, required: true },
//     paymentType: { type: String, required: true },
//     bankDetails: { type: bankDetails },
//     transactionRecord: [
//       {
//         type: {
//           month: { type: String },
//           amount: { type: String },
//           date: { type: String },
//         },
//         default: [],
//       },
//     ],
//   });
//   const installment = mongoose.Schema({
//     installmentId: mongoose.Types.ObjectId(),
//     bankName: { type: String, required: true },
//     amount: { type: String, required: true },
//     processingFee: { type: String, required: true },
//     totalAmount: { type: String, required: true },
//     markup: { type: String, required: true },
//     approvedBy: { type: String, required: true },
//     date: { type: String, required: true },
//     period: { type: String, required: true },
//     bankDetails: { type: bankDetails, required: true },
//     transactionRecord: [
//       {
//         type: {
//           month: { type: String },
//           amount: { type: String },
//           date: { type: String },
//         },
//         default: [],
//       },
//     ],
//   });

//   const Expense = mongoose.Schema(
//     {
//       installments: [{ type: installment, default: [] }],
//       customerAccounts: [{ type: customerAccount, default: [] }], //payable,receiveable
//       vendorAccounts: [{ type: vendorAccount, default: [] }], //payable,receiveable,
//       InsuranceAccounts: [{ type: InsuranceAccount, default: [] }],
//       OwnerExpenses: [{ type: expense, default: [] }], //expense,salary,
//       bankBalance: [{ type: bankBalance, default: [] }],
//       Recoveries: [{ type: recovery, default: [] }],
//       debts: [{ type: debts, default: [] }],
//       contracts: [{ type: contracts, default: [] }],
//       viewedBy: [{ type: viewedUser, default: [] }],
//     },
//     {
//       timeStamps: true,
//     }
//   );

exports.createExpense = async (req) => {
  const expense = new Expense({
    installments: req.body.installments,
    customerAccounts: req.body.customerAccounts,
    vendorAccounts: req.body.vendorAccounts,
    InsuranceAccounts: req.body.InsuranceAccounts,
    OwnerExpenses: req.body.OwnerExpenses,
    bankBalance: req.body.bankBalance,
    debts: req.body.debts,
    contracts: req.body.contracts,
    viewedBy: req.body.viewedBy,
  });
  return expense;
};

exports.checkExpense = async () => {
  const expenseExists = await Expense.find();
  if (expenseExists) {
    return true;
  }
  return false;
};

exports.checkInstallmentsExists = async (req) => {
  const installments = await Expense.find({
    installments: {
      $elemMatch: {
        bankName: req.body.bankName,
        period: req.body.period,
        amount: req.body.amount,
      },
    },
  });
  return installments.length > 0 ? true : false;
};
exports.checkCustomerAccountExists = async (req) => {
  const customerAccounts = await Expense.find({
    customerAccounts: {
      $elemMatch: {
        bankDetails: {
          $elemMatch: {
            bankAccount: req.body.bankDetails?.bankAccount,
          },
        },
      },
    },
  });

  return customerAccounts.length > 0 ? true : false;
};
exports.checkVendorAccountsExists = async (req) => {
  const vendorAccount = await Expense.find({
    vendorAccounts: {
      $elemMatch: {
        vendorId: req.body.vendorId,
      },
    },
  });

  return vendorAccount.length > 0 ? true : false;
};
exports.checkInsuranceAccountsExists = async (req) => {
  const insuranceAccount = await Expense.find({
    InsuranceAccounts: {
      $elemMatch: {
        name: req.body.name,
        bankDetails: {
          $elemMatch: {
            bankAccount: req.body.bankDetails?.bankAccount,
          },
        },
      },
    },
  });

  return insuranceAccount.length > 0 ? true : false;
};
exports.getInstallmentsById = async (installmentId) => {
  const installments = await Expense.find({
    installments: {
      $elemMatch: {
        installmentId: installmentId,
      },
    },
  });
  return installments;
};
exports.getAllInstallments = async () => {
  const installments = await Expense.find().select("installments");
  return installments;
};

exports.getCutomerAccountById = async (customerAccountId) => {
  const customerAccount = await Expense.find({
    customerAccounts: {
      $elemMatch: {
        customerAccountId: customerAccountId,
      },
    },
  });
  return customerAccount;
};

exports.getAllCustomerAccounts = async () => {
  const customerAccount = await Expense.find().select("customerAccounts");
  return customerAccount;
};

exports.getVendorAccountById = async (vendorId) => {
  const vendorAccount = await Expense.find({
    vendorAccounts: {
      $elemMatch: {
        vendorId: vendorId,
      },
    },
  });
  return vendorAccount;
};

exports.getAllVendorAccount = async () => {
  const vendorAccounts = await Expense.find().select("vendorAccounts");
  return vendorAccounts;
};

exports.getInsuranceAccountById = async (insuranceAccountId) => {
  const insuranceAccounts = await Expense.find({
    InsuranceAccounts: {
      $elemMatch: {
        insuranceAccountId: insuranceAccountId,
      },
    },
  });
  return insuranceAccounts;
};

exports.getAllInsuranceAccount = async () => {
  const insuranceAccounts = await Expense.find().select("InsuranceAccounts");
  return insuranceAccounts;
};
exports.getAllOwnwerExpenses = async () => {
  const ownerExpenses = await Expense.find().select("OwnerExpenses");
  return ownerExpenses;
};

exports.getAllExpenses = async () => {
  const expense = await Expense.find();
  return expense;
};
exports.getOwnerExpensesByType = async (type) => {
  const ownerExpenses = await Expense.find({
    OwnerExpenses: {
      $elemMatch: {
        type: type,
      },
    },
  });
  return ownerExpenses;
};

exports.getAllBankBalance = async () => {
  const bankBalance = await Expense.find().select("bankBalance");
  return bankBalance;
};
exports.getAllRecoveries = async () => {
  const recoveries = await Expense.find().select("Recoveries");
  return recoveries;
};
exports.getAllDebts = async () => {
  const debts = await Expense.find().select("debts");
  return debts;
};
exports.getAllContracts = async () => {
  const contracts = await Expense.find().select("contracts");
  return contracts;
};

exports.deleteCustomerAccountsFromExpense = async (customerAccountId) => {
  try {
    const deleted = await Expense.update(
      {},
      { $pull: { customerAccounts: { _id: customerAccountId } } }
    );
    return { deleted, error: null };
  } catch (error) {
    return { deleted: null, error };
  }
};

exports.deleteInstallmentsFromExpense = async (installmentId) => {
  try {
    const deleted = await Expense.update(
      {},
      { $pull: { installments: { _id: installmentId } } }
    );
    return { deleted, error: null };
  } catch (error) {
    return { deleted: null, error };
  }
};
exports.resetExpense = async (req) => {
  try {
    const deleted = await Expense.deleteMany({});
    return { deleted, error: null };
  } catch (error) {
    return { deleted: null, error };
  }
};

exports.updateInstallments = async (req) => {
  const updated = await Expense.update(
    {},
    { $push: { installments: req.body } },
    { upsert: false }
  );
  if (updated.ok) {
    return true;
  }
  return false;
};

exports.updateRecoveries = async (req) => {
  const updated = await Expense.update(
    {},
    { $push: { Recoveries: req.body } },
    { upsert: false }
  );
  if (updated.ok) {
    return true;
  }
  return false;
};

exports.updateContracts = async (req) => {
  const updated = await Expense.update(
    {},
    { $push: { contracts: req.body } },
    { upsert: false }
  );
  if (updated.ok) {
    return true;
  }
  return false;
};
exports.updateCustomerAccounts = async (req) => {
  const updated = await Expense.update(
    {},
    { $push: { customerAccounts: req.body } },
    { upsert: false }
  );
  if (updated.ok) {
    return true;
  }
  return false;
};
exports.updateVendorAccounts = async (req) => {
  const updated = await Expense.update(
    {},
    { $push: { vendorAccounts: req.body } },
    { upsert: false }
  );
  if (updated.ok) {
    return true;
  }
  return false;
};
exports.updateDebts = async (req) => {
  const updated = await Expense.update(
    {},
    { $push: { debts: req.body } },
    { upsert: false }
  );
  if (updated.ok) {
    return true;
  }
  return false;
};
exports.updateInsuranceAccounts = async (req) => {
  const updated = await Expense.update(
    {},
    { $push: { InsuranceAccounts: req.body } },
    { upsert: false }
  );
  if (updated.ok) {
    return true;
  }
  return false;
};

exports.updateOwnerExpenses = async (req) => {
  const updated = await Expense.update(
    {},
    { $push: { OwnerExpenses: req.body } },
    { upsert: false }
  );
  if (updated.ok) {
    return true;
  }
  return false;
};
exports.updateBankBalance = async (req) => {
  const updated = await Expense.update(
    {},
    { $push: { bankBalance: req.body } },
    { upsert: false }
  );
  if (updated.ok) {
    return true;
  }
  return false;
};

exports.updateViewedBy = async (req) => {
  const updated = await Expense.update(
    {},
    { $push: { viewedBy: req.body } },
    { upsert: false }
  );
  if (updated.ok) {
    return true;
  }
  return false;
};

exports.updateExpense = async (req) => {
  const updated = await Expense.update(
    {},
    { $set: req.body },
    { upsert: true, new: true }
  );
  if (updated.ok) {
    return true;
  }
  return false;
};
