function greetUser(user) {
    return "Hello  ".concat(user.middleName, " ").concat(user.lastName);
}
function logUser(user) {
    return "User: ".concat(user.firstName).concat(user.middleName).concat(user.lastName, ", Age: ").concat(user.age);
}
var user1 = { firstName: "V", lastName: "Ratchagan", age: 22, middleName: "Jagath" };
var user2 = { middleName: "V", lastName: "Ratchagan" };
console.log(greetUser(user2));
