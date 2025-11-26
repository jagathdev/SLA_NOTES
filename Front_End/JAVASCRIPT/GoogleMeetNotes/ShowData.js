fetch("https://gorest.co.in/public/v2/users")
    .then((value) => value.json())
    .then((data) => web(data))

    .catch(error => console.error(Error))


function web(data) {

    //    data.map((e)=>{
    //     console.log(e.name)
    //             return datas.innerHTML = `<h1>${e.name}</h1>`

    //    })

    for (let a = 0; a <= 10; a++) {
        console.log(a)
        datas.innerHTML += data[a].name

    }
}