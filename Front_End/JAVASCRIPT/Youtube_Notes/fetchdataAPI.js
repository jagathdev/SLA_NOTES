// JSON => Javascript Object Notation data- interchange format used for exchanging data
// between a server and a web application Json files {key:value} OR [value1,value2,value3]

// JSON.stringify()= converts a js object to a JSON string
// JSON.parse()=converts a JSON string to a JS Object

// fetch("https://api.chucknorris.io/jokes/random").then((res) => {

//     if (res.status === 200) {
//         return res.json().then((value) => { console.log(value.value) })
//             .catch((err) => { console.error(err) })
//     }
// })

fetch("https://api.chucknorris.io/jokes/random").then((res) => {
    return res.json().then((e) => { console.log(e.value) }).catch((err) => { console.error(err) })
})


let arr1 = [1, 2, 3]
let arr2 = [3, 4, 5]

arr1.map((e) => {
    console.log(arr2.push(e))
})

console.log(arr2)










