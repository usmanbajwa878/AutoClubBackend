const router = require("express").Router();
const ExpenseHelper = require("../Helpers/ExpenseHelper");
const { CODE, RESPONSE_MESSAGES } = require("../Helpers/common");
const { generateMessage } = require("../Helpers/Generators");

router.post("/create", async (req, res) => {
  try {
    const isExpenseExists = await ExpenseHelper.checkExpense(req);
    if (isExpenseExists.length > 0)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.INVENTORY_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    const expense = await ExpenseHelper.createExpense(req);
    const savedExpense = await expense.save();
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.EXPENSE_ADDED,
          CODE.SUCCESS,
          true,
          savedExpense
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
    const isExpenseExists = await ExpenseHelper.checkExpense(req);
    console.log("CALLED", isExpenseExists);

    if (!isExpenseExists)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.EXPENSE_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    console.log("IS UPDATED", req.body);
    const isExpenseUpdated = await ExpenseHelper.updateExpense(req);

    if (!isExpenseUpdated)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.EXPENSE_UPDATED_FAIL,
            CODE.BAD_REQUEST,
            false
          )
        );
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.EXPENSE_UPDATED,
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

router.put("/update/installments", async (req, res) => {
  try {
    console.log("CALLED", req.body);
    const isExpenseExists = await ExpenseHelper.checkInstallmentsExists(req);
    if (isExpenseExists)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.EXPENSE_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    const isExpenseUpdated = await ExpenseHelper.updateInstallments(req);
    if (!isExpenseUpdated)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.EXPENSE_UPDATED_FAIL,
            CODE.BAD_REQUEST,
            false
          )
        );
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.EXPENSE_UPDATED,
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

router.put("/update/customerAccounts", async (req, res) => {
  try {
    const isCustomerAccountExists =
      await ExpenseHelper.checkCustomerAccountExists(req);
    if (isCustomerAccountExists)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.EXPENSE_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    const isExpenseUpdated = await ExpenseHelper.updateCustomerAccounts(req);
    if (!isExpenseUpdated)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.EXPENSE_UPDATED_FAIL,
            CODE.BAD_REQUEST,
            false
          )
        );
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.EXPENSE_UPDATED,
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

router.put("/update/vendorAccounts", async (req, res) => {
  try {
    const isVendorAccountExists = await ExpenseHelper.checkVendorAccountsExists(
      req
    );
    if (isVendorAccountExists)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.EXPENSE_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    const isVendorUpdated = await ExpenseHelper.updateVendorAccounts(req);
    if (!isVendorUpdated)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.EXPENSE_UPDATED_FAIL,
            CODE.BAD_REQUEST,
            false
          )
        );
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.EXPENSE_UPDATED,
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

router.put("/update/insuranceAccounts", async (req, res) => {
  try {
    const isInsuranceAccountExists =
      await ExpenseHelper.checkInsuranceAccountsExists(req);
    if (isInsuranceAccountExists)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.EXPENSE_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    const isInsuranceUpdated = await ExpenseHelper.updateInsuranceAccounts(req);
    if (!isInsuranceUpdated)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.EXPENSE_UPDATED_FAIL,
            CODE.BAD_REQUEST,
            false
          )
        );
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.EXPENSE_UPDATED,
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

router.put("/update/ownerExpense", async (req, res) => {
  try {
    const isOwnerUpdated = await ExpenseHelper.updateOwnerExpenses(req);
    if (!isOwnerUpdated)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.EXPENSE_UPDATED_FAIL,
            CODE.BAD_REQUEST,
            false
          )
        );
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.EXPENSE_UPDATED,
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

router.put("/update/bankBalance", async (req, res) => {
  try {
    const isOwnerUpdated = await ExpenseHelper.updateBankBalance(req);
    if (!isOwnerUpdated)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.EXPENSE_UPDATED_FAIL,
            CODE.BAD_REQUEST,
            false
          )
        );
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.EXPENSE_UPDATED,
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

router.put("/update/recoveries", async (req, res) => {
  try {
    const isOwnerUpdated = await ExpenseHelper.updateRecoveries(req);
    if (!isOwnerUpdated)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.EXPENSE_UPDATED_FAIL,
            CODE.BAD_REQUEST,
            false
          )
        );
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.EXPENSE_UPDATED,
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

router.put("/update/contracts", async (req, res) => {
  try {
    const isOwnerUpdated = await ExpenseHelper.updateContracts(req);
    if (!isOwnerUpdated)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.EXPENSE_UPDATED_FAIL,
            CODE.BAD_REQUEST,
            false
          )
        );
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.EXPENSE_UPDATED,
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

router.put("/update/debts", async (req, res) => {
  try {
    const isOwnerUpdated = await ExpenseHelper.updateDebts(req);
    if (!isOwnerUpdated)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.EXPENSE_UPDATED_FAIL,
            CODE.BAD_REQUEST,
            false
          )
        );
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.EXPENSE_UPDATED,
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

router.put("/update/viewedBy", async (req, res) => {
  try {
    const isOwnerUpdated = await ExpenseHelper.updateViewedBy(req);
    if (!isOwnerUpdated)
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.EXPENSE_UPDATED_FAIL,
            CODE.BAD_REQUEST,
            false
          )
        );
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.EXPENSE_UPDATED,
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

router.get("/", async (req, res) => {
  try {
    const expense = await ExpenseHelper.getAllExpenses();
    console.log("EX", expense);
    if (!expense || expense.length === 0) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.EXPENSE_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.EXPENSE_FOUND,
          CODE.SUCCESS,
          true,
          expense[0]
        )
      );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});

router.get("/installments", async (req, res) => {
  try {
    const installments = await ExpenseHelper.getAllInstallments();
    if (!installments || installments.length === 0) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.EXPENSE_INSTALLMENTS_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.EXPENSE_INSTALLMENTS_FOUND,
          CODE.SUCCESS,
          true,
          installments
        )
      );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});

router.get("/customerAccounts", async (req, res) => {
  try {
    const customerAccounts = await ExpenseHelper.getAllCustomerAccounts();
    if (!customerAccounts || customerAccounts.length === 0) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.EXPENSE_CUSTOMER_ACCOUNT_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.EXPENSE_CUSTOMER_ACCOUNT_FOUND,
          CODE.SUCCESS,
          true,
          customerAccounts
        )
      );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});

router.get("/vendorAccounts", async (req, res) => {
  try {
    const vendorAccounts = await ExpenseHelper.getAllVendorAccount();
    if (!vendorAccounts || vendorAccounts.length === 0) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.EXPENSE_VENDOR_ACCOUNTS_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.EXPENSE_VENDORACCOUNTS_FOUND,
          CODE.SUCCESS,
          true,
          vendorAccounts
        )
      );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});

router.get("/insuranceAccounts", async (req, res) => {
  try {
    const insuranceAccounts = await ExpenseHelper.getAllInsuranceAccount();
    if (!insuranceAccounts || insuranceAccounts.length === 0) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.EXPENSE_INSURANCE_ACCOUNTS_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.EXPENSE_INSURANCE_ACCOUNT_FOUND,
          CODE.SUCCESS,
          true,
          insuranceAccounts
        )
      );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});

router.get("/ownerExpenses", async (req, res) => {
  try {
    const ownerExpenses = await ExpenseHelper.getAllOwnwerExpenses();
    if (!ownerExpenses || ownerExpenses.length === 0) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.EXPENSE_INSURANCE_ACCOUNTS_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.EXPENSE_INSURANCE_ACCOUNT_FOUND,
          CODE.SUCCESS,
          true,
          ownerExpenses
        )
      );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});

router.get("/debts", async (req, res) => {
  try {
    const debts = await ExpenseHelper.getAllDebts();
    if (!debts || debts.length === 0) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.EXPENSE_DEBTS_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.EXPENSE_DEBTS_FOUND,
          CODE.SUCCESS,
          true,
          debts
        )
      );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});
router.get("/bankBalance", async (req, res) => {
  try {
    const bankBalance = await ExpenseHelper.getAllBankBalance();
    if (!bankBalance || bankBalance.length === 0) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.EXPENSE_BANK_BALANCE_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.EXPENSE_BANK_BALANCE_FOUND,
          CODE.SUCCESS,
          true,
          bankBalance
        )
      );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});

router.get("/contracts", async (req, res) => {
  try {
    const contracts = await ExpenseHelper.getAllContracts();
    if (!contracts || contracts.length === 0) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.EXPENSE_CONTRACTS_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.EXPENSE_CONTRACTS_FOUND,
          CODE.SUCCESS,
          true,
          contracts
        )
      );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});
router.get("/recoveries", async (req, res) => {
  try {
    const recoveries = await ExpenseHelper.getAllRecoveries();
    if (!recoveries || recoveries.length === 0) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.EXPENSE_RECOVERIES_NOT_EXITS,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.EXPENSE_RECOVERIES_FOUND,
          CODE.SUCCESS,
          true,
          recoveries
        )
      );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});

router.delete("/installment/:installmentId", async (req, res) => {
  try {
    const { deleted, error } =
      await ExpenseHelper.deleteInstallmentsFromExpense(
        req.params.installmentId
      );
    if (error || !deleted) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.EXPENSE_INSTALLMENT_DELETION_FAILED,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.EXPENSE_INSTALLMENTS_DELETED,
          CODE.SUCCESS,
          true,
          { installment: deleted }
        )
      );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});
