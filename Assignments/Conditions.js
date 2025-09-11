//if Statement

let age = 18;

if (age >= 18) {
    console.log("You are eligible to vote.");
}

//if else statement 

let number = 7;

if (number % 2 === 0) {
    console.log("The number is Even");
} else {
    console.log("The number is Odd");
}

//if else if else statement

let marks = 85;

if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 75) {
    console.log("Grade: B");
} else if (marks >= 50) {
    console.log("Grade: C");
} else {
    console.log("Grade: Fail");
}

//Switch ststement

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}


//Ternary operator

let x = 10;
let y = 20;

let result = (x > y) ? "x is greater" : "y is greater";
console.log(result);
