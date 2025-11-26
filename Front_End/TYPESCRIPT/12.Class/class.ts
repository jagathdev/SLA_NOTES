class Student {
    name: string;
    std: number;
    section: string;

    constructor(name: string, std: number, section: string) {
        this.name = name;
        this.std = std;
        this.section = section;
    }

    getStu() {
        return `Student Name is ${this.name} is ${this.std}th Standard`
    }
    getSec() {
        return `${this.section} Section`
    }
}

// create Instance

let stu1 = new Student("Jagath", 10, "A")
let stu2 = new Student("Suriya", 11, "B")
let stu3 = new Student("Hari", 12, "C")

console.log(stu1.getStu())
console.log(stu3.getSec())
console.log(stu2.getStu())