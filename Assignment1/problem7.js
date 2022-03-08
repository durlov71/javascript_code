// if else
// Weekday

let day = 5;
if (day === 1) {
    console.log("Saturday")
} else if (day === 2) {
    console.log("Sunday")
} else if (day === 3) {
    console.log("Monday")
} else if (day === 4) {
    console.log("tuesday")
} else if (day === 5) {
    console.log("Wednesday")
} else if (day === 6) {
    console.log("Thusday")
} else if (day === 7) {
    console.log("friday")
} else {
    console.log("please input week day from 1 to 7")
}

// use ternary for this problem
let x = 5;
console.log((x === 1) ? "saturday" : (x === 2) ? "Sunday" : (x === 3) ? "Monday" : (x === 4) ? "Tuesday" : (x === 5) ? "Wednesday" : (x === 6) ? "Thusday" : (x === 7) ? "Friday" : "Not a valid input for weekday")