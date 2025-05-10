import { $, $$, expect } from "@wdio/globals";

import OnboardingScreen from "../../../../pageObjectsModel/android/onboardingScreen";
import DashboardScreen from "../../../../pageObjectsModel/android/dashboardScreen";
import ExpenseScreen from "../../../../pageObjectsModel/android/expenseScreen";
import BalanceHistoryScreen from "../../../../pageObjectsModel/android/balanceHistoryScreen";

it("addAndDeleteExpense: Add and delete $500 expense for clothes", async () => {
  await OnboardingScreen.completeOnboarding();
  await DashboardScreen.clothesExpenseCategory();
  await ExpenseScreen.enterAmount("500");
  await ExpenseScreen.saveExpense();
  await expect(DashboardScreen.balanceAmount).toHaveText("Balance -$500.00");
  await expect(DashboardScreen.expenseAmount).toHaveText("$500.00");
  await DashboardScreen.openBalanceHistory();
  await BalanceHistoryScreen.expandClothesGroup();
  await BalanceHistoryScreen.openFirstTransaction();
  await BalanceHistoryScreen.deleteTransaction();
  await DashboardScreen.goBackToDashboard();
  await expect(DashboardScreen.incomeAmount).toHaveText("$0.00");
  await expect(DashboardScreen.expenseAmount).toHaveText("$0.00");
  await expect(DashboardScreen.balanceAmount).toHaveText("Balance $0.00");
});

// npx wdio run src/mobileAppTestAutomation/appium/config/wdio.android.conf.js --spec ./src/mobileAppTestAutomation/appium/tests/android/e2e/expenses/addAndDeleteExpense.e2e.js
