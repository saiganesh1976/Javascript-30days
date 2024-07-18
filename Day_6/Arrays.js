// Arrays

const arr = [1, 2, 3, 5, 6];
console.log(arr);

let first = arr[0];
let last = arr[arr.length]

console.log(`First element in the gib]ven array is ${first}, Last element in the given array is ${last}`);

//methods

arr.push(7); // Appends a new element at the end
console.log(arr);
arr.pop()   // Removes the last element from an array.
console.log(arr);

arr.shift(); // Removes the first element from an array
console.log(arr);

arr.unshift(1)  // Inserts new elements at the start of an array
console.log(arr);

let check = arr.includes(2); // Determines whether an array includes a certain element
console.log(check); //true

let length = arr.length
console.log(`Length of the given array is: ${length}`);

let index = arr.indexOf(5) // Returns the index of the first occurrence of a value in an array
console.log(index);

// Array Iterations

// For

let data = ['a', 'b', 'c', 'd']


console.log("for loop begins:");
for (let i = 0; i < data.length; i++) {
    const element = data[i];
    console.log(element);
}

// forEach
// --> A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

console.log("forEach Loop begins:");
data.forEach(element => {
    console.log(element);
});


// Array Transformations

// MAP(), Reduce(), Filter()

let list = [1, 2, 3, 4, 5]

// MAP()
let squares = list.map((num) => {
    return num * num;
})
console.log(squares);

// Filter()
let even = list.filter((num) => {
    return num % 2 == 0;
})
console.log(even);

// Reduce()
let product = list.reduce((pro, num) => {
    return pro * num;
})
console.log(product);