// totalSalary

const salary = {
    john: 2000,
    bond: 5000,
    asik: 6000,
    akash: 10000,
    james: 5500,
};

let sum = 0;
for (let x in salary) {
    console.log(x, salary[x]);
    sum = sum + salary[x];
}
console.log(`Total Salary: ${sum}`);

// another way to calculate total salary
let add = 0;
for (let y of Object.values(salary)) {
    add += y;

}
console.log(add)