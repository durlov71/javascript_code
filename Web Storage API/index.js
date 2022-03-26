//><><><><><><<>..........LOCAL STORAGE

// localStorage.setItem('name', 'Farabi'); // add to localstorage
// localStorage.setItem('age', '30');
// localStorage.setItem('city', 'Dhaka');

// const age = localStorage.getItem('age')
// console.log(age)

// localStorage.setItem('name', 'Sakib');
// console.log(localStorage.getItem('name'));

// // Removing Item
// localStorage.removeItem('name');
// localStorage.clear();



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> object adding into Local storage
const users = [
    { name: 'Sakib', age: 50 },
    { name: 'Rakib', age: 18 },
    { name: 'Partha', age: 40 },
];

localStorage.setItem('user', JSON.stringify(users));

const getUserFromLS = localStorage.getItem('user');
console.log(JSON.parse(getUserFromLS));

// sessionStorage.setItem('name','sakib')  // same as local storage