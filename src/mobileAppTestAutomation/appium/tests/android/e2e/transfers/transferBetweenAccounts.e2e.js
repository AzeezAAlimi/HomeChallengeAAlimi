import { $, $$, expect } from "@wdio/globals";

import OnboardingScreen from "../../../../pageObjectsModel/android/onboardingScreen";
import DashboardScreen from "../../../../pageObjectsModel/android/dashboardScreen";
import NavigationDrawerScreen from "../../../../pageObjectsModel/android/navigationDrawerScreen";
import IncomeScreen from "../../../../pageObjectsModel/android/incomeScreen";
import TransferScreen from "../../../../pageObjectsModel/android/transferScreen";

it("transferBetweenAccounts: Transfer $50 from Cash to Payment", async () => {
  await OnboardingScreen.completeOnboarding();
  await NavigationDrawerScreen.open();
  await NavigationDrawerScreen.selectAccount("Cash");
  await NavigationDrawerScreen.expectAccountSelected("Cash");
  await DashboardScreen.addIncome();
  await IncomeScreen.enterAmount("50");
  await IncomeScreen.saveIncome();
  await TransferScreen.transferAmount("50");
  await DashboardScreen.openHamburgerMenu();
  await expect(DashboardScreen.balanceAmount).toHaveText("Balance $0.00");
  await NavigationDrawerScreen.open();
  await NavigationDrawerScreen.selectAccount("Payment card");
  await NavigationDrawerScreen.expectAccountSelected("Payment card");
  await expect(DashboardScreen.balanceAmount).toHaveText("Balance $50.00");
});

// npx wdio run src/mobileAppTestAutomation/appium/config/wdio.android.conf.js --spec ./src/mobileAppTestAutomation/appium/tests/android/e2e/transfers/transferBetweenAccounts.e2e.js
