# Exploratory Testing Session of the Monefy App

## Goal

Conduct an exploratory testing session on the Monefy Android app to identify key user flows, potential issues, and assess usability and stability for core features related to income and expense tracking.

---

## Exploratory Testing Charters

### 1. Add and Delete an Expense

* **Explore:** The add and delete expense functionality
* **Using:** UI interactions, manual data entry, and diverse test values (e.g. 10, 1000, 50000)
* **To Discover:** Issues with adding, viewing, or deleting expenses under various conditions
* **Priority:** High
* **Reasoning:** This is a core feature of the app and frequently used by users for daily expense tracking

### 2. Add an Income Entry

* **Explore:** The income entry functionality
* **Using:** UI interactions and a range of input values (e.g. typical salary inputs)
* **To Discover:** Issues with adding, viewing, or updating income entries in different scenarios
* **Priority:** High
* **Reasoning:** This is a core feature for tracking finances and monitoring total income

### 3. Transfer Between Accounts

* **Explore:** The account transfer feature
* **Using:** Manual transfers between various account types and amounts (e.g. cash and payment card)
* **To Discover:** Issues with fund consistency, incorrect balances, or failed transfers
* **Priority:** High
* **Reasoning:** Impacts account balances and is important for accurate financial tracking

### 4. Switch Currency

* **Explore:** The currency switching functionality
* **Using:** Different currency options and frequent switching between them
* **To Discover:** Problems with currency conversion and the persistence of selected currency
* **Priority:** Medium
* **Reasoning:** Important for international users but not typically used daily

### 5. Add and Edit Expense Category

* **Explore:** The feature for adding and editing expense categories
* **Using:** Different category options and available icons
* **To Discover:** UI bugs, naming conflicts, and behavior of newly added categories
* **Priority:** Medium
* **Reasoning:** Enhances user customization but is not critical to core functionality

### 6. Theme Switching

* **Explore:** Light/dark theme switching functionality
* **Using:** Toggling between themes under different screens and states (e.g. during use and after app restart)
* **To Discover:** Visual inconsistencies, missing styling, and failure to retain theme preference
* **Priority:** Low
* **Reasoning:** Aesthetic feature that improves UX but does not affect core functionality

---

## Bugs

### 1. App Crashes When Switching Currencies Quickly

* **Device:** Samsung S5 - Android 6.0.1
* **Steps:** Go to Settings > Currency > Quickly switch between currencies (e.g. Pounds Sterling and Swedish SEK)
* **Severity:** Major

### 2. App Crashes When Internet Connection Is Lost

* **Device:** Samsung S5 - Android 6.0.1
* **Steps:** On main dashboard > Turn off internet connection
* **Severity:** Major

### 3. Category Icons Misaligned When Adding New Category

* **Device:** Samsung S5 - Android 6.0.1
* **Steps:** Navigate to Categories > Add new category > Select icon
* **Severity:** Minor

### 4. Toast Message Takes Too Long to Disappear

* **Device:** Samsung S5 - Android 6.0.1
* **Steps:** Navigate to money transfer from the main dashboard
* **Severity:** Minor

---

## What Worked Well

* App launches quickly and feels extremely responsive, especially on my Samsung S5, which is quite old.
* Adding and deleting expenses works as expected without noticeable issues.

---

## Risks and Mitigations

### 1. Data Loss

* **Description:** Manual deletion of transactions could lead to permanent data loss without warning
* **Mitigation:** Add the undo functionality or a confirmation dialog upon deletion

### 2. Incorrect Financial Data

* **Description:** Bugs in transfer or balance calculations may mislead users on available funds
* **Mitigation:** Implement validations for input, transaction logging, and alert users when a failure occurs

### 3. Compatibility Issues

* **Description:** App may not function reliably on older Android versions
* **Mitigation:** Test across a range of Android devices and versions, including both emulators and real hardware

### 4. Currency Conversion Failures

* **Description:** Issues during currency switching or failed conversions could confuse users
* **Mitigation:** Add fallback, loading indicators, and error messages for failed currency changes