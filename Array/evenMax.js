// problem Even max

let num = [111, 123, 122, 130, 150, 151]
max = -1;
for (let x of num) {
    if (x % 2 === 0) {
        if (max < x) {
            max = x;
        }
    }
}
console.log(max);

const onlyEven = num.filter((even) => even % 2 === 0).reduce((maxEven, evens) => maxEven < evens ? maxEven = evens : maxEven, -1)
console.log(onlyEven)

// console.log(Math.max(...onlyEven));