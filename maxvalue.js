// Arrow function
const maxValue = (...find) => {
    max = -1;
    for (let x of find) {
        if (x > max) {
            max = x;
        }

    }
    return max;

}
console.log(maxValue(12, 155, 15, 77, 88, 99, 255, 200, 99, 55, 36));