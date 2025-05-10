import { $, $$, expect } from "@wdio/globals";

class OnboardingScreen {
  get continueBtn() {
    return $('//*[@resource-id="com.monefy.app.lite:id/buttonContinue"]');
  }

  get closeBtn() {
    return $('//android.widget.TextView[@text="Close"]');
  }

  async completeOnboarding() {
    for (let i = 0; i < 4; i++) {
      await this.continueBtn.click();
    }

    await this.closeBtn.click();
  }
}

export default new OnboardingScreen();
