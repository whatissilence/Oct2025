'use strict';

function sayHello(smthToLove, a, b, c) {
  console.log(`My name is ${ this.name } ${ this.secondName }, I'm ${ this.age } years old.`);

  if (smthToLove) {
    console.log(`I love my ${smthToLove} ${a} ${b} ${c}`);
  }
}

const personJohn = {
  name: 'John',
  secondName: 'Wick',
  email: 'john@example.com',
  password: 'password',
  age: 33,
  jump: function () {
    console.log(`${this.name}: I'm jumping! `)
  }
}

const personMary = {
  name: 'Mary',
  secondName: 'Curie',
  email: 'mary@example.com',
  password: 'password',
  age: 26,
}

// personJohn.greetings = sayHello;
// personMary.greetings = sayHello;

// personJohn.greetings();
// personMary.greetings();

sayHello.call(personJohn, 'Dog', 'House', 'Car', 'Guns')
sayHello.apply(personJohn, ['Dog', 'House', 'Car', 'Guns'])

// const maryGreetings = sayHello.bind(personMary);
// maryGreetings('Experiments', 'Husband', 'Car', 'Guns');

// setTimeout(sayHello.bind(personMary), 3000)
// setTimeout(personJohn.jump.bind(personJohn), 2000)

console.log('=======================================')
// Wolf =================================================

function Wolf(name, height, furColor){
  this.name = name;
  this.height = height;
  this.furColor = furColor || 'black';
}

Wolf.prototype.makeSound = function() {
  console.log(`${this.name}: Awoo!`);
}

Wolf.prototype.run = function() {
  console.log(`${this.name}: I'm running!`);
}

Wolf.prototype.jump = function() {
  console.log(`${this.name}: I'm jumping!`);
}

Wolf.prototype.eat = function() {
  console.log(`${this.name}: I'm eating!`);
}

// ========================================

const grey = new Wolf('Grey', 120, 'grey');
console.log('grey', grey);

const lily = new Wolf('Lily', 80, 'white');
console.log('lily', lily);
lily.makeSound()

const alice = new Wolf('Alice', 90, 'white');
alice.makeSound()

const stranger = new Wolf();
console.log('stranger', stranger);


// Dog =================================================
function Dog(name, height, furColor, breed) {
  Wolf.call(this, name, height, furColor)
  this.breed = breed;
}

Dog.prototype = Object.create(Wolf.prototype);

Dog.prototype.makeSound = function() {
  console.log(`${this.name}: Woof!!!`);
}

const jack = new Dog('Jack', 100, 'red', 'collie');
console.log('jack', jack);
console.log(jack instanceof Dog);
jack.run();

jack.highJump = function () {
  console.log(`${this.name}: Look how High I'm jumping!!!`);
}

jack.highJump();
jack.makeSound();

const island = new Dog('Island', 88, 'brow', 'doberman');
island.makeSound();

// ===============================================
console.log('::::::::::::::::::::::::::::::::::::::')

// const buttonText = user && user.id && product && product.isInStock && 'Покупка дозволена';
// if (buttonText) {
//   console.log(`<button>${buttonText}</button>`);
// }
//
// const userName = user.name || user.cookies.name || user.session.name || input.value || 'Mr(s) Incognito';

// ===============================================
let allAccountsNumber = 100;

// ==================BankAccount==========================
class BankAccount {
  constructor(accountHolderName, balance) {
    this.accountHolderName = accountHolderName;
    this.balance = balance;
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
-----`)
  }

  deposit(amount) {
    this.balance = this.balance + amount;
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance = this.balance - amount;
    } else {
      // throw new Error('Not enough balance!');
      console.error(`Insufficient balance! Balance: ${this.balance}, amount: ${amount}`);
    }
  }
}

// ==================VipBankAccount==========================
class VipBankAccount extends BankAccount {
  #limit = 500;

  constructor(accountHolderName, balance) {
    super(accountHolderName, balance);
  }

  get limit() {
    return this.#limit;
  }

  set limit(value) {
    if (value + this.#limit <= 1000) {
      this.#limit = value;
    } else {
      console.log(`Cannot change limit for ${value}!`);
    }
  }

  withdraw(amount) {
    if (this.balance + this.#limit >= amount) {
      this.balance = this.balance - amount;
    } else {
      // throw new Error('Not enough balance!');
      console.error(`Insufficient balance! Balance: ${this.balance}, limit: ${this.#limit}, amount: ${amount}`);
    }
  }
}

const gendalfAccount = new BankAccount('Gendalf', 2000);
gendalfAccount.showAccountDetails();

const galadrielAccount = new BankAccount('Galadriel', 200000);
galadrielAccount.showAccountDetails();

console.log(galadrielAccount)
galadrielAccount.deposit(1000);
galadrielAccount.showAccountDetails();

const gollumAcc = new BankAccount('Gollum', 10);
gollumAcc.deposit(5);
gollumAcc.showAccountDetails();
gollumAcc.withdraw(50);
gollumAcc.showAccountDetails();

console.log(BankAccount.getNextAccountNumber());

const harryAccount = new VipBankAccount('Harry', 10000);
harryAccount.showAccountDetails();
harryAccount.withdraw(10450);
harryAccount.showAccountDetails();
harryAccount.withdraw(100);

console.log(harryAccount.limit);
harryAccount.limit = 10000;

console.log(BankAccount.getNextAccountNumber());