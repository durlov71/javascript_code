let even = 0;
let odd = 0;
console.log("Leap years:")
for (let i = 1800; i <= 2000; i++) {
    if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
        console.log(`leap year: ${i}`)
    }

}