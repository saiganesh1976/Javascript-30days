// Control Statements


// Simple If statement
if (10) {
    console.log("True");
}

// If..else

let age = 18;

if (age >= 18) {
    console.log("Continue to login...");
}
else {
    console.log("your are not allowed to Login!!");
}

// Nested If..else

let a = 10;
let b = 20;
let c = 30;

if (a > b && a > c) {
    console.log(`${a} is Greater Number`);
}
else if (b > a && b > c) {
    console.log(`${b} is Greater Number`);
}
else {
    console.log(`${c} is Greater Number`);
}


// Switch case

let day = 1

switch (day) {
    case 1:
        day = "Sunday";
        break;
    case 2:
        day = "Monday";
        break;
    case 3:
        day = "Tuesday";
        break;
    case 4:
        day = "Wednesday";
        break;
    case 5:
        day = "Thursday";
        break;
    case 6:
        day = "Friday";
        break;
    case 7:
        day = "Saturday";
        break;
    default: "No a day"
}
console.log(day);


// Terninary/ Conditional Operator

let Number = 10;

let result = (Number % 2 == 0) ? console.log(`${Number} is Even Number`) : console.log(`${Number} is an Odd Number`);;

// ToDo: check if the given year is a leap year or not

let year = 3000

if (year % 4 == 0) {        // Divisible by 4
    if (year % 100 == 0) {      // Leap year is not divisible by 100 untile it is divisible by 400
        if (year % 400 == 0) {
            console.log(`${year} is a Leap year`);
        }
        else {
            console.log(`${year} is not a Leap year`);
        }
    }
    else {
        console.log(`${year} is a Leap year`);
    }
}
else {
    console.log(`${year} is not a Leap year`);
}