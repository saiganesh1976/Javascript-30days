// Selecting and Manipulating
let heading = document.getElementById("text");
heading.textContent = "new heading";

let con = document.getElementsByClassName("section");
for (let i = 0; i < con.length; i++) {
  con[i].style.backgroundColor = "red";
}

// Craeting and Adding
let body = document.getElementsByTagName("body");
console.log(body);
let newDiv = document.createElement("div");
newDiv.innerHTML = "<p> New Element is Created using DOM manipulation </p>";
newDiv.style.fontWeight = "600";
document.body.appendChild(newDiv);

let list = document.getElementById("list");
let newLi = document.createElement("li");
newLi.textContent = "F //added using DOM";
list.appendChild(newLi);

// select and remove
let li_item = document.getElementById("item1");
if (li_item) {
  li_item.remove();
}

// Remove lastChild of an element
let list1 = document.getElementById("list");
list1.lastElementChild.remove();

// Change the Attributes
let image_alt = document.getElementsByTagName("img");
console.log(image_alt);
console.log((image_alt[0].attributes[1].textContent = "image description"));

// Event Handling
let button = document.getElementsByClassName("button");
console.log(button);
let buttonContent = button[0].innerHTML;
console.log(buttonContent);
button[0].addEventListener("click", (e) => {
  button[0].textContent = "new Content";
  button[0].style.backgroundColor = "red";
  button[0].style.color = "white";
  button[0].style.fontSize = "20px";
});

let para = document.getElementsByClassName("content");
console.log(para);
para[0].addEventListener("mouseover", (e) => {
  para[0].style.border = "2px solid red";
});
