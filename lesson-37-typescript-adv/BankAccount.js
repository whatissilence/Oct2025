let allAccountsNumber = 1;
export default class BankAccount {
    accountHolderName;
    balance;
    accountNumber;
    constructor(accountHolderName, startingBalance) {
        this.accountHolderName = accountHolderName;
        this.balance = startingBalance;
        this.accountNumber = allAccountsNumber;
        allAccountsNumber = allAccountsNumber + 1;
    }
    static getNextAccountNumber() {
        return allAccountsNumber;
    }
    showAccountDetails() {
        console.log(`------
Client name: ${this.accountHolderName}
Account Number: ${this.accountNumber}
Balance: ${this.balance}
-----`);
    }
    deposit(amount) {
        this.balance = this.balance + amount;
    }
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance = this.balance - amount;
        }
        else {
            throw new Error('Not enough balance!');
            // console.error(`Insufficient balance! Balance: ${this.balance}, amount: ${amount}`);
        }
    }
}
