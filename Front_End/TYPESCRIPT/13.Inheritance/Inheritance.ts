class Employee {
    empId: number;
    empName: string;
    dept: string;
    salary: number;

    constructor(empId: number, empName: string, dept: string, salary: number) {
        this.empId = empId;
        this.empName = empName;
        this.dept = dept;
        this.salary = salary;
    }

    newEmp() {
        return `New Employee id is ${this.empId} and Name ${this.empName} is working with ${this.dept}`
    }

    getSalary() {
        return `Salary is ${this.salary}`
    }

}

class Manager extends Employee {

    position: string;

    constructor(empId: number, empName: string, dept: string, salary: number, position: string) {

        super(empId, empName, dept, salary)
        this.position = position;
    }

    getPosition() {
        return `Position is ${this.position}`
    }
}

const emp1 = new Employee(101, "JaiSuriya", "IT", 20000)
const manager1 = new Manager(105, "Harish Kumar", "EEE", 80000, "Quality Manager")

console.log(emp1.newEmp())
console.log(emp1.getSalary())

console.log(manager1.newEmp())
console.log(manager1.getSalary())
console.log(manager1.getPosition())