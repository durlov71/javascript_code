// pattern
let value = "";
for (let x = 1; x <= 5; x++) {
    value = value + "*";
    console.log(value)

}

// patern 2

for (let row = 5; row >= 1; row--) {
    let stars = '';
    for (let col = 1; col <= row; col++) {
        stars = stars + '*';
    }
    console.log(stars);
}

//pattern 3
for (let row = 1; row <= 6; row++) {
    let star = '';
    for (let space = 1; space <= 6 - row; space++) {
        star = star + ' '
    }
    for (let col = 1; col <= row; col++) {
        star = star + "*";
    }
    console.log(star);
}