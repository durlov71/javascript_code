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



//.................CALLBACK...................................................

fechUser(123, function(user) {
    console.log(user);
});

function fechUser(userID, callback) {

    setTimeout(() => {
        console.log('Fetching Data from DB');
        const fetchedUser = {
            id: userID,
            name: "john",
            age: 65
        }
        callback(fetchedUser);

    }, 2000);

}