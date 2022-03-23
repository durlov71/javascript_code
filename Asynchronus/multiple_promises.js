//  ...............Dealing with multiple promises........



const promise1 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        // reject(new Error('error!!!!'))
        resolve(1)
    }, 2000)
})

const promise2 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve(2)
    }, 5000)
})

Promise.all([promise1, promise2]).then(function(result) { /// another method Promise.race()
        console.log(result);
    })
    //when we got error
    // .catch(function(err) {   
    //     console.log(err);
    // })




//...................................ASYNC & AWAIT...........................................................


// fechUser(123).then((user) => {
//     console.log(user);
//     sendMail(user.email).then((response) => console.log(response))
// });

async function dbInfo() {

    try {
        const user = await fechUser(123);
        const response = await sendMail(user.mail);
        console.log(response);

    } catch (err) {
        console.log(err)

    }


}
dbInfo()





function sendMail(userMail) {
    const promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log(`sending mail to: ${userMail}`);
            const response = { success: true };
            resolve(response)
                // reject(new Error("Big Error!!!!!"))
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