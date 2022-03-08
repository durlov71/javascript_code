//Object destructuring

const user = {
    name: "John",
    age: 50,
    country: "India",
    adress: {
        city: "Dhaka",
        district: "Dhaka",
        country: "bangladesh",
    }
}
console.log(user.age);
console.log(user.name);
console.log(user.adress);

console.log(user.adress.city);


// we can use destructuring

const { name, age, country, adress } = user;
const { city, district, country: Region } = adress; // here we got same name thats why we renamed country as region in adress object

console.log(Region)