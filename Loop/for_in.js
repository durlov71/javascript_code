//for...in
//use for traverse of object or arrays key value 

//for objectss--> for(let key in obj)
//for arrays ==> for(let index in numbers)

const car = {
    name: 'Toyota',
    color: 'red',
    year: 2017,
}
for (let key in car) {
    console.log(key, car[key])
}
let number = [1, 2, 9, 5]
for (let index in number) {
    console.log(number, number[index])

}
for (x of number) {
    console.log(x)
}