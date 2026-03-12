import BankAccount from './BankAccount.js';
const aliceAccount = new BankAccount('Alice Bishop', 500);
aliceAccount.deposit(1);
aliceAccount.showAccountDetails();
class Fish {
    name;
    constructor(name) {
        this.name = name;
    }
    swim() {
        console.log(`${this.name}: I'm swimming`);
    }
}
class Whale {
    name;
    constructor(name) {
        this.name = name;
    }
    swim() {
        console.log(`${this.name}: I'm big and I'm swimming`);
    }
}
const nemo = new Fish('Nemo');
nemo.swim();
const dory = new Fish('Dory');
dory.swim();
const bigby = new Whale('Bigby');
bigby.swim();
function testFunc(param) {
    param.swim();
}
class Dog {
    name;
    constructor(name) {
        this.name = name;
    }
    run() {
        console.log(`${this.name} I'm running`);
    }
}
const bolto = new Dog('Bolto');
bolto.run();
class Duck {
    name;
    constructor(name) {
        this.name = name;
    }
    run() {
        console.log(`${this.name} I'm duck, I'm running`);
    }
    swim() {
        console.log(`${this.name} I'm duck, I'm swimming`);
    }
}
const duffy = new Duck('Duffy');
testFunc(duffy);
// ================================================
// ================================================
// ================================================
function demoFunc(param) {
    if (typeof param === 'string') {
        return param.split('');
    }
    if (typeof param === 'number') {
        return [param, param * param, param * param * param];
    }
    return [];
}
const myVar1 = demoFunc('ABCD');
const myVar2 = demoFunc(11);
console.log(myVar1);
console.log(myVar2);
const exm = {
    name: 'Example',
    parameters: ['aaaa', 'bbbbb'],
};
const exmpl = {
    name: 'Example',
    parameters: [11, 22, 33],
};
console.log(exm);
console.log(exmpl);
