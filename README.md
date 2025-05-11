# N26 Home Challenge

This repository contains the exploratory testing session, mobile test automation framework for the Monefy Android application, and a RESTful API test automation suite. It includes setup instructions, implementation details, and guidance on running the tests locally.

---

## Exploratory testing session
Full exploratory testing documentation is available in the `/exploratory-testing` folder.
https://github.com/AzeezAAlimi/HomeChallengeAAlimi/blob/main/src/exploratoryTesting/exploratory-testing.md

---

## Test Automation Framework

### Tech Stack
- **WebdriverIO**: Flexible and scalable test runner
- **Appium**: Mobile automation engine
- **Mocha**: Test framework
- **Allure Reporter**: Rich test reporting
- **Page Object Model**: For maintainable and reusable test code

### Scalable and Maintainable Design
- Each page or screen in the app has its own class in the Page Object Model
- Tests are isolated, modular, and follow best practices
- Centralized configuration and reusability of capabilities and test hooks

## Selected E2E User Flows

Based on exploratory testing, the 3 most critical end-to-end user flows automated in this framework are:

1. **Add and Delete an Expense**
2. **Add an Income Entry**
3. **Transfer Between Accounts**

### Bonus Scenarios Included

4. **Currency Conversion**
5. **Switch Currency**

These flows cover the most frequently used core functionalities in Monefy

---

## Setup Instructions

### Node.js
Use `nvm` (Node Version Manager) to install and manage Node.js versions:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
nvm install --lts
nvm use --lts
```

Verify:
```bash
node -v
npm -v
```

### Java JDK

```bash
brew install openjdk@17
sudo ln -sfn /opt/homebrew/opt/openjdk@17/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk-17.jdk
```

Add to shell profile:
```bash
echo 'export PATH="/opt/homebrew/opt/openjdk@17/bin:$PATH"' >> ~/.zprofile
source ~/.zprofile
```

Verify:
```bash
java -version
```

### Android Studio + SDK

Install from [https://developer.android.com/studio](https://developer.android.com/studio).

Ensure the following are installed:
- Android SDK
- Platform Tools
- Emulator
- SDK Build Tools (API 33+)

Set environment variables:
```bash
echo 'export ANDROID_HOME=$HOME/Library/Android/sdk' >> ~/.zprofile
echo 'export PATH=$PATH:$ANDROID_HOME/emulator' >> ~/.zprofile
echo 'export PATH=$PATH:$ANDROID_HOME/platform-tools' >> ~/.zprofile
source ~/.zprofile
```

Verify:
```bash
adb --version
```

### Appium Setup

```bash
npm install -g appium appium-doctor
appium-doctor
```

Start server:
```bash
appium
```

### Install Android Driver
```bash
appium driver install uiautomator2
```

Verify:
```bash
appium driver list --installed
```

---

## How to Run the Tests

Start the emulator:
```bash
emulator -avd <emulator-name>
```

Then run the tests:
```bash
npm run android:test
```

---

## Test Execution Report

Allure report is hosted via GitHub Pages:
https://azeezaalimi.github.io/HomeChallengeAAlimi/reports/mobile-e2e/index.html

---

## RESTful API Test Automation

### Tech Stack
- **Playwright**
- **Allure Reporter**
- **Organized by Domain (e.g., /pet)**

### How to Run

Swagger Petstore is running:
```bash
docker run --name swaggerapi-petstore3 -d -p 8080:8080 swaggerapi/petstore3:unstable
```

Run API tests:
```bash
npx playwright test --config=./src/restfulApiTestAutomation/config/playwright.config.ts
```

Generate Allure report:
```bash
npx allure generate allure-results --clean -o reports/api-e2e
```

Open locally:
```bash
npx allure open reports/api-e2e
```

### API Report

Allure report is hosted via GitHub Pages:
https://azeezaalimi.github.io/HomeChallengeAAlimi/docs/api-e2e/index.html

---

## Prerequisites

- Node.js (LTS)
- Java JDK 17+
- Android Studio
- Appium
- Docker (for API server)

---