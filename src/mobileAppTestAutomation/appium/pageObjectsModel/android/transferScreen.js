import { $, $$, expect } from "@wdio/globals";

class TransferScreen {
  get transferBtn() {
    return $('//*[@resource-id="com.monefy.app.lite:id/transfer_menu_item"]');
  }

  get openKeyboardBtn() {
    return $('//*[@resource-id="com.monefy.app.lite:id/show_keyboard_fab"]');
  }

  get confirmTransferBtn() {
    return $(
      '//*[@resource-id="com.monefy.app.lite:id/keyboard_action_button"]'
    );
  }

  async transferAmount(amountStr) {
    await this.transferBtn.click();
    await this.openKeyboardBtn.click();
    for (const digit of amountStr) {
      await $(
        `//*[@resource-id="com.monefy.app.lite:id/buttonKeyboard${digit}"]`
      ).click();
    }
    await this.confirmTransferBtn.click();
  }
}

export default new TransferScreen();
