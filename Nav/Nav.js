const menu = document.getElementById("nav-list");
const button = document.getElementById("menu-toggle");

button.addEventListener("click", () => {
  menu.classList.toggle("active");
});
