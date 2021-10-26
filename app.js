const burger = document.querySelector(".burger");
const cross = document.querySelector(".cross");
const mobileMenu = document.querySelector(".mobileMenu");

//toggle nav

burger.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
