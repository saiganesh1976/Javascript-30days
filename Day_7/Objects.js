// object Creation and accessing

let book = {
    title: "My life My Rules",
    author: "Sai",
    year: "2024"
}
console.log(book);
console.log(book.title);
console.log(book.author);
console.log(book.year);



//  nested Objects

let library = {
    name: "SaiGanesh",
    books: [
        { name: "xyz", author: "peter", year: "2000" },
        { name: "abc", author: "john", year: "1990" },
        { name: "klm", author: "remo", year: "1934" }
    ]
}
console.log(library.books);
// acessing the keys in nested objects
for (const key in library.books) {
    console.log(library.books[key].name);
}

// Methods of Object

console.log(Object.keys(library));      // Returns the names of the enumerable string properties and methods of an object.
console.log(Object.values(library));    // Returns an array of values of the enumerable properties of an object
console.log(Object.entries(library));   // Returns an array of key/values of the enumerable properties of an object

// This keyword
let profile = {
    name: "SaiGanesh",
    followers: "200K",
    following: "100",

    call() {
        let name = "MS Dhoni"
        console.log(this.name); // SaiGanesh
        console.log(name);  // MS Dhoni
    }
}
profile.call()


// objects and Methods
let car = {
    brand: "Volvo",
    color: "red",
    category: "Sports",
    year: 2024,

    details(year) {
        this.year = year;
        console.log(this.brand);
        console.log(this.color);
        console.log(this.category);
        console.log(this.year);
    }
}
car.details(2024)