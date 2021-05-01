// Types

let myString: string = "hola";

let myNumber: number = 2;

let myBool: boolean = true;

let myVar: any = "cualquier tipo de dato.";

// Arrays

let stringArray: string[] = ["asd", "234", ""];

// Tuple

let strNumArray: [string, number] = ["hi!", 23];

// Void, Null, Undefined

let myVoid: void = undefined;

let myNull: null = null;

let myUndefined: undefined = undefined;

// Functions

function getSum(num1: number, num2: number): number {
  return num1 + num2;
}

let getSum2 = (num1: number | string, num2: number | string): number => {
  if (typeof num1 === "string") {
    num1 = parseInt(num1);
  }
  if (typeof num2 === "string") {
    num2 = parseInt(num2);
  }
  return num1 + num2;
};

// lastName es opcional
function getName(firstName: string, lastName?: string): string {
  if (lastName === undefined) {
    return firstName;
  }
  return `${firstName} ${lastName}`;
}

// Interfaces

interface ITodo {
  title: string;
  text: string;
}

function showToDo(todo: ITodo) {
  console.log(`${todo.title}: ${todo.text}`);
}

let myToDo: ITodo = {
  title: "Aprender TypeScript con React",
  text: "Lorem",
};

showToDo(myToDo);

// Clases

class User {
  public name: string;
  private email: string;
  public age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;
  }

  register() {
    return `${this.name} is registered!`;
  }

  public AgeInYear() {
    return `${this.age} Years old.`;
  }

  public payInvoice() {
    console.log(`${this.name} paid invoice`);
  }
}

class Member extends User {
  id: number;
  constructor(id: number, name, email, age) {
    super(name, email, age);
    this.id = id;
  }

  payInvoice() {
    super.payInvoice();
  }
}

const Leonardo = new User("Leonardo", "legodev23@gmail.com", 21);

const Eleazar = new Member(3, "Eleazar", "ele@prueba.com", 25);

Eleazar.payInvoice();

document.write(Leonardo.AgeInYear());
