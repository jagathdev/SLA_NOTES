// import cardimg from "./../../../../Project/Blood_Donation/Assets/Photos/Blood-camp-1.jpg"

let cardData = [
    { id: 1, product: "shirt", price: 1000, discount: 5 },
    { id: 2, product: "phant", price: 2000, discount: 8 },
    { id: 3, product: "Tshirt", price: 1500, discount: 15 },
    { id: 4, product: "jeans", price: 3000, discount: 5 }
];

const card = document.getElementById("card")



cardData.forEach((e) => {

    const div = document.createElement("div")

    const discount = e.price * e.discount / 100

    const total = e.price - discount

    card.innerHTML += `
    <div>
<h4>Product Name: ${e.product}</h4>
<p>Price: ${e.price}</p>
<p>Discount: ${discount}</p>
<p>Total Price: ${total}</p>
</div>
`
})
