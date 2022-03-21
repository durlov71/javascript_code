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
        name: name, //according to es6 feature when key & value same we can write only key name like name, age,
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


// <.................Constructor Functions..................>

const User = function(name, age) {
    this.name = name,
        this.age = age,
        this.walk = function() {
            console.log("started walking")
        }

}
const user8 = new User("john", 35);
console.log(user8);