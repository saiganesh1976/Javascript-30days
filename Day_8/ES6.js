// ES6+ features

// templete literals
const name = "SaiGanesh";
const age = 20;
console.log(`My name is ${name} and i am ${age} year old`);

// multiline literals
let something = `Multiline string using templete literals
somecontent sdsvnjbjbd
dvnj djvjdv
vdnkjnd jnvdnvkjdvdvjdv`;
console.log(something);

// Rest and Spread operator

// Spread
let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [3, 4, 5, 2, 5, 6];
let arr = [...arr1, ...arr2];
console.log(arr);

function fun(brand, color, category) {
  console.log(brand);
  console.log(color);
  console.log(category);
}
let nums = ["benz", "white", "sports"];
fun(...nums);

//rest
function func(name, age, ...hobbies) {
  console.log(name);
  console.log(age);
  console.log(hobbies.join(","));
}
func("Saiganesh", 20, "Playing", "Reading", "Coding");

// Destructuring

// Array Destructuring
const ar = [1, 2, 3, 4, 5];
const [first, second] = ar;
console.log(first);
console.log(second);

// Object Destructuring
let obj = {
  firstName: "sai",
  lastName: "Ganesh",
  address: "Hyderbad",
};

const { lastName, address } = obj;
console.log(lastName);
console.log(address);

// Default Parameter

function product(num1, num2 = 10) {
  product = num1 * num2;
  console.log(product);
}
product(3,20);
