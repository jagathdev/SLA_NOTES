class student {

    constructor(name, rollno, dept) {
        this.name = name;
        this.rollno = rollno;
        this.dept = dept;
    }

}


const displayStudent = function () {

    const stuData = document.getElementById("stuData")
    // const addstuBtn = document.getElementById("addstuBtn")

    stuData.addEventListener("submit", (data) => {

        data.preventDefault();

        const stuName = document.getElementById("stuName").value;
        const rollNo = document.getElementById("rollNo").value;
        const Dept = document.getElementById("Dept").value;
        const stuList = document.getElementById("stuList")

        const student1 = new student(stuName, rollNo, Dept);

        stuList.innerHTML += `
        <div>
                <h4>Student Name :${student1.name}</h4>
                <h4>Student Roll Number :${student1.rollno}</h4>
                <h4>Student Dept :${student1.dept}</h4><br>
        </div>
                `
        const stringStu = JSON.stringify(student1);

        localStorage.setItem("stuData", stringStu)

        console.log(JSON.parse(localStorage.getItem(stuData)))


    })

}


console.log(displayStudent())


