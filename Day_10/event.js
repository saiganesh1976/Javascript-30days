let paragraph = document.getElementsByClassName("paragraph");
console.log(paragraph);
let btn = document.getElementById("btn");
btn.addEventListener("click", (e) => {
  paragraph[0].textContent = "lorem ddbvjhbdvhjb";
});

// Button

document.querySelector(".dbl").addEventListener("dbclick", (e) => {
  document.getElementById("img").style.display = "none";
});
document.querySelector(".ck").addEventListener("click", (e) => {
  document.getElementById("img").style.display = "block";
});

// Mouse hover

let change_bg = document.getElementsByClassName("changeBg");
console.log(change_bg);
change_bg[0].addEventListener("mouseover", (e) => {
  change_bg[0].style.backgroundColor = "yellow";
});
change_bg[0].addEventListener("mouseout", (e) => {
  change_bg[0].style.backgroundColor = "white";
});

// KeyBoard Input

let userInput = document.getElementById("userInput");

userInput.addEventListener("keypress", (e) => {
  console.log(` userInput using KeyPress: ${userInput.value}`);
});

userInput.addEventListener("keyup", (e) => {
  console.log(`userInput using KeyUp: ${userInput.value}`);
});

// Form Events
let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  formData.forEach((value, key) => {
    console.log(`${key}:${value}`);
  });
});
