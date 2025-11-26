// classList => ELement property in javascript used to intract with an element's list of
// classes (css classes) allows you to make reusable classes for many elements across your webpage
// add(),remove(),toggle()=>remove if present,add if not,
// replace(oldClass,newClass),contains()

const button = document.getElementById("classList");

// add Class
button.addEventListener("click", (event) => {
    event.target.classList.add("newClass")
});

// replace Class
// button.addEventListener("click", (event) => {
//     event.target.classList.add("newClass", "newClass1")
// });

// Toggle class

// button.addEventListener("click", (event) => {
//     event.target.classList.toggle("newClass")
// });

// // contains()

// button.addEventListener("click", (event) => {
//     if (event.target.classList.contains("newClass")) {
//         event.target.classList.remove("newClass")
//     }
//     else {
//         event.target.classList.add("newClass1")
//     }
// });