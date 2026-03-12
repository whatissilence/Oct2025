export default interface Accountable {
  deposit(amount: number): void;
  withdraw(amount: number): void;
  showAccountDetails(): void;
}