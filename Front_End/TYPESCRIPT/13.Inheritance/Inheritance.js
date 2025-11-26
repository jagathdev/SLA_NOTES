var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(empId, empName, dept, salary) {
        this.empId = empId;
        this.empName = empName;
        this.dept = dept;
        this.salary = salary;
    }
    Employee.prototype.newEmp = function () {
        return "New Employee id is ".concat(this.empId, " and Name ").concat(this.empName, " is working with ").concat(this.dept);
    };
    Employee.prototype.getSalary = function () {
        return "Salary is ".concat(this.salary);
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(empId, empName, dept, salary, position) {
        var _this = _super.call(this, empId, empName, dept, salary) || this;
        _this.position = position;
        return _this;
    }
    Manager.prototype.getPosition = function () {
        return "Position is ".concat(this.position);
    };
    return Manager;
}(Employee));
var emp1 = new Employee(101, "JaiSuriya", "IT", 20000);
var manager1 = new Manager(105, "Harish Kumar", "EEE", 80000, "Quality Manager");
console.log(emp1.newEmp());
console.log(emp1.getSalary());
console.log(manager1.newEmp());
console.log(manager1.getSalary());
console.log(manager1.getPosition());
