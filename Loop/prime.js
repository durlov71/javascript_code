// check wheather its a prime or not


/*let numbers = 10;
let isPrime = true;
for (let i = 2; i <= numbers - 1; i++) {
    if (numbers % i === 0) {
        isPrime = false;
        break;
    }
}
if (isPrime) {
    console.log('Prime');
} else {
    console.log('Not a Prime Number')
}*/

//check how many prime numbers between 10 to 20

for (let j = 10; j <= 20; j++) {
    isPrime = true;
    for (let i = 2; i <= j - 1; i++) {
        if (j % i === 0) {
            isPrime = false;
            break;
        }

    }
    if (isPrime)
        console.log("prime number:", j)
    else {
        console.log(j)
    }
}