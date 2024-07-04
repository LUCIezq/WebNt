const menu = document.getElementById("nav-list");
const button = document.getElementById("menu-toggle");
const body = document.getElementById("body");

button.addEventListener("click", () => {
  menu.classList.toggle("active");
});
body.addEventListener("click", () => {
  menu.classList.toggle("active");
});
