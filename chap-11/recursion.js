function oneToTen(number) {
    if (number > 10) return
    console.log(number)
    oneToTen(number + 1)
        // console.log(number) 10 to 1
}
oneToTen(1);

//factorial
const num = 4;

function fact(number) {
    if (number === 1) return 1
    return number * fact(number - 1)

}
const result = fact(num)

console.log(`Factorial of ${num}: ${result}`);