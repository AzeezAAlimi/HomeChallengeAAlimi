# N26 Home Challenge

This repository contains the setup instructions for running the project on your local machine. It is important to follow the prerequisites below to ensure your environment is ready.

---

## Prerequisites

### Node.js

Use `nvm` (Node Version Manager) to install and manage Node.js versions.

#### Install `nvm`:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

> After installation, restart your terminal.

#### Install Node.js (LTS version):

```bash
nvm install --lts
nvm use --lts
```

#### Verify installation:

```bash
node -v
npm -v
```

---

### Java JDK

Install Java JDK (17 or higher) using Homebrew:

```bash
brew install openjdk@17
```

Then link the JDK:

```bash
sudo ln -sfn /opt/homebrew/opt/openjdk@17/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk-17.jdk
```

Add Java to your shell profile:

```bash
echo 'export PATH="/opt/homebrew/opt/openjdk@17/bin:$PATH"' >> ~/.zprofile
source ~/.zprofile
```

#### Verify installation:

```bash
java -version
```

---

### Android Studio

Android Studio is needed to run and debug Android apps.

#### Install Android Studio:

- Download from the official site: [https://developer.android.com/studio](https://developer.android.com/studio)
- Follow the installation instructions.

During setup, make sure to install the following:

- Android SDK
- Android SDK Platform Tools
- Android Emulator (optional)
- Required build tools (e.g., SDK 33 or 34)

#### Configure environment variables:

```bash
echo 'export ANDROID_HOME=$HOME/Library/Android/sdk' >> ~/.zprofile
echo 'export PATH=$PATH:$ANDROID_HOME/emulator' >> ~/.zprofile
echo 'export PATH=$PATH:$ANDROID_HOME/tools' >> ~/.zprofile
echo 'export PATH=$PATH:$ANDROID_HOME/tools/bin' >> ~/.zprofile
echo 'export PATH=$PATH:$ANDROID_HOME/platform-tools' >> ~/.zprofile
source ~/.zprofile
```

#### Verify installation:

```bash
adb --version
```

---

### Android Emulator (Optional)

To set up an Android Emulator for local testing:

1. Open Android Studio
2. Go to **Tools > Device Manager**
3. Click **Create Device**
4. Choose a device type (e.g., Pixel 5), then click **Next**
5. Select a system image (e.g., Android 13 - API 33), then click **Next**
6. Name the emulator and finish setup

#### Start the emulator:

You can launch it from Android Studio or via terminal:

````bash
emulator -avd <emulator-name>

---

### Appium Setup

Appium is used for mobile test automation. Make sure Node.js is installed (see above), then follow these steps:

#### Install Appium CLI globally:

```bash
npm install -g appium
````

#### Install Appium Doctor (to verify system dependencies):

```bash
npm install -g appium-doctor
```

#### Verify your setup:

```bash
appium-doctor
```

> Ensure all checks pass, especially for Android SDK and Java.

#### Start the Appium server:

```bash
appium
```

> Appium server should start and be available at `http://localhost:4723`.

---

### Appium Drivers Installation

Appium uses drivers to automate different platforms (e.g., Android, iOS). To automate Android apps, install the UIAutomator2 driver:

#### Install the Android driver:

```bash
appium driver install uiautomator2
```

> You can verify the installed drivers with:

```bash
appium driver list --installed
```

For other platforms like iOS, you can install the XCUITest driver:

```bash
appium driver install xcuitest
```

> Note: iOS automation requires a macOS machine with Xcode installed.
