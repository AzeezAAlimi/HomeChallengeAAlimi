import { $, $$, expect } from "@wdio/globals";

class IncomeScreen {
  async enterAmount(amountStr) {
    for (const digit of amountStr) {
      await $(
        `//*[@resource-id="com.monefy.app.lite:id/buttonKeyboard${digit}"]`
      ).click();
    }
  }

  get saveIncomeBtn() {
    return $(
      '//*[@resource-id="com.monefy.app.lite:id/keyboard_action_button"]'
    );
  }

  get salaryCategory() {
    return $(
      '(//android.widget.ImageView[@resource-id="com.monefy.app.lite:id/imageView"])[2]'
    );
  }

  async saveIncome() {
    await this.saveIncomeBtn.click();
    await this.salaryCategory.click();
  }
}

export default new IncomeScreen();
