import { $, $$, expect } from "@wdio/globals";

class ExpenseScreen {
  async enterAmount(amountStr) {
    for (const digit of amountStr) {
      await $(
        `//*[@resource-id="com.monefy.app.lite:id/buttonKeyboard${digit}"]`
      ).click();
    }
  }

  get saveExpenseBtn() {
    return $(
      '//*[@resource-id="com.monefy.app.lite:id/keyboard_action_button"]'
    );
  }

  async saveExpense() {
    await this.saveExpenseBtn.click();
  }
}

export default new ExpenseScreen();
