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

//problem: remove all duplicate value of an array


const number = [1, 2, 3, 3, 4, 4, 3, 2, 6, 8, 5];
let set = [...new Set(number)]; // one line solution 
console.log(set);

// way 2 for removing duplicate numbers

const numb = [1, 2, 3, 3, 4, 4, 3, 2, 6, 8, 5];
let uniqueNumber = [];
let mapped = {};
for (let x of numb) {
    if (mapped[x]) {} else {
        mapped[x] = true;
        uniqueNumber.push(x)

    }
}
console.log(uniqueNumber);


//Find all pairs in an array of integers whoose sum is equal to given numers

let integerArray = [1, 2, 3, 4, 5, 6, 7, 8]
const target = 9;

for (let i = 0; i < integerArray.length; i++) {
    for (let j = i + 1; j < integerArray.length; j++) {
        if (integerArray[i] + integerArray[j] === target)
            console.log(integerArray[i], integerArray[j]);
    }
}


//  problem: Reverse a string

const str = 'Hello world';
let reverseStr = '';

for (let index = str.length - 1; index >= 0; index--) {
    reverseStr = reverseStr + str[index];
}
console.log(reverseStr);


// Another solution of this reverse problem
let arrayOfChar = str.split('').reverse().join(''); //firstly we use split method to convert array,then we use reverse method and finally we use join method to convert array to string.
console.log(arrayOfChar);

// reverse word by word

const words = str.split(' ').map((word) => (word.split('').reverse().join(''))).join(' '); // we can traverse every array element by use map()
console.log(words);
// let reversed = [];
// for (let word of words) {
//     reversed.push(word.split('').reverse().join(''))

// }
// console.log(reversed.join(' '));


//  <.................................RECURSION.....................................>

function oneToTen(numb) {
    if (numb > 10) return
    console.log(numb);
    oneToTen(numb + 1);
}
oneToTen(1);

//Ten to One recursively


function tenToOne(numb) {
    if (numb > 10) return

    tenToOne(numb + 1);
    console.log(numb); // here we print after recursive call. here at first all recursive call are called then its started printing backwardly.when we write code after recursive call then it works backwardly;
}
tenToOne(1);

//  <.................................FACTORIAL............................>

function factorial(fac) {
    if (fac === 0) return 1;

    return fac * factorial(fac - 1);
}
console.log(factorial(5));