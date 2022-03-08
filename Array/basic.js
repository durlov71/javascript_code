// array
let friends = ['F1', 'F2', 'F3', 'F4', 'F5']
console.log(friends);
console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);

// insert in an array
const numbers = [12, 13, 14, 15, 18];
numbers.unshift(9, 10, 11) // add some numbers at First of this array
console.log(numbers);
numbers.push(19, 20); // add some numbers at Last of this array
console.log(numbers)
numbers.splice(7, 0, 16, 17) // add some numbers at middlee of this array
console.log(numbers);