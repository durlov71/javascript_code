// const doctors = [
//     { name: "john", age: 20 },
//     { name: "afridi", age: 22 },
//     { name: "kohli", age: 25 },
//     { name: "Alam", age: 35 },
// ];
// const result = doctors.find(function(doc) {
//     return doc.name === "john";
// });
// console.log(result);


// const doctors = [
//     { name: "john", age: 20 },
//     { name: "afridi", age: 22 },
//     { name: "kohli", age: 25 },
//     { name: "Alam", age: 35 },
// ];
// const result = doctors.find(function(doc) {
//     return doc.age > 20;
// });
// console.log(result);


const doctors = [
    { name: "john", age: 20 },
    { name: "afridi", age: 22 },
    { name: "kohli", age: 25 },
    { name: "Alam", age: 35 },
];

console.log(doctors.findIndex((doc) => doc.age > 22)); // arrow function


const doc = [
    { name: "jami", age: 20 },
    { name: "afridi", age: 19 },
    { name: "asif", age: 25 },
    { name: "Justin", age: 27 },
];
console.log(doc.find((doc) => doc.name === "asif"));

//Arrray Traverse
const numbers = [1, 2, 3, 4, 5, 7];

// way1
for (index = 0; index < numbers.length; index++) {
    console.log(index, numbers[index]);
}
// way2
for (let num of numbers) {
    console.log(num);
}
// way3
numbers.forEach((index, num) => console.log(index, num));



// ascending and descending array

const x = [5, 3, 4, 2, 1, 10];
console.log(x.sort()); //there is a problem. firstly this sort converted to string then its do. thats why 10 stands before 2.
// numbers.reverse();
x.sort((d1, d2) => d1 - d2);
console.log(x);

const doctor = [
    { name: "john", age: 46 },
    { name: "Marry", age: 32 },
];
doctor.sort(function(d1, d2) {
        return (d1.age - d2.age)
            // if (d1.age > d2.age) return +1
            // if (d1.age === d2.age) return 0
            // if (d1.age < d2.age) return -1
    })
    // .reverse();
console.log(doctor);

// Array Methood: every, some

const m = [1, 2, 3, 5, -7, 9, 10];

const res = m.every((num) => num > 0); //  arrowfunction
console.log(res);

// Array Methood: concat slice

const a = [1, 2, 3]
const b = [4, 5, 6]
const Combinedarray = a.concat(b);
console.log(Combinedarray);

const d = [1, 2, 3, 4, 5, 6]

const slicearray = d.slice(2, 5);
console.log(slicearray);


// speread operators

num1 = [1, 2, 3, 4, 5, 6]
console.log(...num1) //console.log(num1[0],num1[1]);
    //clonning array
const coppiedarray = [...num1];
console.log(coppiedarray);

num2 = [1, 2, 3, ];
num3 = [4, 5, 6];
const num4 = [...num2, ...num3]; //concated
console.log(num4);


// Array join

const numb = [1, 2, 3, 4];
const joinArray = numb.join(""); //array joined with no separator
console.log(joinArray);

const msg = "we are learning java script";
console.log(msg.split(" ").join("-")); //url slug


// ES6 Features Map

let aNum = [1, 2, 3, 4, 5, 6];
// way...1
// let mulByTwo = [];
// for (let b of aNum) {
//     mulByTwo.push(b * 2)
// }
// console.log(mulByTwo);

// way...2

const mulByTwo = aNum.map((b) => b * 2);
console.log(mulByTwo);

//Filter
// As Like map

// Reduce method
const xyz = [10, 20, 30];
const reducedSum = xyz.reduce((sum, c) => sum + c, 0); //Here zero is Intialized of sum;
console.log(reducedSum);


// when we use map,filter ,reduce
const fighters = [
    { name: "Rafi", combatSkill: 80 },
    { name: "Shahin", combatSkill: 70 },
    { name: "farabi", combatSkill: 90 }
]

// problems
// 1. pick theirs name; sol: we use map() As a result of here we got an array whose length and Figthers length are equal;
// 2.pick the fighter whose combatskill greather than equal 80; Sol: here we used Filter() Because output array length<= inputh array length;

// 3. Sum of all combatskills; we use reduce;

// sol of problem 1;
console.log(fighters.map((f) => f.name));
console.log(fighters.filter((f) => f.combatSkill >= 80));
console.log(fighters.reduce((f, n) => f + n.combatSkill, 0));


//object And Array Destructuring

function greeting({ name, age, address: { long, lat } }) {

    console.log(`Hello ${name},you are ${age} years old, Address longitude ${long},latitude ${lat}`)
}
const user = {
    name: "john",
    age: 28,
    address: {
        long: 25.34,
        lat: 32.45
    }
};
greeting(user)