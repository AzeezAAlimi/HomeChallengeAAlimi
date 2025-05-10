import { $, $$, expect } from "@wdio/globals";

import OnboardingScreen from "../../../../pageObjectsModel/android/onboardingScreen";
import DashboardScreen from "../../../../pageObjectsModel/android/dashboardScreen";
import CurrencyScreen from "../../../../pageObjectsModel/android/currencyScreen";

it("switchCurrency: Change currency from US Dollar to Pound Sterling", async () => {
  await OnboardingScreen.completeOnboarding();
  expect(await DashboardScreen.incomeAmount.getText()).toContain("$");
  expect(await DashboardScreen.expenseAmount.getText()).toContain("$");
  expect(await DashboardScreen.balanceAmount.getText()).toContain("$");
  await DashboardScreen.openHamburgerMenu();
  await CurrencyScreen.openCurrencySettings();
  await expect(CurrencyScreen.usdLabel).toHaveText("US Dollar");
  await CurrencyScreen.selectCurrency("Pound Sterling");
  await expect(CurrencyScreen.poundSterlingLabel).toHaveText("Pound Sterling");
  await DashboardScreen.openHamburgerMenu();
  expect(await DashboardScreen.incomeAmount.getText()).toContain("£");
  expect(await DashboardScreen.expenseAmount.getText()).toContain("£");
  expect(await DashboardScreen.balanceAmount.getText()).toContain("£");
});

// npx wdio run src/mobileAppTestAutomation/appium/config/wdio.android.conf.js --spec ./src/mobileAppTestAutomation/appium/tests/android/e2e/currency/switchCurrency.e2e.js
