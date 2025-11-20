gsap.registerPlugin(ScrollTrigger, TextPlugin);
console.clear();

// Elementos que vamos a utilizar
const sections = gsap.utils.toArray(".slide");
const images = gsap.utils.toArray(".image").reverse();
const slideImages = gsap.utils.toArray(".slide__img");
const outerWrappers = gsap.utils.toArray(".slide__outer");
const innerWrappers = gsap.utils.toArray(".slide__inner");
const count = document.querySelector(".count");
const wrap = gsap.utils.wrap(0, sections.length);
let animating;
let currentIndex = 0;

// Configuración inicial de los slides
gsap.set(outerWrappers, { xPercent: 100 });
gsap.set(innerWrappers, { xPercent: -100 });
gsap.set(".slide:nth-of-type(1) .slide__outer", { xPercent: 0 });
gsap.set(".slide:nth-of-type(1) .slide__inner", { xPercent: 0 });

// Función para ir al siguiente slide
function gotoSection(index, direction) {
  animating = true;
  index = wrap(index);

  let tl = gsap.timeline({
    defaults: { duration: 1, ease: "expo.inOut" },
    onComplete: () => {
      animating = false;
    }
  });

  let currentSection = sections[currentIndex];
  let heading = currentSection.querySelector(".slide__heading");
  let nextSection = sections[index];
  let nextHeading = nextSection.querySelector(".slide__heading");

  gsap.set([sections, images], { zIndex: 0, autoAlpha: 0 });
  gsap.set([sections[currentIndex], images[index]], { zIndex: 1, autoAlpha: 1 });
  gsap.set([sections[index], images[currentIndex]], { zIndex: 2, autoAlpha: 1 });

  tl
    .set(count, { text: index + 1 }, 0.32)
    .fromTo(
      outerWrappers[index],
      { xPercent: 100 * direction },
      { xPercent: 0 },
      0
    )
    .fromTo(
      innerWrappers[index],
      { xPercent: -100 * direction },
      { xPercent: 0 },
      0
    )
    .to(
      heading,
      {
        "--width": 800,
        xPercent: 30 * direction
      },
      0
    )
    .fromTo(
      nextHeading,
      { "--width": 800, xPercent: -30 * direction },
      { "--width": 200, xPercent: 0 },
      0
    )
    .fromTo(
      images[index],
      { xPercent: 125 * direction, scaleX: 1.5, scaleY: 1.3 },
      { xPercent: 0, scaleX: 1, scaleY: 1, duration: 1 },
      0
    )
    .fromTo(
      images[currentIndex],
      { xPercent: 0, scaleX: 1, scaleY: 1 },
      { xPercent: -125 * direction, scaleX: 1.5, scaleY: 1.3 },
      0
    )
    .fromTo(
      slideImages[index],
      { scale: 2 },
      { scale: 1 },
      0
    )
    .timeScale(0.8);

  currentIndex = index;
}

// Configuración de Observer para manejar scroll y gestos
let sliderObserver = Observer.create({
  target: "#gsap-slider",  // Activar solo dentro de la zona del slider
  type: "wheel,touch,pointer",
  preventDefault: true,
  wheelSpeed: -1,
  paused: true, // Pausado por defecto, se activará con ScrollTrigger
  onUp: () => {
    if (!animating) gotoSection(currentIndex + 1, +1);
  },
  onDown: () => {
    if (!animating) gotoSection(currentIndex - 1, -1);
  },
  tolerance: 10
});

// Función para activar el slider
function enableSlider() {
  sliderObserver.enable();
}

// Función para desactivar el slider
function disableSlider() {
  sliderObserver.disable();
}

// Configuración de ScrollTrigger para manejar la activación y desactivación del slider
ScrollTrigger.create({
  trigger: "#gsap-slider",  // Solo activamos dentro del slider
  start: "top top",         // Se activa cuando la parte superior del slider toca la parte superior de la ventana
  end: "bottom bottom",     // Se desactiva cuando el slider sale del viewport
  onEnter: () => {
    enableSlider(); // Activar el Observer cuando entra
    ScrollTrigger.refresh(); // Refresca ScrollTrigger para asegurar que los cálculos sean correctos
  },
  onEnterBack: () => {
    enableSlider(); // Activar al entrar desde abajo
    ScrollTrigger.refresh(); // Refresca ScrollTrigger para asegurar que los cálculos sean correctos
  },
  onLeave: () => disableSlider(),      // Desactivar cuando sale
  onLeaveBack: () => disableSlider(),  // Desactivar cuando se vuelve a salir desde arriba
  once: true // Agregamos once: true para evitar que se active más de una vez en un scroll
});

// Llamar a `updateRoot` para recalcular las animaciones de GSAP en caso de cambios dinámicos
gsap.updateRoot();

// Pre-cargar las imágenes antes de iniciar la animación
function preloadImages(imageArray) {
  const promises = imageArray.map((src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = resolve;
      img.onerror = reject;
    });
  });

  return Promise.all(promises);
}

// Pre-carga las imágenes antes de iniciar la animación
const imageSources = [
  'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NjMyMDUzOA&ixlib=rb-1.2.1&q=80&w=400',
  'images-about/FRAMSIDA LIGGANDE CROP.jpg',
  'images-about/florero-rosA.png',
  'images-about/proyecto-mercedes-ben-foto2.jpg',
  'images-about/proyecto-vingarden-1.jpg',
  'images-about/proyecto-2-foto1.jpg'
];

preloadImages(imageSources)
  .then(() => {
    // Inicialización de la animación
    console.log("Imágenes cargadas");
    initAnimations();
  })
  .catch((err) => console.error("Error al cargar las imágenes", err));

function initAnimations() {
  // Aquí puedes iniciar cualquier animación adicional
  console.log('Animaciones inicializadas');
   gsap.set(sections[0], { visibility: "visible", opacity: 1 });  // Asegura que la primera slide sea visible al cargar

  // Ahora activa la animación de entrada para la primera slide
  gotoSection(0, 1); // Esto asegurará que la primera slide ya esté visible
}
