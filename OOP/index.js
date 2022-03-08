// Factory Functions

// const user1 = {
//     name: "john",
//     age: 47,
//     walk: function() {
//         console.log("He is walking")
//     },
// };
// const user2 = {
//     name: "john",
//     age: 47,
//     walk: function() {
//         console.log("He is walking")
//     },
// };
// console.log(user1)
// console.log(user1)


//we want reuse code thats why we use factory functions

const user = (name, age) => {
    const userObj = {
        name: name,
        age: age,
        walk: function() {
            console.log("He is walking")
        },
    };
    return userObj;
};
const user1 = user("jahid", 26);
const user2 = user("kanto", 27);

console.log(user1)
console.log(user2)