// function datas() {
//     let number = 0;

//     function add() {
//         return number++
//     }
//     add()
// }

// const show = datas()

// console.log(show.add())

const createAcc = () => {
    let balance = 1000; // private variable

    const deposit = (amount) => {
        balance += amount;
        console.log("Balance:", balance);
    }

    const withdraw = (amount) => {
        balance -= amount;
        console.log("Balance:", balance);
    };

    return { deposit, withdraw };
};

const acc = createAcc();
acc.deposit(500);   // can access balance
acc.withdraw(300);
acc.balance = 3000
acc.deposit(100);
