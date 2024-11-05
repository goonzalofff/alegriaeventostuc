// Menú hamburguesa
const btnMenu = document.getElementById('btn-menu');
const mainNav = document.getElementById('main-nav');
btnMenu.addEventListener('click', () => {
  mainNav.classList.toggle('mostrar');
});

// Slider
const slider = document.querySelector("#slider");
const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");
let sliderSections = Array.from(document.querySelectorAll(".slider__section"));
let autoSlideInterval;
const transitionTime = 500; // Tiempo en ms para la transición

// Colocamos la última sección al inicio para el efecto circular
slider.insertAdjacentElement('afterbegin', sliderSections[sliderSections.length - 1]);

// Función para el movimiento a la derecha
function Next() {
  const firstSection = sliderSections[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = `all ${transitionTime}ms`;
  setTimeout(() => {
    slider.style.transition = "none";
    slider.insertAdjacentElement('beforeend', firstSection);
    slider.style.marginLeft = "-100%";
    sliderSections.push(sliderSections.shift()); // Actualizamos el orden
  }, transitionTime);
  resetAutoSlide();
}

// Función para el movimiento a la izquierda
function Prev() {
  const lastSection = sliderSections[sliderSections.length - 1];
  slider.style.marginLeft = "0";
  slider.style.transition = `all ${transitionTime}ms`;
  setTimeout(() => {
    slider.style.transition = "none";
    slider.insertAdjacentElement('afterbegin', lastSection);
    slider.style.marginLeft = "-100%";
    sliderSections.unshift(sliderSections.pop()); // Actualizamos el orden
  }, transitionTime);
  resetAutoSlide();
}

// Eventos de clic
btnRight.addEventListener('click', Next);
btnLeft.addEventListener('click', Prev);

// Función para resetear el auto-slide
function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(Next, 5000);
}

// Iniciar el auto-slide
autoSlideInterval = setInterval(Next, 5000);
