import type Accountable from "./Accountable.interface.ts";

let allAccountsNumber: number = 1;

export default class BankAccount implements Accountable {
  public accountHolderName: string;
  private balance: number;
  private accountNumber: number;

  constructor(accountHolderName: string, startingBalance: number) {
    this.accountHolderName = accountHolderName;
    this.balance = startingBalance;
    this.accountNumber = allAccountsNumber;
    allAccountsNumber = allAccountsNumber + 1;
  }

  public static getNextAccountNumber(): number {
    return allAccountsNumber;
  }

  public showAccountDetails(): void {
    console.log(`------
Client name: ${this.accountHolderName}
Account Number: ${this.accountNumber}
Balance: ${this.balance}
-----`)
  }

  public deposit(amount: number): void {
    this.balance = this.balance + amount;
  }

  public withdraw(amount: number): void | never {
    if (this.balance >= amount) {
      this.balance = this.balance - amount;
    } else {
      throw new Error('Not enough balance!');
      // console.error(`Insufficient balance! Balance: ${this.balance}, amount: ${amount}`);
    }
  }
}