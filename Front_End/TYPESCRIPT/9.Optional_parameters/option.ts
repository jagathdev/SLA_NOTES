// optional perameter you use ? its option
// A function parameter that is not required.
// You can call the function with or without that argument.

const concatString = function (a: string, b: string, c: string) {
    console.log(a + c + b)
}

concatString("jagath", "suriya", "vinoth")
concatString("jagath", "suriya")


const sub = function (a: number, b: number, c?: number) {
    console.log(a - b)
}