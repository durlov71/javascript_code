// summation of even and odd from 1 to 100
let even = 0;
let odd = 0;

for (let i = 2; i <= 100; i += 2) {
    even += i

}
console.log("Even:", even);
for (let j = 1; j <= 100; j += 2) {
    odd += j;
}
console.log("Odd:", odd);