const menu = document.getElementById("nav-list");
const button = document.getElementById("menu-toggle");

// Al hacer clic en el botón del menú, alternar la clase "active"
button.addEventListener("click", (event) => {
  menu.classList.toggle("active");
});

// Al hacer clic en el body, si el menú está activo, agregar la clase "desactive"
document.addEventListener("click", (event) => {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    menu.classList.add("desactive");
  }
});
