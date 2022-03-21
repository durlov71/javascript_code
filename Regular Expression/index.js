// REGULAR EXPRESSION
const regExp = /hello/i; // i means case insensitive; g means globally
console.log(regExp.test('Hello world'));


// REGULAR EXPRESSIONS modifier and object methods

console.log(regExp); //output: full regular expression 
console.log(regExp.source); // output: regular expression msg print
console.log(regExp.exec("Hi, Hello there")); //output: matched pattern ,first index of matched pattern, groups


const reg_exp = /there/ig;
let str = "HI, hello there there there";

console.log(str.match(reg_exp)); //output: matched pattern ,first index of matched pattern, groups same as exec()
console.log(str.search(reg_exp)); // output will given a index number of first matched letter;
console.log(str.replace(reg_exp, "World")); // replaced from there ==> world