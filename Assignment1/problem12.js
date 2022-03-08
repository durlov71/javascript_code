// alphabet ,digit,special character

let d = "*";
if (d >= 'a' && d <= 'z' || d >= 'A' && d <= 'Z') {
    console.log("This is a Character")
} else if (d >= '0' && d <= '9') {
    console.log("this is a Digit ")
} else {
    console.log("This is a special character")
}
// How may digits in a number
let num;
num = 1560;
console.log((num <= 100000) ? (num.toString().length) : ("input number isnt valid"));

// leap year

let years = 2025;
if ((years % 4 === 0 && years % 100 !== 0) || (years % 400 === 0)) {
    console.log("is a leap year")
} else {
    console.log("not a leap year")
}


//problem-->15

let distance = 40;

console.log((distance <= 100) ? "120" : (distance > 100 && distance <= 200) ? "200" : (distance > 200 && distance <= 300) ? "300" : "Not Interested");

// problem-->16
//triangle

let a = 10,
    b = 10,
    c1 = 30;
if (a + b > c1 || a + c1 > b || b + c1 > a) {
    console.log("possible to get a triangle")
} else {
    console.log("not possible")
}