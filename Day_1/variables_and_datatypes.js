// Variable declaration

var random=20
console.log(random);

var random=100  // Reassigned and Redeclared
console.log(random);

let name="Sai Ganesh"
console.log(name);

name="Ratnala";  // Reassigned
console.log(name);

if(true)
    {
        let name="Ratnala SaiGanesh"
        console.log(name);
    }
    
// let name="Ratnala"  // SyntaxError: Identifier 'name' has already been declared in the global Scope
// console.log(name); // Ratnala

const DOB="14 SEP 2003"
console.log(DOB);

const boolean= true;
console.log(boolean);

// boolean=false
// console.log(boolean); // TypeError: Assignment to constant variable.

// Datatypes

let userName="SaiGanesh"
console.log(userName);
console.log(typeof(userName));  // string

const password=123456
console.log(typeof(password));  // Number

let isLoggedIn=true;
console.log(typeof(isLoggedIn));    // boolean

let userInfo={
    firstName:"Saiganesh",
    lastName:"Ratnala",
    followers:"100k",
    following:"200"
}
console.log(userInfo); // object

let userPosts=null;
console.log(typeof(userPosts)); // object

let reels=undefined
console.log(typeof(reels))  // undefined

let userData;
console.log(typeof(userData));  // undefined---> Declared but not given value

const num= 1234n
console.log(typeof(num));   // bigint

