import { $, $$, expect } from "@wdio/globals";

class DashboardScreen {
  get balanceAmount() {
    return $('//*[@resource-id="com.monefy.app.lite:id/balance_amount"]');
  }

  get expenseAmount() {
    return $('//*[@resource-id="com.monefy.app.lite:id/expense_amount_text"]');
  }

  get incomeAmount() {
    return $('//*[@resource-id="com.monefy.app.lite:id/income_amount_text"]');
  }

  get clothesCategoryBtn() {
    return $(
      '//android.widget.FrameLayout[@resource-id="com.monefy.app.lite:id/piegraph"]/android.widget.ImageView[8]'
    );
  }

  get addIncomeBtn() {
    return $('//*[@resource-id="com.monefy.app.lite:id/income_button_title"]');
  }

  get balanceContainer() {
    return $('//*[@resource-id="com.monefy.app.lite:id/balance_container"]');
  }

  get backToDashboardBtn() {
    return $('//*[@resource-id="com.monefy.app.lite:id/leftLinesImageView"]');
  }

  get hamburgerMenu() {
    return $('//*[@resource-id="com.monefy.app.lite:id/overflow"]');
  }

  async goBackToDashboard() {
    await this.backToDashboardBtn.click();
  }

  async openBalanceHistory() {
    await this.balanceContainer.click();
  }

  async addIncome() {
    await this.addIncomeBtn.click();
  }

  async clothesExpenseCategory() {
    await this.clothesCategoryBtn.click();
  }

  async openHamburgerMenu() {
    await this.hamburgerMenu.click();
  }
}

export default new DashboardScreen();
