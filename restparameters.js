//REST PARAMETERS

function multiply(...args) { //... args accept all number of arguments as in a array
    console.log(args)
    let mulp = 1;
    for (let x of args) {
        mulp *= x;

    }
    return mulp;


}

console.log(multiply(5, 3, 6, 2, 4, 5));