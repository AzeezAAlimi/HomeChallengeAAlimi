import { $, $$, expect } from "@wdio/globals";

class BalanceHistoryScreen {
  get transactionGroupHeader() {
    return $(
      '//*[@resource-id="com.monefy.app.lite:id/transaction_group_header"]'
    );
  }

  get firstTransactionItem() {
    return $(
      '//android.widget.ExpandableListView[@resource-id="com.monefy.app.lite:id/expandableListViewTransactions"]/android.widget.LinearLayout'
    );
  }

  get deleteBtn() {
    return $('//*[@resource-id="com.monefy.app.lite:id/delete"]');
  }

  async expandClothesGroup() {
    await this.transactionGroupHeader.click();
  }

  async openFirstTransaction() {
    await this.firstTransactionItem.click();
  }

  async deleteTransaction() {
    await this.deleteBtn.click();
  }
}

export default new BalanceHistoryScreen();
