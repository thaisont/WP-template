const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobileMenu");
const content = document.querySelectorAll(".content");
const accordion = document.querySelectorAll(".accordion");

//Toggle nav

burger.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

//Toggle accordion

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    let content = this.nextElementSibling;
    content.classList.toggle("hidden");
    console.log("test");
  });
}
