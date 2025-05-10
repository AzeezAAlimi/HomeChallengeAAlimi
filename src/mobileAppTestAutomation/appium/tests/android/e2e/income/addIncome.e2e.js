import { $, $$, expect } from "@wdio/globals";

import OnboardingScreen from "../../../../pageObjectsModel/android/onboardingScreen";
import DashboardScreen from "../../../../pageObjectsModel/android/dashboardScreen";
import IncomeScreen from "../../../../pageObjectsModel/android/incomeScreen";

it.only("addIncome: Add a $1,000,000 income successfully", async () => {
  await OnboardingScreen.completeOnboarding();
  await DashboardScreen.addIncome();
  await IncomeScreen.enterAmount("1000000");
  await IncomeScreen.saveIncome();
  await expect(DashboardScreen.incomeAmount).toHaveText("$1,000,000.00");
});

// npx wdio run src/mobileAppTestAutomation/appium/config/wdio.android.conf.js --spec ./src/mobileAppTestAutomation/appium/tests/android/e2e/income/addIncome.e2e.js
