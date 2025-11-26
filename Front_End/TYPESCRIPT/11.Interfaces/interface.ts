
interface Data {
    firstName?: String;
    lastName: String;
    middleName: String;
    age?: number
}


function greetUser(user: Data) {
    return `Hello  ${user.middleName} ${user.lastName}`
}

function logUser(user: Data) {
    return `User: ${user.firstName}${user.middleName}${user.lastName}, Age: ${user.age}`
}

const user1 = { firstName: "V", lastName: "Ratchagan", age: 22, middleName: "Jagath" }
const user2 = { middleName: "Jagath", lastName: "Ratchagan" }

console.log(greetUser(user2))