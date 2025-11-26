var Student = /** @class */ (function () {
    function Student(name, std, section) {
        this.name = name;
        this.std = std;
        this.section = section;
    }
    Student.prototype.getStu = function () {
        return "Student Name is ".concat(this.name, " is ").concat(this.std, "th Standard");
    };
    Student.prototype.getSec = function () {
        return "".concat(this.section, " Section");
    };
    return Student;
}());
// create Instance
var stu1 = new Student("Jagath", 10, "A");
var stu2 = new Student("Suriya", 11, "B");
var stu3 = new Student("Hari", 12, "C");

console.log(stu1.getStu());
console.log(stu3.getSec());
console.log(stu2.getStu());
