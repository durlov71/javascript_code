//even or odd
let number = 25;
if (number % 2 === 0) {
    console.log('Even')
} else {
    console.log('Odd')
};

// Switch case
switch (true) {
    case number % 2 === 0:
        console.log('Even number')
        break;
    case number % 2 !== 0:
        console.log('odd number')
        break;
}

// ternary operators
console.log((number % 2 === 0) ? 'this is a Even number' : 'This is a Odd number');