const menu = document.getElementById("nav-list");
const button = document.getElementById("menu-toggle");
const header = document.getElementById("header");
const button_close = document.getElementById("button-close");

// Añade un evento al botón de menú para alternar la clase "active" del menú
button.addEventListener("click", (event) => {
  menu.classList.toggle("active");

  // Ajusta el estado de los botones según el menú esté activo o no
  if (menu.classList.contains("active")) {
    button.classList.add("desactive-button");
    button_close.classList.add("active-button-close");
  } else {
    button.classList.remove("desactive-button");
    button_close.classList.remove("active-button-close");
  }
});

// Añade un evento al documento para cerrar el menú si está abierto y se hace clic fuera de él
document.addEventListener("click", (event) => {
  if (!header.contains(event.target)) {
    menu.classList.remove("active");
    button.classList.remove("desactive-button");
    button_close.classList.remove("active-button-close");
  }
});

// Añade un evento al botón de cierre para cerrar el menú y ajustar los botones
button_close.addEventListener("click", (event) => {
  menu.classList.remove("active");
  button.classList.remove("desactive-button");
  button_close.classList.remove("active-button-close");
});


  const buttonSubmenu = document.getElementById('selector');
  
  const navSubList = document.getElementById('nav-sub-list');

  buttonSubmenu.addEventListener('click', function(e) {

      navSubList.classList.toggle('active');
  });

  button_close.addEventListener('click',(e)=>{
    navSubList.classList.remove('active');
  })
  

