# Exploratory Testing Report – Monefy Android App

## Session Goal

Explore the Monefy Android app to identify key user flows, potential issues, and assess usability and stability for core features related to income and expense tracking.

---

## Test Charters and Prioritization

| Charter # | Description | Priority | Reasoning |
|-----------|-------------|----------|-----------|
| 1 | Add and delete an expense | High | Core functionality expected to be used frequently |
| 2 | Add an income entry | High | Essential feature for financial tracking |
| 3 | Transfer between accounts | High | Impacts balance across accounts |
| 4 | Switch currency | Medium | Important for international users, not daily use |
| 5 | Category editing and addition | Medium | Enhances personalization, not blocking |
| 6 | Change budget settings | Low | Less frequently used by users |
| 7 | Widget functionality | Low | Extra feature, not core to app use |

---

## Findings

| ID | Description | Steps to Reproduce | Severity |
|----|-------------|--------------------|----------|
| BUG-001 | Category icons misaligned when adding new category | Navigate to Categories → Add new category → Select icon | Minor |
| BUG-002 | App crashes when switching currency rapidly | Go to Settings → Currency → Quickly toggle multiple currencies | Major |
| BUG-003 | Transfer not reflected correctly in balance | Transfer $10 from Account A to B → Balance unchanged | Critical |
| BUG-004 | Toast message cut off on landscape mode | Add expense in landscape orientation | Minor |
| BUG-005 | Widget not updating automatically | Add income, then check widget | Moderate |

---

## What Worked Well

- App launches quickly and feels responsive.
- Adding and deleting entries (mostly) works as expected.
- UI is generally clean and intuitive.

---

## Risks and Considerations

| Risk | Description | Mitigation |
|------|-------------|------------|
| Data Loss | Manual deletion of transactions could lead to permanent data loss without warning | Add undo functionality or confirmation dialog |
| Incorrect Financial Data | Bugs in transfer or balance calculations may mislead users | Add validations, logging, and alert on failures |
| Compatibility | May not work reliably on older Android versions or custom ROMs | Test across multiple Android versions and devices |
| Currency Handling | Conversion logic needs verification for accuracy and fallback | Use reliable APIs and handle nulls and timeouts gracefully |
| Performance | App may become slow with a large number of transactions | Consider database optimizations and pagination |

---

## Summary

The Monefy Android app provides essential features for personal finance tracking. While the core functionality is largely intact, there are critical issues (such as incorrect balances after transfers) that could compromise financial trust and should be addressed as a priority. Overall, the app is intuitive but requires deeper regression testing around account and currency handling.