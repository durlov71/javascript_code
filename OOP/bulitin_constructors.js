const str1 = "hello world"; // string
const str2 = new String("hello world"); //string constructor

console.log(str1);
console.log(str2);

// number 
let num1 = 65;
let num2 = new Number(65);
console.log(num1);
console.log(num2);


//boolean
let isValid = true;
let isValid1 = new Boolean(true);


//Array
const frnds = ["Asif", "sakib", "Justin"];
const frnds1 = new Array("Asif", "sakib", "Justin");
console.log(frnds);
console.log(frnds1);



//function

const sum = function(num1, num2) {
    return num1 + num2;
}
const sum2 = new Function("num1", "num2", "return num1+num2")

console.log(sum(5, 2));
console.log(sum2(10, 15));


//object

const user = {
    name: "john",
    age: 65,
}
const user1 = new Object({
    name: "Marry",
    age: 60,
})

console.log(user);
console.log(user1);