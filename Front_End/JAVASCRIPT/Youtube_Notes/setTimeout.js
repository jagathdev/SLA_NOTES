// setTimeout() => function in javascript that allows you to schedule the execution
// of a function of a function after an amout of time (milliseconds).

// times are approximate(varies based on the workload of the javascript runtime environment)

// clearTimeout() => can cancel a timeout before it triggers

// function sayHello() {
//     alert("Hello")
// }

// setTimeout(sayHello, 3000);

let timeoutId;

function startTimer() {
    timeoutId = setTimeout(() => {
        window.alert("Hello")
    }, 3000)
    console.log("Timeout Function activated")
}  

function clearTimer() {

    clearTimeout(timeoutId);
    console.log("Timeout Function Cleared")
}