// string
let myName = "Max";

// number
let myAge = 27.5;
myAge = 27;

// boolean
let hasHobbies = false;
// error
// hasHobbies = 1;

// 初期時に型がない場合、動的型づけ
let myReadAge;
myReadAge = 27;
myReadAge = "27";

// any
let myReadAgeAny: any;
myReadAgeAny = 27;
myReadAgeAny = "27";

let myReadAgeString: string;
myReadAgeString = "27";

// array
let hobbies = ["cooking", "Sports"];
console.log(typeof hobbies);
// error
// hobbies = [100]

let hobbiesAny: any[] = ["cooking", "Sports"];
hobbiesAny = [100];

// tuples
let address: [string, number] = ["Superstreet", 90];
// error
// let addressError: [string, number] = [90, "Superstreet"]

// enum
// => implelit number assignment from zero
enum Color1 {
  Gray,
  Green,
  Blue
}
let myColor1: Color1 = Color1.Green;
console.log(myColor1); // 1

enum Color2 {
  Gray,
  Green = 100,
  Blue
}

let myColor2: Color2 = Color2.Green;
console.log(myColor2); // 100
myColor2 = Color2.Blue;
console.log(myColor2); // 101

enum Color3 {
  Gray,
  Green = 100,
  Blue = 2
}

let myColor3: Color3 = Color3.Green;
console.log(myColor3); // 100
myColor3 = Color3.Blue;
console.log(myColor3); // 2

// any
let car: any = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);

// functions
function returnMyName(): string {
  return myName;
}
console.log(returnMyName());

// void
function sayHello(): void {
  console.log("HEllo");
}

// argument types
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}
console.log(multiply(2, 3));

// function type
let myMultiply: (val1: number, val2: number) => number;
myMultiply = multiply;
console.log(myMultiply(5, 2));

// objects
let userData = {
  name: "Max",
  age: 27
};
// error
// userData = {
//   a: "Hello",
//   b: 22
// };
let userData2: { name: string; age: number } = {
  name: "Max",
  age: 27
};

// complex
let complex: { data: number[]; output: (all: boolean) => number[] } = {
  data: [100, 3.99, 10],

  output: function(all: boolean): number[] {
    return this.data;
  }
};

// type alias
type Complex = { data: number[]; output: (all: boolean) => number[] };

let complex2: Complex = {
  data: [100, 3.99, 10],

  output: function(all: boolean): number[] {
    return this.data;
  }
};

// union types (can chain more than two types!)
let myRealAge: number | string = 27;
myRealAge = "27";
// error
// myRealAge = true;

// check types
let finalValue = "A string";
if (typeof finalValue == "number") {
  console.log("Final value is a number");
}

// never type (from typescript 2.0)
function neverReturn(): never {
  throw new Error("An error!");
}

// Nullable type (from typescript 2.0)
let canNotBeNull = 12;
// error
// canNotBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;

// nullable
let canBeNull: number | null = 12;
canBeNull = null;

// execise1
type backAccount = { money: number; deposit: (value: any) => void };
let b: backAccount = {
  money: 200,
  deposit: function(value) {
    this.money += value;
  }
};

type myself = { name: string; bankAccount: backAccount; hobbies: string[] };
let myself: myself = {
  name: "Max",
  bankAccount: b,
  hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);
console.log(myself);
