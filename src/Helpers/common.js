module.exports = {
  CODE: {
    SUCCESS: 200,
    NOT_FOUND: 404,
    SERVER_ERROR: 500,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
  },
  RESPONSE_MESSAGES: {
    SUCCESS: {
      SIGN_UP: "Registration successfull.",
      LOG_IN: "You have logged in successfully.",
      LOG_OUT: "You have logged out successfully.",
      PERMISSION_ADDED: "Permission has been added successfully.",
      PERMISSION_DELETED: "Permission has been deleted successfully.",
      PERMISSION: "Permission",
      PERMISSIONS_LIST: "Permissions list",
      PERMISSIONS_UPDATED: "Permissions updated",
      OTP_FOR_RESET_PASSWORD:
        "OTP to reset password has been sent to your email",
      PASSWORD_UPDATED: "Password has been updated successfully",
      NO_RECORD_FOUND: "No record found",

      ROLE_ADDED: "Role has been added successfully.",
      ROLE_DELETED: "Role has been deleted successfully.",
      ROLE: "Role",
      ROLES_LIST: "Roles list",
      ROLES_UPDATED: "Role updated",

      USER_DELETED: "User has been deleted successfully.",
      USER: "User",
      USERS_LIST: "Users list",
      USER_UPDATED: "User updated",

      ITEM: "Item",
      ITEM_LIST: "Item List",
      ITEM_CREATED: "Item has been created successfully",
      ITEM_DELETED: "Item has beed deleted successfully",
      ITEM_UPDATED: "Item has beed updated successfully",

      VENDOR_DELETED: "Vendor has been deleted successfully.",
      VENDOR_ADDED: "Vendor has been added successfully",
      VENDOR_FOUND: "Vendor has been found successfully",
      VENDOR: "Vendor",
      VENDORS_LIST: "Vendor list",
      VENDOR_UPDATED: "Vendor updated",

      ACCOUNT_DELETED: "Account has been deleted successfully.",
      ACCOUNT_ADDED: "Account has been added successfully",
      ACCOUNT_FOUND: "Account has been found successfully",
      ACCOUNT: "Account",
      ACCOUNTS_LIST: "Account list",
      ACCOUNT_UPDATED: "Account updated",
      ATTENDENCE_UPDATED: "Attendece marked successfully",
      LEAVE_COUNT_UPDATED: "Leave updated successfully",
      SALARY_UPDATED: "Salary updated successfully",

      INVENTORY_DELETED: "Inventory has been deleted successfully.",
      INVENTORY_RESETED: "Inventory has been reset successfully.",
      INVENTORY_PRODUCT_DELETED:
        "Inventory Product has been deleted successfully",
      INVENTORY_TOOL_DELETED: "Inventory Tool has been deleted successfully",
      INVENTORY_ADDED: "Inventory has been added successfully",
      INVENTORY_PRODUCTS_FOUND:
        "Inventory Products has been found successfully",
      INVENTORY_TOOLS_FOUND: "Inventory Tools has been found successfully",
      INVENTORY_WASTE_FOUND:
        "Inventory Waste products has been found successfully",
      INVENTORY_RECORDS_FOUND: "Inventory Records has been found successfully",
      INVENTORY_HOTSELLING_FOUND:
        "Inventory Hot Selling Product has been found successfully",
      INVENTORY_FOUND: "Inventory has been found successfully",
      INVENTORY: "Inventory",
      INVENTORYS_LIST: "Inventory list",
      INVENTORY_UPDATED: "Inventory updated",

      EXPENSE_DELETED: "Expense has been deleted successfully.",
      EXPENSE_RESETED: "Expense has been reset successfully.",
      EXPENSE_INSTALLMENTS_DELETED:
        "Expense Installments has been deleted successfully",
      EXPENSE_CUSTOMERACCOUNT_DELETED:
        "Expense Customer Account has been deleted successfully",
      EXPENSE_ADDED: "Expense has been added successfully",
      EXPENSE_INSTALLMENTS_FOUND:
        "Expense Installments has been found successfully",
      EXPENSE_CONTRACTS_FOUND: "Expense Contracts has been found successfully",
      EXPENSE_CUSTOMER_ACCOUNT_FOUND:
        "Expense customer account has been found successfully",
      EXPENSE_VENDORACCOUNTS_FOUND:
        "Expense vendor Accounts has been found successfully",
      EXPENSE_INSURANCE_ACCOUNT_FOUND:
        "Expense Insurance Account been found successfully",
      EXPENSE_OWNER_EXPDENSE_FOUND:
        "Expense owner expense been found successfully",
      EXPENSE_BANK_BALANCE_FOUND:
        "Expense bank Balance been found successfully",
      EXPENSE_RECOVERIES_FOUND: "Expense recovery been found successfully",
      EXPENSE_DEBTS_FOUND: "Expense debts been found successfully",
      EXPENSE_VIEWEDBY_FOUND: "Expense Viewed been found successfully",
      EXPENSE_FOUND: "Expense has been found successfully",
      EXPENSE: "Expense",
      EXPENSES_LIST: "Expense list",
      EXPENSE_UPDATED: "Expense updated",
      EXPENSE_RESETED: "Expense has been reset successfully.",

      PRODUCT_UPDATED: "Product updated successfully",
      PRODUCT_ADDED: "Product added successfully",
      STOCK_UPDATED: "Product Stock updated successfully",

      JOB_DELETED: "Job has been deleted successfully.",
      JOB_ADDED: "Job has been added successfully",
      JOB_FOUND: "Job has been found successfully",
      JOB: "Job",
      JOBS_LIST: "Job list",
      JOB_UPDATED: "Job updated",

      VEHICLE_DELETED: "Vehicle has been deleted successfully.",
      VEHICLE_ADDED: "Vehicle has been added successfully",
      VEHICLE_FOUND: "Vehicle has been found successfully",
      VEHICLE: "Vehicle",
      VEHICLES_LIST: "Vehicle list",
      VEHICLE_UPDATED: "Vehicle updated",

      SERVICE_DELETED: "Service has been deleted successfully.",
      SERVICE_ADDED: "Service has been added successfully",
      SERVICE_FOUND: "Service has been found successfully",
      SERVICE: "Service",
      SERVICES_LIST: "Service list",
      SERVICE_UPDATED: "Service updated",

      PRODUCT_DELETED: "Product has been deleted successfully.",
      PRODUCT_ADDED: "Product has been added successfully",
      PRODUCT_FOUND: "Product has been found successfully",
      PRODUCT: "Product",
      PRODUCTS_LIST: "Product list",
      PRODUCT_UPDATED: "Product updated",

      TOOLS_DELETED: "Tool has been deleted successfully.",
      TOOLS_ADDED: "Tool has been added successfully",
      TOOLS_FOUND: "Tool has been found successfully",
      TOOLS: "Tool",
      TOOLSS_LIST: "Tool list",
      TOOLS_UPDATED: "Tool updated",
    },
    FAIL: {
      MISSING_PARAMS: "Please send all the required parameters.",
      USER_NOT_FOUND: "User not found",
      INVALID_OTP_EMAIL: "Invalid OTP or Email",
      WRONG_EMAIL_OR_PASSWORD: "You have provided wrong email or password",
      REQUEST_NOT_COMPLETED: "Request not completed, please try again",
      UNAUTHORIZED: "You are unauthorized, please login and try again",
      INVAID_PERMISSIONS: "You are not permissable to perform this action",
      USER_ALREADY_EXITS: "User already Exists",
      WRONG_EMAIL: "You have provided wrong Email Address",

      VENDOR_ALREADY_EXITS: "Vendor already Exists",
      VENDOR_NOT_EXITS: "Vendor not Exists",
      VENDOR_UPDATED_FAIL: "Vendor has not been updated.Try Again!",

      PRODUCT_ALREADY_EXITS: "Product already Exists",
      PRODUCT_NOT_EXITS: "Product not Exists",

      INVENTORY_PRODUCT_DELETION_FAILED:
        "Inventory Product Deletion failed.Try with Correct Credentials",
      INVENTORY_TOOLS_DELETION_FAILED:
        "Inventory Tool Deletion failed.Try with Correct Credentials",
      INVENTORY_DELETION_FAILED:
        "Inventory  Deletion failed.Try with Correct Credentials",
      INVENTORY_NOT_EXITS: "Inventory not Exists",
      INVENTORY_EXITS: "Inventory Already Exists",
      INVENTORY_UPDATED_FAIL: "Inventory has not been updated.Try Again!",
      INVENTORY_PRODUCTS_NOT_EXITS: "Product not Exists in Inventory",
      INVENTORY_TOOLS_NOT_EXITS: "Tools not Exists in Inventory",
      INVENTORY_WASTE_NOT_EXITS: "Waste not Exists in Inventory",
      INVENTORY_RECORDS_NOT_EXITS: "Waste Records not Exists in Inventory",
      INVENTORY_HOTSELLING_NOT_EXITS: "HotSelling not Exists in Inventory",
      INVENTORY_EXITS: "Inventory Already Exists",
      INVENTORY_UPDATED_FAIL: "Inventory has not been updated.Try Again!",

      EXPENSE_DELETION_FAILED:
        "Expense  Deletion failed.Try with Correct Credentials",

      EXPENSE_CUSTOMER_ACCOUNT_DELETION_FAILED:
        "Expense Customer Account Deletion failed.Try with Correct Credentials",
      EXPENSE_INSTALLMENT_DELETION_FAILED:
        "Expense Installment Deletion failed.Try with Correct Credentials",
      EXPENSE_NOT_EXITS: "Expense not Exists",
      EXPENSE_EXITS: "Expense Already Exists",
      EXPENSE_UPDATED_FAIL: "Expense has not been updated.Try Again!",
      EXPENSE_INSTALLMENTS_NOT_EXITS: "Installments not Exists in Expense",
      EXPENSE_CUSTOMER_ACCOUNT_NOT_EXITS:
        "Customer Accounts not Exists in Expense",

      EXPENSE_CONTRACTS_NOT_EXITS: "Contracts not Exists in Expense",
      EXPENSE_BANK_BALANCE_NOT_EXITS:
        "Owner Bank Balance not Exists in Expense",
      EXPENSE_RECOVERIES_NOT_EXITS: "Owner Recoveries not Exists in Expense",

      EXPENSE_VENDOR_ACCOUNTS_NOT_EXITS:
        "Owner Vendor Account not Exists in Expense",

      EXPENSE_INSURANCE_ACCOUNTS_NOT_EXITS:
        "Insurance Account not Exists in Expense",
      EXPENSE_DEBTS_NOT_EXITS: "Debts not Exists in Expense",
      EXPENSE_OWNER_EXPENSE_NOT_EXITS: "Owner Expense not Exists in Expense",
      EXPENSE_VIEWEDBY_NOT_EXITS: "Owner Viewed By not Exists in Expense",

      EXPENSE_EXITS: "Expense Already Exists",
      EXPENSE_UPDATED_FAIL: "Expense has not been updated.Try Again!",

      PRODUCT_UPDATED_FAIL: "Product has not been updated.Try Again!",

      ACCOUNT_ALREADY_EXITS: "Account already Exists",
      ACCOUNT_NOT_EXITS: "Account not Exists",
      ACCOUNT_UPDATED_FAIL: "Account has not been updated.Try Again!",
      ATTENDENCE_UPDATED_FAIL: "Attendence has not been updated.Try Again!",
      SALARY_UPDATED_FAIL: "Salary has not been updated.Try Again!",
      LEAVE_UPDATED_FAIL: "Leave Count has not been updated.Try Again!",
      ACCOUNT_DELETE_FAIL:
        "Account Deletion Failed Try with Correct Credentials",

      JOB_ALREADY_EXITS: "Job already Exists",
      JOB_NOT_EXITS: "Job not Exists",
      JOB_UPDATED_FAIL: "Job has not been updated.Try Again!",
      JOB_DELETE_FAIL: "Job Deletion Failed Try with Correct Credentials",

      VEHICLE_ALREADY_EXITS: "Vehicle already Exists",
      VEHICLE_NOT_EXITS: "Vehicle not Exists",
      VEHICLE_UPDATED_FAIL: "Vehicle has not been updated.Try Again!",
      VEHICLE_DELETE_FAIL:
        "Vehicle Deletion Failed Try with Correct Credentials",

      SERVICE_ALREADY_EXITS: "Service already Exists",
      SERVICE_NOT_EXITS: "Service not Exists",
      SERVICE_UPDATED_FAIL: "Service has not been updated.Try Again!",

      PRODUCT_ALREADY_EXITS: "Product already Exists",
      PRODUCT_NOT_EXITS: "Product not Exists",
      PRODUCT_UPDATED_FAIL: "Product has not been updated.Try Again!",
      PRODUCT_DELETE_FAIL:
        "Product Deletion Failed Try with Correct Credentials",

      TOOL_ALREADY_EXITS: "Tool already Exists",
      TOOL_NOT_EXITS: "Tool not Exists",
      TOOL_UPDATED_FAIL: "Tool has not been updated.Try Again!",
      TOOL_DELETE_FAIL: "Tool Deletion Failed Try with Correct Credentials",
    },
    OTHERS: {
      FORGOT_EMAIL_SUBJECT: "FORGOT PASSWORD OTP",
    },
  },
};
