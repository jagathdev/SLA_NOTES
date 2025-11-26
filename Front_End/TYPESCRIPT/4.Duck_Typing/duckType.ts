// If an object “looks like” a type (has the same structure), 
// TypeScript accepts it — even if it is NOT the same declared type

// if you can reassign a object Typescript need every key (id,name) no extra no reduce 

let employee: { name: string, id: number } = { name: "Suriya", id: 1 };

employee = { id: 2, name: "Jagath" };

employee = { id: 3, name: "Hari", salary: 2000 };

employee = { id: "three", name: "Karthi", }; // id is must number not string

console.log(employee)
