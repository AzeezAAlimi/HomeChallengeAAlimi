import { $, $$, expect } from "@wdio/globals";

class CurrencyScreen {
  get currencySettingsBtn() {
    return $('//*[@resource-id="com.monefy.app.lite:id/currency_imagebutton"]');
  }

  get mainCurrencyOption() {
    return $(
      '//*[@resource-id="com.monefy.app.lite:id/textViewName" and @text="MAIN CURRENCY"]'
    );
  }

  get usdLabel() {
    return $('//android.widget.TextView[@text="US Dollar"]');
  }

  get poundSterlingLabel() {
    return $('//android.widget.TextView[@text="Pound Sterling"]');
  }

  async openCurrencySettings() {
    await this.currencySettingsBtn.click();
  }

  async selectCurrency(currencyName) {
    await this.mainCurrencyOption.click();
    await $(
      `android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${currencyName}")`
    ).click();
  }
}

export default new CurrencyScreen();
