//Objects methods this keywords

const user = {
    name: 'Boond',
    age: 48,
    isMarried: true,
    selectedColor: null,
    calculateAge: function() {
        console.log('your calculated age is 48')
        console.log(`your calculated age is ${this.age}`);
    }
}
user.calculateAge();

// 
const person = {
        name: "James",
        age: 50,
        gender: "Male",
        email: "john@gmail.com",
        phone: "01515454879"
    }
    // traversing way 1
for (let x in person) {
    console.log(x, person[x]);
}
//way 2 for traversing
console.log(Object.keys(person));
console.log(Object.values(person));

for (let y of Object.keys(person)) {
    console.log(y);
}
for (let z of Object.values(person)) {
    console.log(z);
}