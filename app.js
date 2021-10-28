const burger = document.querySelector(".burger");
const cross = document.querySelector(".cross");
const mobileMenu = document.querySelector(".mobileMenu");

const plus = document.getElementById("plus");
const content = document.querySelector(".content");
const accordion = document.querySelector(".accordion");

//toggle nav

burger.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

accordion.addEventListener("click", () => {
  content.classList.toggle("hidden");
  console.log("TEST");
});

plus.addEventListener("click", () => {
  content.classList.toggle("hidden");
});
