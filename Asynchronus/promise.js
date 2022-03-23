//...........................................PROMISE......................

const promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
        reject(new Error('error!!!'))
    }, 2000)
})
console.log(promise);

promise
    .then(function(result) {
        console.log(result)
    })
    .catch(function(err) {
        console.log(err.message)
    })



// ............Replacing callback with promises



// fechUser(123).then(function(user) {
//     console.log(user);
//     sendMail(user.email).then(function(response) {
//         console.log(response)
//     })
// });

fechUser(123).then((user) => {
    console.log(user);
    sendMail(user.email).then((response) => console.log(response))
});



function sendMail(userMail) {
    const promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log(`sending mail to: ${userMail}`);
            const response = { success: true };
            resolve(response)
        }, 2000);
    });
    return promise
}

function fechUser(userID) {
    const promise = new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log('Fetching Data from DB');
            const user = {
                id: userID,
                name: "john",
                email: "john@gmail.com",
                age: 65
            }
            resolve(user);

        }, 2000);

    })
    return promise
}