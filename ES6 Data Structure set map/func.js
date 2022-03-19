import { addition, subtraction } from './math.js'

console.log(addition(10, 20));
console.log(subtraction(30, 18));


//padStart & padEnd

let hour = '7';
let min = '4';
console.log(hour.padStart(2, '0'));
console.log(min.padEnd(2, '0'));

//trimStart & trimEnd
let name = '   john     ';
console.log(name.trim().length);
console.log(name.trimStart().length);
console.log(name.trimEnd().length);


//problem: Find the duplicate value of an array

const numbers = [1, 2, 3, 3, 4, 5];
let mapping = {};
for (let x of numbers) {
    if (mapping[x]) {
        console.log(`${x} is a duplicate number`)
    } else {
        mapping[x] = true;
    }
}