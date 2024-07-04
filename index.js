const menu = document.getElementById("nav-list");
const button = document.getElementById("menu-toggle");

// Al hacer clic en el botón del menú, alternar la clase "active"
button.addEventListener("click", (event) => {
  event.stopPropagation(); // Evita la propagación del evento al body
  menu.classList.toggle("active");
});

// Al hacer clic en el body, si el menú está activo, eliminar la clase "active"
document.addEventListener("click", () => {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
  }
});

// Evita la propagación del clic dentro del menú
menu.addEventListener("click", (event) => {
  event.stopPropagation();
});
