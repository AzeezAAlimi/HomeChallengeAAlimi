import { $, $$, expect } from "@wdio/globals";

class NavigationDrawerScreen {
  get openDrawerBtn() {
    return $('//android.widget.ImageButton[@content-desc="Open navigation"]');
  }

  get accountSpinner() {
    return $('//*[@resource-id="com.monefy.app.lite:id/icon"]');
  }

  async open() {
    await this.openDrawerBtn.click();
  }

  async selectAccount(accountName) {
    await this.accountSpinner.click();
    await $(
      `//android.widget.TextView[@resource-id="com.monefy.app.lite:id/title" and @text="${accountName}"]`
    ).click();
  }

  async expectAccountSelected(accountName) {
    await expect(
      $(`//android.widget.TextView[@text="${accountName}"]`)
    ).toHaveText(accountName);
  }
}

export default new NavigationDrawerScreen();