router.delete("/customerAccount/:customerAccountId", async (req, res) => {
  try {
    const { deleted, error } =
      await ExpenseHelper.deleteCustomerAccountsFromExpense(
        req.params.customerAccountId
      );
    if (error || !deleted) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.EXPENSE_CUSTOMER_ACCOUNT_DELETION_FAILED,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.EXPENSE_CUSTOMERACCOUNT_DELETED,
          CODE.SUCCESS,
          true,
          { customerAccount: deleted }
        )
      );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});

router.delete("/reset", async (req, res) => {
  try {
    const { deleted, error } = await ExpenseHelper.resetExpense(req);
    if (error || !deleted) {
      return res
        .status(CODE.BAD_REQUEST)
        .json(
          generateMessage(
            RESPONSE_MESSAGES.FAIL.EXPENSE_DELETION_FAILED,
            CODE.BAD_REQUEST,
            false
          )
        );
    }
    const expense = await ExpenseHelper.createExpense(req);
    const savedExpense = await expense.save();
    return res
      .status(CODE.SUCCESS)
      .json(
        generateMessage(
          RESPONSE_MESSAGES.SUCCESS.EXPENSE_RESETED,
          CODE.SUCCESS,
          true,
          savedExpense
        )
      );
  } catch (error) {
    return res
      .status(CODE.BAD_REQUEST)
      .json(generateMessage(error, CODE.BAD_REQUEST, false, {}));
  }
});

module.exports = router;
