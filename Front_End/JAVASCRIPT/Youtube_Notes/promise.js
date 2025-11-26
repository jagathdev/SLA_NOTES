// Promise => an object that manages asynchoronous operations.wrap a Promise object
// around {asynchronous code} "I promise to return a value"

// PENDING ---> RESOLVED or REJECTED
//  New Promise((resolve,reject)=>{asynchorous code})


function walkDog() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const dogWalked = true;
            if (dogWalked) {
                resolve("You Are Walking To A Dog")
            }
            else {
                reject("Dog is not walked")

            }
        }, 3000)
    })

}

function cleanKitchen() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const clean = true;

            if (clean) {
                resolve("I Only clean a kitchen")
            }
            else {
                reject("Kitchen is not cleaned")
            }

        }, 5000)
    })

}

function takeouttrash() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const trush = false;
            if (trush) {
                resolve("I throw a trash in dustBin")
            }
            else {
                reject("Dust bin not available")
            }
        }, 500)
    })
}

// walkDog().then((value) => { console.log(value); return cleanKitchen() })
//     .then((value) => { console.log(value); return takeouttrash() })
//     .then((value) => { console.log(value) })
//     .catch(err => console.error(err));

// async/await => Async= makes a function return a promise
//   Await =makes an async function wait for a promise

// Allows you write asynchonous code in a synchoronous manner Async doesn't have
// resolve or reject parameters everrything afterr Await is placed in an event queue 

async function getResult() {
    try {
        const walkDogResult = await walkDog();
        console.log(walkDogResult)

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult)

        const takeouttrashResult = await takeouttrash();
        console.log(takeouttrashResult)
    }
    catch (err) {
        console.error(err)
    }
}
getResult()
