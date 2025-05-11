# Exploratory Testing Session of the Monefy app

## Goal

Conduct an exploratory testing session on the Monefy Android app to identify key user flows, potential issues, and assess usability and stability for core features related to income and expense tracking.

---

## Exploratory testing charters to document your testing.

1. Add and delete an expense
Explore: the add and delete expense functionality
Using: UI interactions, manual data entry, and diverse test value (e.g. 10, 1000 or 50000)
To discover: issues with adding, viewing, or deleting expenses under various conditions

Priority: High
Reasoning: This is a core feature of the app and is to be frequently used by users for daily expense tracking

2. Add an Income Entry
Explore: the income entry functionality
Using: UI interactions and a range of input values (e.g. typical salary inputs)
To discover: issues with adding, viewing, or updating income entries in different scenarios

Priority: High
Reasoning: This is a core feature for tracking finances and monitoring total income

3. Transfer Between Accounts
Explore: the account transfer feature
Using: manual transfers between various account types and amounts (e.g. cash and payment card)
To discover: issues with fund consistency, incorrect balances, or failed transfers

Priority: High
Reasoning: This impacts account balances and is important for accurate financial tracking

4. Switch Currency
Explore: the currency switching functionality
Using: different currency options and frequent switching between them
To discover: problems with currency conversion and the persistence of selected currency

Priority: Medium
Reasoning: This feature is important for international users but it is not typically used on a day to day basis

5. Add and edit expense Category
Explore: the feature for adding and editing expense categories
Using: different category options and available icons 
To discover: UI bugs, naming conflicts and the new added expense category behaviour

Priority: Medium
Reasoning: Enhances user customization but not a critical core functionality

6. Theme Switching
Explore: the light/dark theme switching functionality
Using: toggling between themes under different screens and states (e.g. during use and after app restart)
To discover: visual inconsistencies, missing styling and failure to retain theme preference

Priority: Low
Reasoning: Aesthetic feature that improves user experience but does not impact core functionality.

---

## Bugs

1. App crashes when switching currencies quickly
Device: Samsung S5 - Android 6.0.1
Steps to Reproduce: Go to Settings > Currency > Quickly toggle multiple currencies e.g. Pounds Sterling and Swedish SEK
Severity: Major

2. App crashes when internet connection is lost
Device: Samsung S5 - Android 6.0.1
Steps to Reproduce: On main dashboard > Turn off the internet connection
Severity: Major

3. Category icons misaligned when adding new category
Device: Samsung S5 - Android 6.0.1
Steps to Reproduce: Navigate to Categories > Add new category > Select icon
Severity: Minor 

4. Toast message takes too long to disappear
Device: Samsung S5 - Android 6.0.1
Steps to Reproduce: Navigate to money transfer from the main dashboard
Severity: Minor 

---

## What Worked Well?

- App launches quickly and feels extremely responsive esepcially on my samsung s5 which is quite old
- The adding and deleting expenses works as expected without any noticable issues

---

## Risks and Mitigations

1. Data Loss
Description: Manual deletion of transactions could lead to permanent data loss without warning
Mitigation: Add the undo functionality or confirmation dialog upon deletion

2. Incorrect Financial Data
Description: Bugs in transfer or balance calculations may mislead users on available funds
Mitigation: Implement input validations, transaction logging and alert users when a failure has occured

3. Compatibility Issues
Description: App may not function reliably on older Android versions
Mitigation: Test across a range of Android devices and versions this should include  emulators and real devices