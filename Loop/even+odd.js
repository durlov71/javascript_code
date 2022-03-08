// even odd problem solved in for loop

for (let i = 2; i <= 10; i += 2) {
    console.log(i, "Even Number");
}

for (let i = 1; i <= 10; i += 2) {
    console.log(i, "Odd Number");
}

// som of all number in array

let numbers = [10, 20, 30, 40, 55, 60, 75, 80];
let sum = 0;
for (let x of numbers) {
    sum = sum + x;
    console.log(sum);
}
console.log(sum);