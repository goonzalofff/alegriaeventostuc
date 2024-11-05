// Selección de elementos
const menuHamburguesa = document.querySelector('.menu-hamburguesa');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links ul li a');

// Evento para el menú hamburguesa
menuHamburguesa.addEventListener('click', () => {
    const isActive = navLinks.classList.toggle('active');
    menuHamburguesa.classList.toggle('open', isActive);
});

// Evento para los elementos del menú
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active'); // Cierra el menú
        menuHamburguesa.classList.remove('open'); // Restablece el icono de hamburguesa
    });
});

// Selección de todos los botones con la clase .cta-button y los botones del formulario
const buttons = document.querySelectorAll('.cta-button, .contact-form button');

// Función para cambiar estilos de los botones con clases CSS
const addHoverEffect = (button) => {
    button.classList.add('hover');
};
const removeHoverEffect = (button) => {
    button.classList.remove('hover');
};

buttons.forEach(button => {
    // Evento mouseover (cuando el cursor pasa por encima del botón)
    button.addEventListener('mouseover', () => addHoverEffect(button));

    // Evento mouseout (cuando el cursor deja de estar encima del botón)
    button.addEventListener('mouseout', () => removeHoverEffect(button));

    // Evento click (cuando se hace clic en el botón)
    button.addEventListener('click', () => {
        button.classList.add('clicked');
        setTimeout(() => {
            button.classList.remove('clicked');
        }, 100); // Duración de la animación de clic
    });
});
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});
