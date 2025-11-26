// 1. string

// 2. number

// 3. boolean

// 4. array

// let items: string[] = ["pen", "pencil"];
// let marks: number[] = [10, 20, 30];

// 5. object

// let user: { name: string; age: number } = {
//   name: "Raja",
//   age: 22
// };

// 6. union

// let score: number | string = 100;

//  7. interface 

// interface User {
//   name: string;
//   age: number;
// }

//  8. type alias 

// type ID = number | string;
// let userId: ID = 3;

// union + interface + type alias → Highly used in React & TS projects

let myString: string = "String";
let myNumber: number = 23;
let myBoolean: boolean = true;

// myString = myNumber //Type 'number' is not assignable to type 'string'.
// myBoolean = myString //Type 'string' is not assignable to type 'boolean'

console.log(myBoolean, myString)