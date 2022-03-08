// using if else

let nmbr = 330;
if (nmbr % 5 === 0 && nmbr % 3 === 0) {
    console.log("The number is divisible by 5 and 3")
} else if (nmbr % 5 === 0) {
    console.log("the numer is divisible by 5")
} else if (nmbr % 3 === 0) {
    console.log("the number is divisible by 3")
}

// using case
console.log((nmbr % 5 === 0 && nmbr % 3 === 0) ? "divisible by both 5 and 3" : (nmbr % 5 === 0) ? "Divisible by 5" : (nmbr % 3 === 0) ? "Divisible by 3" : "not divisible");