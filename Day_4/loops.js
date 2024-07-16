// Loops

// for Loop

for (let i = 1; i <= 10; i++) {
    console.log(`5 * ${i} = ` + 5 * i);
}

console.log("\n");


// Nested for Loop

for (let i = 1; i <= 10; i++) {
    row = " "
    for (let j = 1; j <= i; j++) {
        row += "*"
    }
    console.log(row);
}


// while

let sum = 0
let number = 1;
while (number <= 10) {
    sum = sum + number;
    number++;
}
console.log(`\nSum of numbers from 1 to 10 : ${sum}\n`);


// do...While Loop

let num_1 = 1;
let res = 1;
do {
    res = res + num_1;
    num_1++;
} while (num_1 <= 5)

console.log(`\nSum of numbers from 1 to 5 : ${res}\n`);

// For each loop

let nums = [1, 2, 3, 4, 5]

nums.forEach(num => {
    console.log(num);
});


console.log('\n');


// continue --> Skips the current Index Value

let array = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < array.length; i++) {
    if (array[i] == 4) {
        continue;
    }
    console.log(`Number at ${i} : ${array[i]}`);
}

console.log("\n");


// Break ---> Loop is Terminated

let array1 = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < array1.length; i++) {
    if (array1[i] == 4) {
        break
    }
    console.log(`Number at ${i} : ${array1[i]}`);
}


