//
// multipication table
let mul = 15;
for (let i = 1; i <= 10; i++) {
    console.log(`${mul} * ${i} = ${mul*i}`)
}
//factorial of a number

let num = 5
let fact = 1;
for (let i = num; i >= 1; i--) {
    fact *= i;
}
console.log(fact)

//divisors of a number

let x = 12
for (let i = 1; i <= x; i++) {
    if (x % i === 0) {
        console.log(`${i} is a divisor of ${x}`)

    }

}

// find the first and last digit of a number
let digit = 1256984;


let lastDigit = digit % 10;
console.log("last Digit", lastDigit);

while (digit >= 10) {
    digit = parseInt(digit / 10);
}

let firstDigit = digit;
console.log("First Digit", firstDigit);

// sum of the  numbers problem 11

let d = 12345645;
let results = 0;


while (d > 0) {
    let lastDigit = d % 10;
    results = results + lastDigit;

    d = parseInt(d / 10);
}

console.log("Sum: ", results);