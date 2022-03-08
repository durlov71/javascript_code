// Problem FizzBuzz
// take a number
// if its divisible by 3, print fizz
// if divisible by 5 , print Buzz
//if divisible by 3 and 5 , print FizzBuzz
//otherwise Nothing!!

let number = 10;
if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz")
} else if (number % 3 === 0) {
    console.log("Fizz")
} else if (number % 5 === 0) {
    console.log("Buzz")
} else {
    console.log("NOTHING!!")
}

// solve with Ternary operatoprs
let numb = 10;
console.log((numb % 3 === 0 && numb % 5 === 0) ? 'FizzBuzz' : (numb % 3 === 0) ? 'Fizz' : (numb % 5 === 0) ? 'Buzz' : 'NOTHING!!')


//leap year
// 1. if year divisible by 400 then that year is a leap year
//2. if year divisible by 4 and not divisible by 100 then that year is a leap year

year = 2005;
console.log((year % 400 === 0) ? 'This is a leap year' : (year % 4 === 0 && year % 100 !== 0) ? 'This is a leap year' : 'Not a leap year');