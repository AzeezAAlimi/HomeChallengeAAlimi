import { $, $$, expect } from "@wdio/globals";

import OnboardingScreen from "../../../../pageObjectsModel/android/onboardingScreen";
import DashboardScreen from "../../../../pageObjectsModel/android/dashboardScreen";
import CurrencyScreen from "../../../../pageObjectsModel/android/currencyScreen";
import IncomeScreen from "../../../../pageObjectsModel/android/incomeScreen";

it("currencyCurrency: Convert balance amount from Pound Sterling to Euro", async () => {
  await OnboardingScreen.completeOnboarding();
  await DashboardScreen.openHamburgerMenu();
  await CurrencyScreen.openCurrencySettings();
  await CurrencyScreen.selectCurrency("Pound Sterling");
  await DashboardScreen.openHamburgerMenu();
  await DashboardScreen.addIncome();
  await IncomeScreen.enterAmount("100");
  await IncomeScreen.saveIncome();
  await expect(DashboardScreen.balanceAmount).toHaveText("Balance £100.00");
  await DashboardScreen.openHamburgerMenu();
  await CurrencyScreen.openCurrencySettings();
  await CurrencyScreen.selectCurrency("Euro");
  await expect(DashboardScreen.balanceAmount).toHaveText("Balance €100.00");
});

// npx wdio run src/mobileAppTestAutomation/appium/config/wdio.android.conf.js --spec ./src/mobileAppTestAutomation/appium/tests/android/e2e/currency/currencyConversion.e2e.js
