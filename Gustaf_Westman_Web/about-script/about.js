document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("mainTitle");
  const sideText = document.getElementById("sideText");
  const sideImage = document.getElementById("sideImage");

  function easeOutCubic(x) {
    return 1 - Math.pow(1 - x, 3);
  }

  let progress = 0; // Controla el progreso de la animación
  const startScale = 1.35;
  const endScale = 1;
  let locked = true; // Bloquea el scroll hasta que la animación termine
  let lastScrollY = 0; // Para controlar el scroll hacia arriba/abajo

  title.style.transformOrigin = "left top";
  title.style.transform = `scale(${startScale}) translateY(10px)`;
  title.classList.remove("shrink");

  // --- SCROLL CON LA ROLLA Y LA BARRA LATERAL ---
  window.addEventListener("wheel", (e) => {
    const direction = e.deltaY > 0 ? "down" : "up";

    if (locked) {
      e.preventDefault(); // Evitar el desplazamiento por defecto (sólo para la animación)

      if (direction === "down") {
        progress += e.deltaY * 0.04; // Incremento mayor para mayor velocidad
        if (progress > 1) progress = 1; // Limitar el progreso a 1 (máximo)
      } else if (direction === "up") {
        progress -= e.deltaY * 0.04; // Reducir el progreso para el scroll hacia arriba
        if (progress < 0) progress = 0; // Limitar el progreso a 0 (mínimo)
      }

      const eased = easeOutCubic(progress);
      const currentScale = startScale + (endScale - startScale) * eased;
      const currentTranslate = 10 * (1 - eased);

      // Animación del título (escala y posición)
      title.style.transform = `scale(${currentScale}) translateY(${currentTranslate}px)`;

      // Animación de la imagen (escala sincronizada con el título)
      sideImage.style.transform = `scale(${1 + (1 - eased) * 0.15})`;

      // Mostrar el texto cuando el progreso sea máximo
      if (progress >= 1) {
        locked = false; // Liberar el scroll
        title.classList.add("shrink"); // Reducir el tamaño del título
        sideText.classList.add("side-visible"); // Hacer visible el texto
        sideImage.classList.add("normal"); // Normalizar la imagen
      } else if (progress <= 0) {
        locked = true; // Bloquear el scroll cuando el progreso esté en 0
        title.classList.remove("shrink");
        sideText.classList.remove("side-visible"); // Ocultar el texto
        sideImage.classList.remove("normal"); // Restaurar la imagen a su tamaño original
      }
    }
  }, { passive: false });

  // --- SCROLL CON LA BARRA LATERAL ---
  window.addEventListener("scroll", () => {
    const direction = window.scrollY > lastScrollY ? "down" : "up";
    lastScrollY = window.scrollY;

    if (locked) {
      if (direction === "down") {
        progress += 0.04; // Aumentar el progreso de la animación
        if (progress > 1) progress = 1;
      } else if (direction === "up") {
        progress -= 0.04; // Reducir el progreso de la animación
        if (progress < 0) progress = 0;
      }

      const eased = easeOutCubic(progress);
      const currentScale = startScale + (endScale - startScale) * eased;
      const currentTranslate = 10 * (1 - eased);

      // Animación del título
      title.style.transform = `scale(${currentScale}) translateY(${currentTranslate}px)`;

      // Animación sincronizada de la imagen
      sideImage.style.transform = `scale(${1 + (1 - eased) * 0.15})`;

      if (progress >= 1) {
        locked = false;
        title.classList.add("shrink");
        sideText.classList.add("side-visible"); // Hacer visible el texto
        sideImage.classList.add("normal");
      }

      if (progress <= 0) {
        locked = true;
        title.classList.remove("shrink");
        sideText.classList.remove("side-visible"); // El texto desaparece
        sideImage.classList.remove("normal"); // Restaurar la imagen a su tamaño original
      }
    }
  });
});
/* 
PROJECTS  */
