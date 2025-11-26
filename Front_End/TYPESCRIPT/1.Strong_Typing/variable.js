var data = "i am a string Variable";
console.log(data);
data = 25; //Type 'number' is not assignable to type 'string'.
data = function () {
    console.log("i am a fucntion");
}; //Type '() => void' is not assignable to type 'string'.
