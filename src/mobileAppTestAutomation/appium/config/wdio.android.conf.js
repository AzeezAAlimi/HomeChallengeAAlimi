const { join, resolve } = require("path");
const { config } = require("../config/wdio.shared.conf");

// ====================
// Runner Configuration
// ====================
// WebdriverIO supports running e2e tests as well as unit and component tests.
runner: "local",
  config.port = 4723,
  // ============
  // Specs
  // ============
  config.specs = [
    // ToDo: define location for spec files here
    resolve(__dirname, "../tests/android/e2e/**/*.e2e.js"),
  ];

// ============
// Capabilities
// ============
config.capabilities = [
  {
    // capabilities for local Appium web tests on an Android Emulator
    "appium:platformName": "Android",
    "appium:deviceName": "emulator-5554",
    "appium:automationName": "UiAutomator2",
    "appium:appPackage": "com.monefy.app.lite",
    "appium:appActivity": "com.monefy.activities.main.MainActivity_",
    "appium:app": join(
      process.cwd(),
      "src/mobileAppTestAutomation/appium/app/android/Monefy.apk"
    ),
    // "appium:autoGrantPermissions": true,
    // "appium:platformName": "Android",
    // "appium:platformVersion": "16.0",
    // "appium:deviceName": "Pixel 7 Pro", //
    // "appium:automationName": "UiAutomator2",
    // "appium:appPackage": "com.monefy.app.lite",
    // "appium:appActivity": "com.monefy.activities.main.MainActivity_",
    // "appium:app": join(
    //   process.cwd(),
    //   "src/mobileAppTestAutomation/appium/app/android/Monefy.apk"
    // ),
    // "appium:autoGrantPermissions": true,
  },
];

module.exports = { config };
