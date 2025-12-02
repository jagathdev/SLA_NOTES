// Task 1 – Shallow Copy(Array)
// Create an array and make a shallow copy using:

//  slice()
// Change a value in the copied array and observe the output.

//     Task 2 – Shallow Copy(Object)
// Create an object and make a shallow copy using:
// Object.assign()
// Modify a nested property in the copied object and note what happens to the original.

//     Task 3 – Deep Copy(Array of Objects)
// Create an array that contains multiple objects.
// Make a deep copy using:
// JSON.parse(JSON.stringify())
// Change values in the deep - copied array and show that the original array remains unchanged.

//     Task 4 – Deep Copy(Object with Nested Data)
// Create an object with nested objects and arrays.
// Make a deep copy using:
// structuredClone()
// Modify nested data in the cloned object and compare with the original.

//     Task 5 – Compare All Methods
// Create a large object or array and:

// Do shallow copy with ...spread

// Do deep copy with JSON.parse(JSON.stringify())

// Do deep copy with structuredClone()

// Write the differences you observe about:

// Memory reference

// Output changes

// Nested value behavior

// 1. SHALLOW COPY

// ARRAY COPY METHODS 

// 1. Spread Operator
// const arr =[...arr]

// 2. Slice()
// const copyArr=array.slice()

// 3. concat()
// const copyArr = [].concat(arr)

// 4. Array.from()
// const copyArr = Array.from(arr)

// 5. map()
// const copyArr = array.map(item => item)

// 6.filter()
// const newArr = array.filter(() => true)

// OBJECT COPY METHODS - SHALLOW COPY

// 1. Object.assign({}, nestedObject)
// 2. Spread Operator

const array = [1, 2, 3, 4, 5];
const copyArray = array.slice();

copyArray[2] = 30;

console.log(copyArray);

const nestedArray = [2, 4, 6, [1, 3, 5]];

const concatnestedArray = [].concat(nestedArray)
console.log(concatnestedArray)

concatnestedArray[3][1] = 30;
concatnestedArray[2] = 60;

console.log(concatnestedArray)
console.log(nestedArray)

const nestedCopyArray = nestedArray.slice();

nestedCopyArray[3][2] = 50;
// its also changed original array. because, it's shallowCopy

console.log(nestedCopyArray)

console.log(nestedArray)

let nestedObject = {
    school: {
        private: { teacher: { name: "Hari", age: 25, salary: 30000 } },
        govt: { teacher: { name: "Suriya", age: 25, salary: 25000 } }
    },
    company: {
        emp: { name: "Jagath", age: 23, salary: 20000 },
        emp2: { name: "Hari", age: 28, salary: 40000 }
    }
};

// let nestedCopyObject = { ...nestedObject }
// nestedCopyObject.school.private.teacher.name = "Jai suriya"
// nestedCopyObject.company = { doctor: { doctor: "doctor", salary: "1 lakh" } }

let nestedCopyObject = Object.assign({}, nestedObject)

nestedCopyObject.school.private.teacher.age = 35
nestedCopyObject.company = { doctor: { doctor: "doctor", salary: "1 lakh" } }

console.log("copy", nestedCopyObject)
// i change a value nestedCopyObject but its also change original object. 
// but you change top level values (school,company) its only
//  changed copyNestedArray not affact original array

console.log("original", nestedObject)


// DEEP COPY

// OBJECT COPY METHODS - DEEP COPY
// 1. JSON.parse(JSON.stringify(objName or ArrName))
// 2. structuredClone(objectNameor arrName)

let DeepCopy = [
    { firstName: "Jagath", lastName: "Ratchagan" },
    { dist: "Ranipet", state: "TN" }
];

let copyDeep = JSON.parse(JSON.stringify(DeepCopy))

copyDeep[0].firstName = "V"

console.log("copy Deep", copyDeep)
console.log("original Deep", DeepCopy)

let object = {
    course1: { sub: "java", fee: "40k", frameWork: { name: "SpringBoot" } },
    course2: { sub: "JavaScript", fee: "30k", library: { name: "React" } }
}

const CopyObject = structuredClone(object);

CopyObject.course1.sub = "Python"

console.log(CopyObject)
console.log(object)