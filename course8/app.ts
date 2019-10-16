// Simple generic
function echo(data: any) {
  return data;
}

console.log(echo("Max"));
console.log(echo(27));
console.log(echo({ name: "Max", age: 27 }));

// Better Generic
// <T> is telling that we keep type of T
function betterEcho<T>(data: T) {
  return data;
}
console.log(betterEcho("Max").length);
console.log(betterEcho<number>(27)); // <>内に明示的なタイプを宣言
console.log(betterEcho({ name: "Max", age: 27 }));

// Built-in Generics
const testResults: Array<number> = [1.94, 2.33];
testResults.push(-2.99);
console.log(testResults);

// Arrays
function printAll<T>(args: T[]) {
  args.forEach(element => console.log(element));
}
printAll<string>(["Apple", "Banna"]);

// Generic Types
const echo2: <T>(data: T) => T = echo;

console.log(echo2("Something"));
console.log(echo2<string>("Something"));

// Genearic Class

// class SimpleMath<T> {
//   baseValue: T;
//   multiplyValue: T;
//   calculate(): number {
//
// error
// The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
//     return this.baseValue * this.multiplyValue;
//   }
// }

class SimpleMath2<T> {
  baseValue: T;
  multiplyValue: T;
  calculate(): number {
    return +this.baseValue * +this.multiplyValue; // 数値型にキャスト
  }
}

const simpleMath2 = new SimpleMath2();
// simpleMath2.baseValue = 10;
simpleMath2.baseValue = "10"; // castされるためOK
simpleMath2.multiplyValue = 30;
console.log(simpleMath2.calculate());

// Constraints
class SimpleMath3<T extends number> {
  baseValue: T;
  multiplyValue: T;
  calculate(): number {
    return +this.baseValue * +this.multiplyValue; // 数値型にキャスト
  }
}

const simpleMath3 = new SimpleMath3();
simpleMath3.baseValue = 10;
// error
// simpleMath3.baseValue = "10";
simpleMath3.multiplyValue = 30;
console.log(simpleMath3.calculate());

// Constraintsは以下のようにも書ける
class SimpleMath4<T extends number | string> {
  baseValue: T;
  multiplyValue: T;
  calculate(): number {
    return +this.baseValue * +this.multiplyValue; // 数値型にキャスト
  }
}

// 型 'boolean' は制約 'string | number' を満たしていません。
// const simpleMath4 = new SimpleMath4<boolean>();
const simpleMath4 = new SimpleMath4<number>();
simpleMath4.baseValue = 10;
simpleMath4.multiplyValue = 30;
console.log(simpleMath4.calculate());

// Constraints
class SimpleMath5<T extends number | string, U extends number | string> {
  baseValue: T;
  multiplyValue: U;
  calculate(): number {
    return +this.baseValue * +this.multiplyValue; // 数値型にキャスト
  }
}

const simpleMath5 = new SimpleMath5<string, number>();
simpleMath5.baseValue = "10";
simpleMath5.multiplyValue = 30;
console.log(simpleMath5.calculate());
