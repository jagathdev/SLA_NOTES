// 1. Callback => a function that is passed as an argument to another function.
// used to handle asynchronous operations

function add(a, b, callback) {

    const result = a + b + callback

    console.log(result)
}

function mul(x, y) {
    return x * y
}

add(3, 5, mul(4, 5))


