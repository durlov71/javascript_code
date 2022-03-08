// duplicate numbers
// const numbers = [1, 2, 3, 4, 4, 5, 6, 5]
// const mapping = {};
// for (let x of numbers) {
//     if (mapping[x]) {
//         console.log(`${x} is duplicate`);
//     } else mapping[x] = true;
// }

// const numbers = [1, 2, 3, 4, 4, 5, 6, 5]
// const dnmbr = []
// const mapping = {};
// for (let x of numbers) {
//     if (!mapping[x]) {
//         mapping[x] = true;
//         dnmbr.push(x);
//     }


// }

// console.log(dnmbr)

const numbers = [1, 2, 3, 4, 4, 5, 6, 5]

console.log([...new Set(numbers)]);



// fina all pairs in an array whoose sum equals to given number

const array = [2, 3, 4, 1, 5, 2, 6, 8, 9, 3, 2, 5]
const target = 10;
for (let x = 0; x <= array.length; x++) {
    for (let y = x + 1; y <= array.length; y++) {
        if (array[x] + array[y] === target)
            console.log(array[x], array[y]);
    }

}


//problem: Reverse string 

const str = 'Hello World';
let reverseStr = '';

for (let index = str.length - 1; index >= 0; index--) {
    reverseStr += str[index];
}
console.log(`Reverse String: ${reverseStr}`)

// way 2 for reversing order
// const str = 'Hello World';
// const arrayStr = str.split('').reverse().join('')
// console.log(arrayStr);



// Reverse each word 

const str1 = 'Hello World';
const str2 = str1.split(' ').map(word => word.split('').reverse().join(''))
console.log(str2.join(" "))
    // let reverseWords = [];
    // for (let word of str2) {
    //     reverseWords.push(word.split('').reverse().join(''))
    // }
    // console.log(`Reverse Each Word: ${reverseWords.join()}`);