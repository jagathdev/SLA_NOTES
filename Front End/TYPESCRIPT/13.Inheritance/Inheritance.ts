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
