// find max number

let a = 256;
let b = 430;

if (a > b) {
    console.log("max = ", a);
    console.log("min = ", b);
} else {
    console.log("max = ", b);
    console.log("min = ", a);
}



//ternary operators
console.log((a > b) ? `max nmbr is ${a}  min nmbr is ${b}` : `max nmbr is ${b}  min nmbr is ${a}`);

//case

switch (true) {
    case a > b:
        console.log("maximum number is " + a);
        console.log("minimum number is " + b);
        break;
    default:
        console.log("maximum number is " + b)
        console.log("minimum number is " + a)
        break;

}