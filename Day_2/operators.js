// Arithematic Operators
let num1 = 10
let num2 = 20

let addition = num1 + num2
console.log(addition);

let subtraction = num1 - num2
console.log(subtraction);

let Division = num1 / num2
console.log(Division);

let Multiplication = num1 * num2
console.log(Multiplication);

let reminder = num1 % num2
console.log(reminder);


// Assignment Operators

let num_1 = 10
num_1 += 20
console.log(num_1); // 30

let num_2 = 50
num_2 -= 20
console.log(num_2); // 30

// Comparison

let number_1 = 100
let number_2 = 200
console.log(number_1 > number_2);    // False
console.log(number_1 < number_2);    // True
console.log(number_1 != number_2);    // True

let value_1 = 100
let value_2 = "100"
console.log(value_1 == value_2);    // true
console.log(value_1 === value_2);    // False

// let personAge=20
let personAge = 18

if (personAge >= 18) {
    console.log("Adult");
}
else {
    console.log("Teen")
}

// Terinary Operator

// a > b ? a : b
let val = 200 > 100 ? 200 : 100;
console.log(val); // 200