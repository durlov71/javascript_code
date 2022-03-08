//Loop
for (let n = 1; n <= 10; n++) {
    console.log("I love my country" + n);
    if (n === 5) {
        break;
    }
}
for (let n = 10; n >= 1; n--) {
    if (n % 2 === 0) {
        continue;
    }
    console.log("I have no friends" + n);
}

//While

let c = 1;
while (c <= 5) {
    console.log("While Loop", c)
    c++;
}

// Do while 
d = 1
do {
    console.log("Do while" + d)
    d++;
} while (d <= 5)