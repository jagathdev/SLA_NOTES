// Nested Object => object insode of the other objects

class Person {
    constructor(name, age, ...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address {
    constructor(street, city, state, country) {
        this.street = street;
        this.city = city;
        this.state = state;
        this.country = country;

    }
}

const person1 = new Person("jagath", 23, "bigstreet", "shr", "tn", "india");

console.log(person1.address)

// Array of Objects

const students = [
    { name: "jagath", class: "A", age: 17, mark: 87 },
    { name: "hari", class: "B", age: 14, mark: 78 },
    { name: "suriya", class: "A", age: 19, mark: 97 },
    { name: "Gokul", class: "B", age: 16, mark: 89 }
];

// console.log(students)

// students.push({ name: "karthi", class: "C", age: 19, mark: 88 }) // add last element

// students.pop() // remove last element

// students.splice(1, 2) // index 1 to index1,2 remove

// reduce Method
const total = students.reduce((accumulator, element) => {
    return accumulator + element.mark
}, 0)
console.log(total)

const maxMark = students.reduce((max, element) => {
    return element.mark > max ? element.mark : max
}, 0)

console.log(maxMark)

// sort Method => used to sort elements of an array in place

let fruits = ['banana', 'apple', 'orange', 'mango', 'greaps']
let numbers = [1, 2, 455, 7867, 99, 79, 78, 8]

fruits.sort()
numbers.sort((a, b) => b - a) //desending order
numbers.sort((a, b) => a - b) //assending order

console.log(numbers)
console.log(fruits)


// closure =>  a function defined inside of another function. the inner function has
// access to the vaiables and scope of the outer function

// Allow for private variables and state maintanance used frequently in js frameworks
// React,Vue,Angular

function outer() {
    const messge = "Hello World"

    function inner() {
        console.log(messge)
    }

    inner()
}

outer()

// console.log(message) // output->undefined its a befefit every variable is a private dont access outside of the function

function createCounter() {
    let count = 0;

    function counter() {
        count++;
        console.log(count)
    }
    return counter
}

const result = createCounter()
result()
result()
result() 

