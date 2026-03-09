// function showAmount(amount) {
//   return amount.toFixed(2) + ' грн.'
// }
//
// console.log(showAmount('221'))
let myName = "John";
let age = 33;
let studentMarks = [12, 10, 9, 10, 10, 12];
let studentRow = ['Oleksii', 'Pavlenko', '3-B', true, 5, 6, 7, 4];
let otherStudentRow = ['Dima', 'Sidorov', '3-B', true, 12, 12, 10, 12];
age = 'aaa';
const element = document.getElementsByTagName('body');
console.log(`Hello I'm ${myName}, I'm ${age} years old.`);
function getAmount(amount) {
    return amount.toFixed(2) + ' грн.';
}
function showAmount(amount, isActive) {
    let numAmount = amount;
    if (typeof numAmount === 'string') {
        numAmount = Number(numAmount);
    }
    console.log(getAmount(numAmount));
}
const book = {
    title: "Великий Код",
    author: "Людина-Програміст",
    pages: 500,
    copyright: true
};
const book2 = {
    title: "Аліса",
    author: "Люіс Керол",
    pages: 388,
    copyright: true,
    showInfo: () => {
        return 'Her name was Alice';
    }
};
const bookFromDiffLib = {
    title: "Dictionary"
};
console.log(book2.author);
// =================================================
var ComputerFormat;
(function (ComputerFormat) {
    ComputerFormat["Tower"] = "Tower";
    ComputerFormat["Notebook"] = "Notebook";
    ComputerFormat["Mini"] = "Mini";
    ComputerFormat["Touch"] = "Touch";
})(ComputerFormat || (ComputerFormat = {}));
const myComputer = {
    serial: 'aaaabbbcccc',
    price: 10000,
    type: ComputerFormat.Notebook
};
console.log(myComputer.type);
// =================================================
// const john: Record<string, string | number> = {
const john = {
    name: 'John',
    email: 'john@example.com',
    password: 'password@example.com',
    age: 32
};
// =================================================
class User {
    name;
    password;
    age;
    static count = 0;
    constructor(name, password, age) {
        this.name = name;
        this.password = password;
        this.age = age;
        User.count++;
    }
    greet() {
        console.log(`Привіт, мене звати ${this.name}`);
    }
    checkPassword(password) {
        return this.password === password;
    }
    setPassword(password) {
        // this.password = securePassword(password); // Тут ми типу шифруємо пароль
    }
    showAge() {
        console.log(`Мій вік: ${this.age}`);
    }
    static showCount() {
        console.log(`Кількість користувачів: ${User.count}`);
    }
}
const user = new User("Олексій", "superSecret", 30);
console.log(user);
// user.password = '123';
user.setPassword("123");
export {};
