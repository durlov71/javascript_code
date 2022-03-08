const user = {
        name: "john",
        age: 25,
    }
    // const copiedUser = {}; //created empty object
    // copiedUser.name = user.name
    // copiedUser.age = user.age
    // console.log(copiedUser)


// const copiedUser = {};

// for (const key in user) {        //way 2
//     console.log(key, user[key])
//     copiedUser[key] = user[key]
// }
// console.log(copiedUser)

// const copiedUser = Object.assign({}, user);
// console.log(copiedUser)

const copiedUser = {...user };

console.log(copiedUser)

// msg = 'jello'
// msg = 'hello'
// msg = msg + 'hi! there'
// console.log(msg)