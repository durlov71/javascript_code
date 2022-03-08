// Our Grading system

//Take a marks 
// 80-100 --> A+
// 70-79 --> A
// 60-69 --> A-
// 50-59 --> B
// 40- 49--> c
// 33-39 --> D
//33>mark --> Fail

mark = 75;

if (mark < 0 || mark > 100) {
    console.log('Invalid Mark')
} else if (mark >= 80 && mark <= 100) {
    console.log('Your Grade is: A+')
} else if (mark >= 70 && mark <= 79) {
    console.log('Your Grade is: A')
} else if (mark >= 60 && mark <= 69) {
    console.log('Your Grade is: A-')
} else if (mark >= 50 && mark <= 59) {
    console.log('Your Grade is: B')
} else if (mark >= 40 && mark <= 49) {
    console.log('Your Grade is: C')
} else if (mark >= 33 && mark <= 39) {
    console.log('Your Grade is: D')
} else {
    console.log('FAIL')
}

// Switch case for equality operator

num = 12300;

switch (true) {
    case num > 0:
        console.log('positive')
        break;

    case num === 0:
        console.log('Zero')
        break;

    case num < 0:
        console.log('Negative')
        break;
}