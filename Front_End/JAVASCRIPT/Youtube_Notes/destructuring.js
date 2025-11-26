// Destructuring => extract values from  arrays and objects, then assign them to
// variables on tha convenient way

// [] => to perform array destructuring
// {} => to perform object destructuring

// swap elements 

const colors = ["red", "green", "blue", "black"];

[colors[0], colors[3]] = [colors[3], colors[0]]

console.log(colors)

// Assign variables

const [a, b, c, ...balance] = colors;

console.log(a)
console.log(b)
console.log(c)
console.log(balance)

// const number = [0, 1, 2, 3, 4]

// [number[1], number[2]] = [number[2], number[1]]

// console.log(number)

const number = [0, 1, 2, 3, 4];

[number[1], number[2]] = [number[3], number[1]];

console.log(number);

// Object destructuring

const person1 = {
    firstName: "jagath",
    lastName: "Ratchagan",
    age: 23,
    job: "IT"
}
const person2 = {
    firstName: "jai",
    lastName: "suriya",
    age: 24,
}

const { firstName, lastName, age, job = "unemployee" } = person1;
// job = free its a default value 
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

// function Destructuring

function displayPerson({ firstName, lastName, age, job = "unemployee" }) {
    console.log(firstName)
    console.log(lastName)
    console.log(age)
    console.log(job)
}

displayPerson(person2)