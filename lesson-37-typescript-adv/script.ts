import BankAccount from './BankAccount.js';

const aliceAccount: BankAccount = new BankAccount('Alice Bishop', 500);
aliceAccount.deposit(1);
aliceAccount.showAccountDetails();

// =============================================
interface Swimming {
  swim(): void;
}

class Fish implements Swimming {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }

  swim(): void {
    console.log(`${this.name}: I'm swimming`);
  }
}

class Whale implements Swimming {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }

  swim(): void {
    console.log(`${this.name}: I'm big and I'm swimming`);
  }
}

const nemo = new Fish('Nemo');
nemo.swim();

const dory = new Fish('Dory');
dory.swim();

const bigby = new Whale('Bigby');
bigby.swim();

function testFunc(param: Swimming): void {
  param.swim();
}

// ================================================
interface Running {
  run(): void;
}

class Dog implements Running {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
  run(): void {
    console.log(`${this.name} I'm running`);
  }
}

const bolto = new Dog('Bolto');
bolto.run();

class Duck implements Swimming, Running {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }

  run(): void {
    console.log(`${this.name} I'm duck, I'm running`);
  }
  swim(): void {
    console.log(`${this.name} I'm duck, I'm swimming`);
  }
}

const duffy = new Duck('Duffy');
testFunc(duffy);


// ================================================
// ================================================
// ================================================

function demoFunc<T>(param: T): Array<T> {
  if (typeof param === 'string') {
    return param.split('') as Array<T>;
  }

  if (typeof param === 'number') {
    return [param, param * param, param * param * param] as Array<T>;
  }

  return [];
}

const myVar1: string[] = demoFunc<string>('ABCD');
const myVar2: number[] = demoFunc<number>(11);

console.log(myVar1);
console.log(myVar2);

interface Example<T> {
  name: string;
  parameters: Array<T>;
}

const exm: Example<string> = {
  name: 'Example',
  parameters: ['aaaa', 'bbbbb'],
}

const exmpl: Example<number> = {
  name: 'Example',
  parameters: [11, 22, 33],
}

console.log(exm);
console.log(exmpl);

async function example(): Promise<number> {
  const a: number = 3;
  return a;
}