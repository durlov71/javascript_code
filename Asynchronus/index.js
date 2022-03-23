//  ............ASYNCHRONUS PROGRAMMING..................
// console.log('Before');


// function fetchUser() {

//     setTimeout(() => {
//         console.log('Fetching Data from Database');
//         return {
//             name: "john",
//             age: 65
//         }

//     }, 2000);

// }
// const result = fetchUser();
// console.log(result);

// console.log('After');
-


//.................CALLBACK...................................................

// fechUser(123, function(user) {
//     console.log(user);
// });

// function fechUser(userID, callback) {

//     setTimeout(() => {
//         console.log('Fetching Data from DB');
//         const fetchedUser = {
//             id: userID,
//             name: "john",
//             age: 65
//         }
//         callback(fetchedUser);

//     }, 2000);

// }


//................................................................................... sending mail callback

fechUser(123, function(user) {
    console.log(user);
    sendMail(user.email, function(response) {
        console.log(response);
    });
});

function sendMail(userMail, callback) {
    setTimeout(function() {
        console.log(`sending mail to: ${userMail}`);
        const response = { success: true }
        callback(response);
    }, 2000);

}

function fechUser(userID, callback) {

    setTimeout(() => {
        console.log('Fetching Data from DB');
        const fetchedUser = {
            id: userID,
            name: "john",
            email: "john@gmail.com",
            age: 65
        }
        callback(fetchedUser);

    }, 2000);

}



//......................................................................PRACTICE................................

// fetchUser(123, function(user) {
//     console.log(user);

//     sendMail(user.email, function(response) {
//         console.log(response)
//     });
// });



// function sendMail(user, callback) {
//     setTimeout(function() {

//         console.log("sending email admin to user");
//         const response = user.email = true;
//         callback(response)
//     }, 2000);

// }

// function fetchUser(userId, callback) {
//     setTimeout(function() {
//         const fetchedUser = {
//             id: userId,
//             name: 'mafia',
//             email: 'mafia@gmail.com',
//         }
//         callback(fetchedUser)
//     }, 2000)
// }