// If else condition

let x = 125;
if (x >= 100 && x <= 200) {
    if (x % 2 === 0) {
        console.log("Number is even and it is in between 100 & 200")
    } else {
        console.log("Number is Odd and it is in between 100 & 200")
    }
} else {
    console.log("Condition not Fulfilled")
}

// using ternary 
console.log((x >= 100 && x <= 200) ? (x % 2 === 0) ? "number is even and it is in between 100 & 200" : "number is Odd and it is in between 100 & 200" : "Condition Not Fulfilled");

// case 

switch (true) {
    case (x >= 100 && x <= 200):
        {
            switch (true) {
                case (x % 2 === 0):
                    {
                        console.log("even");
                        break;
                    }
                default:
                    {
                        console.log("Odd")
                        break;
                    }
            }

        }
        break;
    default:
        console.log("Not Fulfilled");
        break;
}