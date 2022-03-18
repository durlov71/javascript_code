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