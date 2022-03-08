//exercise person object
//properties : name, age, isMarried,homeAddress,friends

let person={
    name:"Istiak",
    age:25,
    isMarried: false,
    homeAddress:{
        lon:12345.4,
        lat:2525.56
    },
    friends:['Sakib','farabi','Shahin','Shuvo']
}
console.log(person);
console.log(person.age);
console.log(person.isMarried);
console.log(person.homeAddress.lon);
console.log(person.friends[2]);