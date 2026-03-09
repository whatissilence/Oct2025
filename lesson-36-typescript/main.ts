
// function showAmount(amount) {
//   return amount.toFixed(2) + ' грн.'
// }
//
// console.log(showAmount('221'))

let myName: string = "John";
let age: number | string = 33;

let studentMarks: number[] = [12, 10, 9, 10, 10, 12];

let studentRow: [string, string, string, boolean, number, number, number, number]
  = ['Oleksii', 'Pavlenko', '3-B', true, 5, 6, 7, 4];

let otherStudentRow: [string, string, string, boolean, number, number, number, number]
  = ['Dima', 'Sidorov', '3-B', true, 12, 12, 10, 12]

age = 'aaa';

const element: HTMLCollectionOf<HTMLElement> = document.getElementsByTagName('body');

console.log(`Hello I'm ${myName}, I'm ${age} years old.`);

function getAmount(amount: number): string {
  return amount.toFixed(2) + ' грн.'
}

function showAmount(amount: number | string, isActive?: boolean): void {
  let numAmount: string | number = amount;

  if (typeof numAmount === 'string') {
    numAmount = Number(numAmount);
  }

  console.log(getAmount(numAmount));
}

// ===========================================

type Book = {
  title: string;
  author: string;
  pages: number;
  copyright?: boolean;
  showInfo?: () => string;
}

type BookImported = Partial<Book>;

const book: Book = {
  title: "Великий Код",
  author: "Людина-Програміст",
  pages: 500,
  copyright: true
};

const book2: Book = {
  title: "Аліса",
  author: "Люіс Керол",
  pages: 388,
  copyright: true,
  showInfo: () => {
    return 'Her name was Alice'
  }
};

const bookFromDiffLib: BookImported = {
  title: "Dictionary"
}

console.log(book2.author)

// =================================================
enum ComputerFormat {
  Tower = 'Tower',
  Notebook = 'Notebook',
  Mini = 'Mini',
  Touch = 'Touch',
}

type Computer = {
  serial: string;
  price: number;
  type: ComputerFormat;
}

const myComputer: Computer = {
  serial: 'aaaabbbcccc',
  price: 10000,
  type: ComputerFormat.Notebook
}

console.log(myComputer.type);

// =================================================

// const john: Record<string, string | number> = {
const john: Record<string, any> = {
  name: 'John',
  email: 'john@example.com',
  password: 'password@example.com',
  age: 32
}


// =================================================

class User {
  public name: string;
  private password: string;
  protected age: number;
  static count: number = 0;

  constructor(name: string, password: string, age: number) {
    this.name = name;
    this.password = password;
    this.age = age;
    User.count++;
  }

  public greet() {
    console.log(`Привіт, мене звати ${this.name}`);
  }

  private checkPassword(password: string): boolean {
    return this.password === password;
  }

  public setPassword(password: string): void {
    // this.password = securePassword(password); // Тут ми типу шифруємо пароль
  }

  protected showAge() {
    console.log(`Мій вік: ${this.age}`);
  }

  static showCount() {
    console.log(`Кількість користувачів: ${User.count}`);
  }
}

const user: Readonly<User> = new User("Олексій", "superSecret", 30);
console.log(user);
// user.password = '123';
user.setPassword("123");