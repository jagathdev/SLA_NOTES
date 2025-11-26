// this => Referance to the object where THIS is used (the object depends
// on the immediate context) person.name=this.name

// arrowfunction THIS is see in a window object

const person = {
    firstName: "Jai",
    lastName: "Suriya",
    age: 23,
    info: function () { return `I am ${this.firstName} ${this.lastName}. My Age is ${person.age}` }
};

console.log(person.info())

console.log(this) //window object

// Constructor = special method for defining the properties and methods of objects

function Car(company, model, year, color) {
    this.company = company;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = function () {
        return `you drive the ${this.model}`
    }
};

const car1 = new Car("ford", "mustang", "2020", "red") //create a new object

console.log(car1)
console.log(car1.model, car1.color)
console.log(car1.drive())

// Class => ES6 feature provides a more structured and cleaner way to work with
// objects compared to traditional constructor functions
// ex. static keyword,encapsulation,inheritance

class Product {

    constructor(productName, productPrice) {
        this.productName = productName;
        this.productPrice = productPrice;
    }

    displayProduct() {
        console.log(`Product Name: ${this.productName}`);
        console.log(`Product Price: ${this.productPrice}`)
    }

    calcProduct(salesTax) {
        return this.productPrice + (this.productPrice * salesTax)
    }
}
const salesTax = 0.05

const product1 = new Product("shirt", 25.00)
const product2 = new Product("phant", 28.00)

product1.displayProduct()
product2.calcProduct()



const total = product1.calcProduct(salesTax);
console.log(`Total Price ${total}`)

// Static => keyword that defines properties or methods that belong to a class itself
//  rather than the objects created form that class (class owns anything static,not the objects)

class mathFun {
    static PI = 3.14159

    static getDiameter(radius) {
        return 2 * this.PI * radius;
    }

}

console.log(mathFun.getDiameter(32))

// Inheritance =>allows a new class to inherit properties and methods from an existing
// class (parent->child) helps with code resuability

// 👉 Common things (properties + methods) are kept in a Parent class
// 👉 Child classes use it again using extends keyword

class Animal {
    alive = true

    eat() {
        console.log(`${this.name} is eating`)
    }

    sleep() {
        console.log(`${this.name} is sleeping`)
    }
}

class Rat extends Animal {
    name = "rat"
    run() {
        console.log(`${this.name} is running`)
    }
}

class Dog extends Animal {
    name = "dog"
}

class Fish extends Animal {
    name = "fish"
    swim() {
        console.log(`${this.name} is swining`)
    };
}

const rat = new Rat();
rat.eat()
rat.sleep()
rat.run()

const fish = new Fish();
fish.eat()
fish.sleep()
fish.swim()


// Super => keyword is used in classes to call the constructor or access the properties and
// methods of a parent(superClass)

// this = this Object
// super= the parent

class Animals {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    move() {
        console.log(`The Animal name is ${this.name}. its age is ${this.age}. run speed is ${this.runspeed}`)
    }
}

class Rabbit extends Animals {
    constructor(name, age, runspeed) {
        // this.name = name;
        // this.age = age;
        super(name, age)
        this.runspeed = runspeed;
    }
    run() {
        console.log(`Run Speed is : ${this.runspeed}`)
    }
}

class CatFish extends Animals {
    constructor(name, age, swimspeed) {
        // this.name = name;
        // this.ag = age;
        super(name, age)
        this.swimspeed = swimspeed;
    }
}

const rabbit = new Rabbit("rabbit", 3, "5 km/hr")
const catFish = new CatFish("cat", 5, "7 km/hr")
console.log(rabbit)
console.log(rabbit.name)
rabbit.move()
rabbit.run()

console.log(catFish)
console.log(catFish.swimspeed)
catFish.move()