// Functions


// function Declaration

function greet() {
    console.log("Hello There!! Welcome");
}
greet(); // Function Calling


/** TASK **/

// ToDo: Check if the given Number is Even or Odd

function checkNum(num) {
    if (num % 2 == 0) {
        return `${num} is an Even Number`
    }
    return `${num} is an Odd Number`
}
let num = 20
let result = checkNum(num)
console.log(result);

// ToDo: Return the square of the given Number

function square(num_1) {
    return num_1 * num_1;
}
let num_1 = 8;
let res = square(num_1);
console.log(res);


//  Function Expression

let wishing = function () {
    console.log("I am Fine");
}
wishing();



/** TASK **/

// Concatinate two strings

let concatenate = function (str1, str2) {
    return str1 + str2;
}
let str1 = "Sai"
let str2 = "Ganesh"
let new_str = concatenate(str1, str2)
console.log(`Concatination of "${str1}" and "${str2}" is ${new_str}`);



// Arrow functions

let greeting = () => {
    console.log("Welcome")
}
greeting();

/** TASK **/

// ToDo: Sum of two numbers

let sum = (num1, num2) => {
    return num1 + num2;
}
const val1 = 20;
const val2 = 30;
let value = sum(val1, val2)
console.log(`Sum of "${val1}" and "${val2}" is ${value}`);

// String operations using Functions

let isContain = (str) => {
    if (str.includes('a')) {
        return true;
    }
    return false;
}
if (isContain("SaiGanesh")) {
    console.log("YES");
}
else {
    console.log("NO");
}

// ToDo: Greeting a Person

let Greeting = (name, wish = "Good Evening") => {
    console.log(`${wish}!! ${name}`);
}
Greeting('SaiGanesh', "Good Morning");



// IIFE --> Immediately Invoked Function Expression

(function () {
    console.log("Hello, I'am SaiGanesh");
})();



// Higher Order Function

// MAP(), Reduce(), Filter()

let list = [1, 2, 3, 4, 5]
let squares = list.map((num) => {
    return num * num;
})
console.log(squares);

// --> CHECK: forEach() vs MAP()
let cubes = list.forEach((num) => {
    return num * 3;
})
console.log(cubes); // undefined --> it doesnot return any newArray..

let cubes_1 = list.forEach((num) => {
    console.log(num * 3);
})

let even = list.filter((num) => {
    return num % 2 == 0;
})
console.log(even);

let product = list.reduce((pro, num) => {
    return pro * num;
})
console.log(product);
