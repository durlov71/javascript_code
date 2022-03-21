//  ............ASYNCHRONUS PROGRAMMING..................
console.log('Before');


function fetchUser() {

    setTimeout(() => {
        console.log('Fetching Data from Database');
        return {
            name: "john",
            age: 65
        }

    }, 2000);

}
const result = fetchUser();
console.log(result);

console.log('After');