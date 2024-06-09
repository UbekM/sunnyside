/** @format */

const menu = document.getElementById("menu-2");
const hamburger = document.getElementById("hamburger");
const blur = document.getElementById("blur");

hamburger.addEventListener("click", () => {
  menu.style.display = "block";
  blur.style.display = "block";
  document.body.style.overflow = "hidden";
});

document.addEventListener("click", (event) => {
  if (event.target == blur || event.target == hamburger) {
    menu.style.display = "none";
    document.body.style.overflow = "visible";
    blur.style.display = "none";
  }
});
