// var Employee = /** @class */ (function () {
//     function Employee(empId, empName, dept, salary) {
//         this.empId = empId;
//         this.empName = empName;
//         this.dept = dept;
//         this.salary = salary;
//     }
//     Employee.prototype.newEmp = function () {
//         return "New Employee id is ".concat(this.empId, " and Name ").concat(this.empName, " is working with ").concat(this.dept);
//     };
//     Employee.prototype.getSalary = function () {
//         return "Salary is ".concat(this.salary);
//     };
//     return Employee;
// }());
// var Manager = /** @class */ (function () {
//     function Manager(empId, empName, dept, salary, position) {
//         this.empId = empId;
//         this.empName = empName;
//         this.dept = dept;
//         this.salary = salary;
//         this.position = position;
//     }
//     Manager.prototype.newEmp = function () {
//         return "New Employee id is ".concat(this.empId, " and Name ").concat(this.empName, " is working with ").concat(this.dept);
//     };
//     Manager.prototype.getSalary = function () {
//         return "Salary is ".concat(this.salary);
//     };
//     Manager.prototype.getPosition = function () {
//         return "Position is ".concat(this.position);
//     };
//     return Manager;
// }());
// var Emp1 = new Employee(101, "JaiSuriya", "IT", 20000);
// var Manager1 = new Manager(101, "JaiSuriya", "IT", 20000, "Prodection Manager");
// console.log(Emp1.newEmp());
// console.log(Emp1.getSalary());
// console.log(Manager1.newEmp());
// console.log(Manager1.getSalary());
// console.log(Manager1.getPosition());
