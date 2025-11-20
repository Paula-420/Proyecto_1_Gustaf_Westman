# GSAP-101

HTML - Gsap
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>GSAP - Clase de Iniciación</title>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        <div class="container">
            <h1>🎬 GSAP - GreenSock Animation Platform</h1>
            <p class="subtitle">Clase de Iniciación - Ejemplos Interactivos</p>

            <!-- EJEMPLO 1: BÁSICO -->
            <div class="section">
                <h2>1️⃣ Tu Primera Animación - gsap.to()</h2>
                <div class="explanation">
                    <strong>gsap.to()</strong> anima un elemento desde su estado actual hacia los
                    valores que especifiques.
                </div>
                <div class="code">gsap.to(".box1", { x: 300, duration: 1 });</div>
                <div class="demo-area">
                    <div class="box box1">TO</div>
                </div>
                <div class="controls">
                    <button class="btn-example-1">▶ Animar</button>
                    <button class="btn-reset-1">🔄 Reset</button>
                </div>
            </div>

            <!-- EJEMPLO 2: FROM -->
            <div class="section">
                <h2>2️⃣ Animar Desde - gsap.from()</h2>
                <div class="explanation">
                    <strong>gsap.from()</strong> anima un elemento desde los valores que
                    especifiques hacia su estado actual.
                </div>
                <div class="code">gsap.from(".box2", { x: -300, opacity: 0, duration: 1 });</div>
                <div class="demo-area">
                    <div class="box box2">FROM</div>
                </div>
                <div class="controls">
                    <button class="btn-example-2">▶ Animar</button>
                    <button class="btn-reset-2">🔄 Reset</button>
                </div>
            </div>

            <!-- EJEMPLO 3: PROPIEDADES -->
            <div class="section">
                <h2>3️⃣ Múltiples Propiedades</h2>
                <div class="explanation">
                    Puedes animar múltiples propiedades simultáneamente: posición, rotación, escala,
                    opacidad...
                </div>
                <div class="code">
                    gsap.to(".box3", { x: 200, rotation: 360, scale: 1.5, duration: 1.5, ease:
                    "bounce.out" });
                </div>
                <div class="demo-area">
                    <div class="box box3">MIX</div>
                </div>
                <div class="controls">
                    <button class="btn-example-3">▶ Animar</button>
                    <button class="btn-reset-3">🔄 Reset</button>
                </div>
            </div>

            <!-- EJEMPLO 4: REPEAT Y YOYO -->
            <div class="section">
                <h2>4️⃣ Repetir Animaciones - repeat & yoyo</h2>
                <div class="explanation">
                    <strong>repeat:</strong> número de repeticiones (-1 = infinito)<br />
                    <strong>yoyo:</strong> la animación va y vuelve
                </div>
                <div class="code">
                    gsap.to(".box4", { x: 250, duration: 1, repeat: -1, yoyo: true, ease:
                    "power1.inOut" });
                </div>
                <div class="demo-area">
                    <div class="box box4">YOYO</div>
                </div>
                <div class="controls">
                    <button class="btn-example-4">▶ Animar</button>
                    <button class="btn-stop-4">⏸ Detener</button>
                    <button class="btn-reset-4">🔄 Reset</button>
                </div>
            </div>

            <!-- EJEMPLO 5: STAGGER -->
            <div class="section">
                <h2>5️⃣ Stagger - Animar Múltiples Elementos</h2>
                <div class="explanation">
                    <strong>stagger:</strong> retraso entre cada elemento de una colección
                </div>
                <div class="code">
                    gsap.from(".stagger-box", { y: -100, opacity: 0, duration: 0.8, stagger: 0.1,
                    ease: "back.out" });
                </div>
                <div class="demo-area">
                    <div class="stagger-container">
                        <div class="stagger-box"></div>
                        <div class="stagger-box"></div>
                        <div class="stagger-box"></div>
                        <div class="stagger-box"></div>
                        <div class="stagger-box"></div>
                    </div>
                </div>
                <div class="controls">
                    <button class="btn-example-5">▶ Animar</button>
                    <button class="btn-reset-5">🔄 Reset</button>
                </div>
            </div>

            <!-- EJEMPLO 6: TIMELINE -->
            <div class="section">
                <h2>6️⃣ Timeline - Secuencias de Animaciones</h2>
                <div class="explanation">
                    Las <strong>Timelines</strong> te permiten crear secuencias complejas de
                    animaciones con control total
                </div>
                <div class="code">
                    const tl = gsap.timeline(); tl.to(".box6", { x: 200, duration: 1 }) .to(".box6",
                    { y: 100, duration: 1 }) .to(".box6", { rotation: 360, duration: 1 });
                </div>
                <div class="demo-area">
                    <div class="box box6">TL</div>
                </div>
                <div class="controls">
                    <button class="btn-play-6">▶ Play</button>
                    <button class="btn-pause-6">⏸ Pause</button>
                    <button class="btn-reverse-6">⏪ Reverse</button>
                    <button class="btn-restart-6">🔄 Restart</button>
                </div>
            </div>

            <!-- EJEMPLO 7: POSITION PARAMETER -->
            <div class="section">
                <h2>7️⃣ Timeline - Position Parameter</h2>
                <div class="explanation">
                    Controla cuándo ocurre cada animación en la timeline:<br />
                    <strong>"<"</strong> = al mismo tiempo que la anterior<br />
                    <strong>"+=1"</strong> = 1 segundo después<br />
                    <strong>"-=0.5"</strong> = 0.5 segundos antes de que termine
                </div>
                <div class="code">
                    tl.to(".box7a", { x: 200, duration: 1 }) .to(".box7b", { x: 200, duration: 1 },
                    "<") // simultáneo .to(".box7c", { x: 200, duration: 1 }, "-=0.5"); // overlap
                </div>
                <div class="demo-area">
                    <div style="display: flex; gap: 20px; flex-direction: column">
                        <div class="box box7a" style="width: 80px; height: 80px; font-size: 16px">
                            A
                        </div>
                        <div class="box box7b" style="width: 80px; height: 80px; font-size: 16px">
                            B
                        </div>
                        <div class="box box7c" style="width: 80px; height: 80px; font-size: 16px">
                            C
                        </div>
                    </div>
                </div>
                <div class="controls">
                    <button class="btn-example-7">▶ Animar</button>
                    <button class="btn-reset-7">🔄 Reset</button>
                </div>
            </div>

            <!-- EJEMPLO 8: EASING -->
            <div class="section">
                <h2>8️⃣ Easing - Control de Velocidad</h2>
                <div class="explanation">
                    El <strong>easing</strong> controla la aceleración de la animación. Prueba
                    diferentes tipos.
                </div>
                <div class="demo-area">
                    <div style="display: flex; gap: 15px; flex-direction: column; width: 100%">
                        <div class="box box8a" style="width: 80px; height: 60px; font-size: 12px">
                            linear
                        </div>
                        <div class="box box8b" style="width: 80px; height: 60px; font-size: 12px">
                            power2
                        </div>
                        <div class="box box8c" style="width: 80px; height: 60px; font-size: 12px">
                            elastic
                        </div>
                        <div class="box box8d" style="width: 80px; height: 60px; font-size: 12px">
                            bounce
                        </div>
                    </div>
                </div>
                <div class="controls">
                    <button class="btn-example-8">▶ Comparar Easings</button>
                    <button class="btn-reset-8">🔄 Reset</button>
                </div>
            </div>
        </div>

        <!-- jQuery CDN -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

        <!-- GSAP CDN -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>

        <script src="js/script.js"></script>
    </body>
</html>
---------------------------------------------------------------------------------------------------------------------------------
JS - Gsap

// Variables globales para almacenar animaciones y timelines
let animation4, timeline6;

// Esperar a que el documento esté listo
$(document).ready(function () {
    // ========== EXAMPLE 1: gsap.to() ==========
    $(".btn-example-1").on("click", function () {
        gsap.to(".box1", { x: 300, duration: 1 });
    });

    $(".btn-reset-1").on("click", function () {
        gsap.set(".box1", { x: 0 });
    });

    // ========== EXAMPLE 2: gsap.from() ==========
    $(".btn-example-2").on("click", function () {
        gsap.from(".box2", { x: -300, opacity: 0, duration: 1 });
    });

    $(".btn-reset-2").on("click", function () {
        gsap.set(".box2", { x: 0, opacity: 1 });
    });

    // ========== EXAMPLE 3: Múltiples propiedades ==========
    $(".btn-example-3").on("click", function () {
        gsap.to(".box3", {
            x: 200,
            rotation: 360,
            scale: 1.5,
            duration: 1.5,
            ease: "bounce.out",
        });
    });

    $(".btn-reset-3").on("click", function () {
        gsap.set(".box3", { x: 0, rotation: 0, scale: 1 });
    });

    // ========== EXAMPLE 4: Repeat y Yoyo ==========
    $(".btn-example-4").on("click", function () {
        animation4 = gsap.to(".box4", {
            x: 250,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });
    });

    $(".btn-stop-4").on("click", function () {
        if (animation4) {
            animation4.kill();
        }
    });

    $(".btn-reset-4").on("click", function () {
        if (animation4) {
            animation4.kill();
        }
        gsap.set(".box4", { x: 0 });
    });

    // ========== EXAMPLE 5: Stagger ==========
    $(".btn-example-5").on("click", function () {
        gsap.from(".stagger-box", {
            y: -100,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out",
        });
    });

    $(".btn-reset-5").on("click", function () {
        gsap.set(".stagger-box", { y: 0, opacity: 1 });
    });

    // ========== EXAMPLE 6: Timeline ==========
    $(".btn-play-6").on("click", function () {
        timeline6 = gsap.timeline();
        timeline6
            .to(".box6", { x: 200, duration: 1 })
            .to(".box6", { y: 100, duration: 1 })
            .to(".box6", { rotation: 360, duration: 1 });
    });

    $(".btn-pause-6").on("click", function () {
        if (timeline6) {
            timeline6.pause();
        }
    });

    $(".btn-reverse-6").on("click", function () {
        if (timeline6) {
            timeline6.reverse();
        }
    });

    $(".btn-restart-6").on("click", function () {
        if (timeline6) {
            timeline6.restart();
        }
    });

    // ========== EXAMPLE 7: Position Parameter ==========
    $(".btn-example-7").on("click", function () {
        const tl = gsap.timeline();
        tl.to(".box7a", { x: 200, duration: 1 })
            .to(".box7b", { x: 200, duration: 1 }, "<")
            .to(".box7c", { x: 200, duration: 1 }, "-=0.5");
    });

    $(".btn-reset-7").on("click", function () {
        gsap.set(".box7a, .box7b, .box7c", { x: 0 });
    });

    // ========== EXAMPLE 8: Easing ==========
    $(".btn-example-8").on("click", function () {
        gsap.to(".box8a", { x: 500, duration: 2, ease: "none" });
        gsap.to(".box8b", { x: 500, duration: 2, ease: "power2.inOut" });
        gsap.to(".box8c", { x: 500, duration: 2, ease: "elastic.out" });
        gsap.to(".box8d", { x: 500, duration: 2, ease: "bounce.out" });
    });

    $(".btn-reset-8").on("click", function () {
        gsap.set(".box8a, .box8b, .box8c, .box8d", { x: 0 });
    });
}); // Fin document.ready

------------------------------------------------------------------------------------------------------------------

CSS - Gsap
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    padding: 20px;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    background: white;
    border-radius: 20px;
    padding: 40px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

h1 {
    color: #333;
    margin-bottom: 10px;
    text-align: center;
}

.subtitle {
    text-align: center;
    color: #666;
    margin-bottom: 40px;
    font-size: 18px;
}

.section {
    margin-bottom: 50px;
    padding: 30px;
    background: #f8f9fa;
    border-radius: 15px;
    border-left: 5px solid #667eea;
}

.section h2 {
    color: #667eea;
    margin-bottom: 20px;
    font-size: 24px;
}

.demo-area {
    background: white;
    padding: 40px;
    border-radius: 10px;
    margin: 20px 0;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.box {
    width: 100px;
    height: 100px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.controls {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 20px;
}

button {
    padding: 12px 24px;
    font-size: 16px;
    background: #667eea;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;
    font-weight: 600;
}

button:hover {
    background: #764ba2;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

button:active {
    transform: translateY(0);
}

.code {
    background: #282c34;
    color: #61dafb;
    padding: 20px;
    border-radius: 8px;
    overflow-x: auto;
    margin: 15px 0;
    font-family: "Courier New", monospace;
    font-size: 14px;
}

.explanation {
    background: #fff3cd;
    border-left: 4px solid #ffc107;
    padding: 15px;
    margin: 15px 0;
    border-radius: 5px;
}

.scroll-section {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    font-weight: bold;
    color: white;
    position: relative;
}

#scroll1 {
    background: #667eea;
}
#scroll2 {
    background: #764ba2;
}
#scroll3 {
    background: #f093fb;
}

.stagger-container {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

.stagger-box {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    border-radius: 10px;
}









ACTUALIZACIONES

<section id="about" class="about-section py-5">
  <div class="container">
    <!-- TÍTULO ANIMADO -->
    <div class="row">
      <div class="col-lg-10">
        <!-- CONTENEDOR DEL TÍTULO PARA ANIMARLO -->
        <div id="mainTitleContainer">
          <h2 id="mainTitle"
              style="color:#2e3ea8; line-height:1.3;">
            Forma y funcion
          </h2>
        </div>
      </div>
    </div>

    <!-- FILA IMAGEN + TEXTO DERECHA (CONTINUAMOS CON LA ANIMACIÓN) -->
    <div class="row mt-4 align-items-start gx-5" style="min-height: 350px;">
      <!-- IMAGEN -->
      <div class="col-lg-6 text-center">
        <img id="sideImage" 
             src="images-about/GUSTAF-FONDO-AZUL.jpg" 
             class="img-fluid" alt=""
             style="max-width:100%;">
      </div>

      <!-- TEXTO DERECHO -->
      <div id="sideText" class="col-lg-5 mt-4 mt-lg-0 side-hidden">
        <p style="font-size: 1rem; color:#2e3ea8; line-height:1.5;">
          The namesake label presents objects including made-to-order furniture,
          custom design pieces, ceramics and glassware.
        </p>
        <p class="mt-3" style="font-size: 1rem; color:#2e3ea8; line-height:1.5;">
          Each made-to-order piece is crafted in collaboration with selected
          Swedish woodworkers to support a local and sustainable production
          process.
        </p>
      </div>
    </div>
  </div>
</section>

document.addEventListener("DOMContentLoaded", () => {

  const title = document.getElementById("mainTitle");
  const sideText = document.getElementById("sideText");

  function easeOutCubic(x) {
    return 1 - Math.pow(1 - x, 3);
  }

  let progress = 0;
  const startScale = 1.35;
  const endScale = 1;
  let locked = true;
  let lastScrollY = 0;

  title.style.transformOrigin = "left top";
  title.style.transform = `scale(${startScale}) translateY(10px)`;
  title.classList.remove("shrink");

  /* ----------------------------------------------
        SCROLL HACIA ABAJO → reducir título
  ---------------------------------------------- */
  window.addEventListener("wheel", (e) => {
    const direction = e.deltaY > 0 ? "down" : "up";

    if (locked) {
      e.preventDefault();

      if (direction === "down") {
        progress += e.deltaY * 0.0022;
        if (progress > 1) progress = 1;
      }

      const eased = easeOutCubic(progress);

      const currentScale  = startScale + (endScale - startScale) * eased;
      const currentTranslate = 10 * (1 - eased);

      title.style.transform = `scale(${currentScale}) translateY(${currentTranslate}px)`;

      // CUANDO ACABA LA ANIMACIÓN DEL TÍTULO → mostrar texto
      if (progress >= 1) {
    locked = false;
    title.classList.add("shrink");
    sideText.classList.add("side-visible");

    // La imagen vuelve a tamaño normal
    document.getElementById("sideImage").classList.add("normal");
}
    }

    /* ----------------------------------------------
        SCROLL HACIA ARRIBA → volver a grande
    ---------------------------------------------- */
    if (!locked && direction === "up" && window.scrollY <= 5) {
      locked = true;
      progress = 0;

      title.classList.remove("shrink");
      title.style.transition = "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)";
      title.style.transform = `scale(${startScale}) translateY(10px)`;

      // OCULTAR TEXTO CUANDO EL TÍTULO SE AGRANDA
      sideText.classList.remove("side-visible");

      setTimeout(() => { title.style.transition = ""; }, 600);
    }

  }, { passive: false });


  /* Backup por scroll táctil o teclado */
  window.addEventListener("scroll", () => {
    const direction = window.scrollY > lastScrollY ? "down" : "up";
    lastScrollY = window.scrollY;

    if (direction === "up" && window.scrollY <= 5) {
      locked = true;
      progress = 0;
      title.classList.remove("shrink");

      title.style.transition = "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)";
      title.style.transform = `scale(${startScale}) translateY(10px)`;

      // Ocultar texto derecho cuando volvemos arriba
      sideText.classList.remove("side-visible");
      document.getElementById("sideImage").classList.remove("normal");

      setTimeout(() => { title.style.transition = ""; }, 600);
    }
  });

});
/* --- TÍTULO PRINCIPAL: Animación grande → pequeño con scroll --- */
.animated-title {
  opacity: 1; /* Título visible desde el inicio */
  transform: scale(1.35) translateY(10px); /* Escala más grande inicialmente */
  transform-origin: left top;
  transition: transform 0.5s ease, opacity 1s ease;
  font-size: 3rem; /* Título grande al principio */
  max-width: 900px;
  line-height: 1.3; /* Mantén el line-height original */
  padding-bottom: 4rem; /* Añadimos espacio extra cuando el texto está grande */
}

/* Cuando el título se hace pequeño */
.animated-title.shrink {
  transform: scale(1) translateY(0);
  font-size: 2.4rem; /* Tamaño pequeño al final */
  line-height: 1.3; /* Mantén el line-height */
  padding-bottom: 2rem; /* Menos espacio cuando el texto está pequeño */
}

/* --- RESTO DEL CÓDIGO --- */

#mainTitle {
  transform-origin: left top;
  transition: transform 0.5s ease, opacity 1s ease;
  font-size: 3rem; /* Título grande al inicio */
  max-width: 900px;
  line-height: 1.3; /* Mantén el line-height original */
  padding-bottom: 4rem; /* Añadimos más espacio abajo cuando el título está grande */
}

/* --- TEXTOS DERECHA: scroll reveal --- */
.scroll-reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.side-hidden {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.side-visible {
  opacity: 1;
  transform: translateY(0);
}

/* --- IMAGEN: Animación de agrandado --- */
#sideImage {
  transition: transform 0.7s ease;
  transform: scale(1.15); /* Imagen más grande al principio */
  transform-origin: center center; /* El origen de la transformación está en el centro de la imagen */
  max-width: 100%; /* Aseguramos que no se desborde */
  margin-right: 20px; /* Ajuste para evitar que se pegue al borde */
}

/* Cuando el título se hace pequeño, la imagen vuelve a su tamaño normal */
#sideImage.normal {
  transform: scale(1);
  transition: transform 0.7s ease; /* Transición suave cuando vuelva al tamaño original */
}

/* --- TYPEWRITER PARA LOS TEXTOS DERECHA */
.typewriter-block {
  font-size: 1rem;
  color: #2e3ea8;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid #2e3ea8;
  width: 0;
  display: inline-block;
  opacity: 0;
  animation: cursorBlink 0.7s infinite;
}

@keyframes cursorBlink {
  0%, 50% { border-color: transparent; }
  51%, 100% { border-color: #2e3ea8; }
}

/* Estilo adicional para la nueva colección */
.new-collection-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #D32F2F; /* Color para "Nueva colección" */
  letter-spacing: 3px;
}

.row {
  padding: 2rem;
}

button.btn-danger {
  background-color: #D32F2F;
  border-color: #D32F2F;
  color: white;
  margin-top: 20px;
}

button.btn-danger:hover {
  background-color: #C2185B;
  border-color: #C2185B;
}

/* Estilo para las tarjetas dentro de la nueva colección */
.card {
  border: none;
  border-radius: 15px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

.card-body {
  padding: 1.25rem;
}
.img-hover-zoom {
  overflow: hidden;
}

.img-hover-zoom img {
  transition: transform 0.5s ease;
}

.img-hover-zoom:hover img {
  transform: scale(1.08);
}

/* --- MEDIA QUERIES --- */

/* Para dispositivos móviles y pantallas pequeñas */
@media (max-width: 768px) {
  .animated-title {
    font-size: 2rem;  /* Título más pequeño en móviles */
    line-height: 1.3; 
    padding-bottom: 2rem; /* Reducimos el padding en pantallas pequeñas */
  }

  #sideImage {
    transform: scale(1.05); /* Imagen ligeramente más pequeña para pantallas pequeñas */
  }

  #sideText {
    font-size: 0.9rem; /* Reducimos el tamaño del texto en pantallas pequeñas */
  }

  /* En dispositivos móviles, la imagen y el texto se apilan */
  .row {
    flex-direction: column;
    align-items: center;
  }

  /* Ajustamos el espaciado entre los elementos */
  .col-lg-6, .col-lg-4 {
    margin-bottom: 20px;
  }

  .side-visible {
    transform: translateY(0);
    opacity: 1;
  }

  .side-hidden {
    transform: translateY(30px);
    opacity: 0;
  }

  #sideText {
    font-size: 1rem;
    padding: 0;
    margin-top: 20px;
  }
}

/* Para tabletas y dispositivos con pantallas medianas */
@media (min-width: 769px) and (max-width: 1024px) {
  .animated-title {
    font-size: 2.4rem;  /* Ajustamos el tamaño del título para tabletas */
  }

  #sideImage {
    transform: scale(1.1); /* Imagen un poco más grande para tabletas */
  }
}





antiguo 
document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById("unico-title");
    const bgImage = document.getElementById("sideImage");
    const sideText = document.getElementById("sideText");

    // Función de suavizado (ease out cubic)
    function easeOutCubic(x) {
        return 1 - Math.pow(1 - x, 3);
    }

    let progress = 0;
    const startScale = 1.0; // Valor inicial ajustado para evitar desbordamiento
    const endScale = 1;
    let locked = true;

    title.style.transformOrigin = "left top";
    title.style.transform = `scale(${startScale}) translateY(10px)`;

    /* ----------------------------------------------
        SCROLL HACIA ABAJO → reducir título y escalar la imagen
    ---------------------------------------------- */
    window.addEventListener("wheel", (e) => {
        const direction = e.deltaY > 0 ? "down" : "up";

        if (locked) {
            e.preventDefault();

            if (direction === "down") {
                progress += e.deltaY * 0.0022; // Ajustamos la velocidad del scroll
                if (progress > 1) progress = 1; // Límite de la animación
            }

            const eased = easeOutCubic(progress);

            // Cambiar tamaño y escala del texto "Único"
            const currentScale = startScale + (endScale - startScale) * eased;
            title.style.transform = `scale(${currentScale}) translateY(${10 * (1 - eased)}px)`;

            // Cambiar tamaño y escala de la imagen
            const scaleValue = 1 + (eased / 2); // Imagen crece suavemente
            bgImage.style.transform = `scale(${scaleValue})`;

            // Limitar el ancho de la imagen para evitar desbordamiento
            const maxWidth = Math.min(100, 30 + eased * 60); // Limita el ancho de la imagen al 100%
            bgImage.style.width = `${maxWidth}%`;

            // Después de cierto límite, reducir la imagen
            if (progress >= 0.8) {
                const scaleDownValue = 0.9 + (eased - 0.8) * 0.2; // Reducción suave
                bgImage.style.transform = `scale(${scaleDownValue})`;
            }

            // Cuando la animación de reducción del título termine, mostrar el texto adicional
            if (progress >= 1) {
                locked = false;
                title.classList.add("shrink");
                sideText.classList.add("side-visible");
            }
        }

        /* ----------------------------------------------
            SCROLL HACIA ARRIBA → volver a grande
        ---------------------------------------------- */
        if (!locked && direction === "up" && window.scrollY <= 5) {
            locked = true;
            progress = 0;

            title.classList.remove("shrink");
            title.style.transition = "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)";
            title.style.transform = `scale(${startScale}) translateY(10px)`;

            // Ocultar el texto cuando el título se agranda
            sideText.classList.remove("side-visible");

            setTimeout(() => { title.style.transition = ""; }, 600);
        }

    }, { passive: false });
});


<section id="unico-section">
    <div class="container-fluid">
        <!-- Título Único -->
        <div class="row justify-content-center align-items-center">
            <div class="col-12 text-center">
                <h1 id="unico-title" class="display-1 fw-bold">Único</h1>
            </div>
        </div>

        <!-- Imagen de fondo debajo del texto "Único" -->
        <div class="row">
            <div class="col-12">
                <img src="images-about/GUSTAF-FONDO-AZUL.jpg" alt="Imagen de Gustaf Westman" class="img-fluid" id="sideImage">
            </div>
        </div>

        <!-- Texto adicional alineado a la derecha, en la misma fila que el título "Único" -->
        <div class="row justify-content-center">
            <div class="col-md-6 text-end" id="sideTextContainer">
                <p class="fs-4 text-primary" id="sideText">Gustaf Westman, establecido en 2020, es un estudio de diseño basado en Estocolmo.</p>
            </div>
        </div>
    </div>
</section>
/* General Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Sección Único */
#unico-section {
    position: relative;
    padding: 10vh 0; /* Espaciado superior e inferior */
    text-align: center;
    width: 100%; /* Aseguramos que la sección ocupe el 100% del ancho */
}

/* Título Único */
#unico-title {
    font-size: 15rem; /* El texto ocupa toda la pantalla horizontalmente */
    font-weight: bold;
    color: rgb(99, 21, 21);
    margin-bottom: 40px; /* Espaciado entre el título y la imagen */
    transition: transform 1s ease, font-size 1s ease; /* Transición suave */
    transform-origin: left; /* El texto se reduce desde la izquierda */
}

/* Imagen de fondo debajo del texto "Único" */
#sideImage {
    width: 30%; /* Imagen comienza pequeña */
    height: auto;
    object-fit: cover; /* Mantiene la proporción de la imagen */
    margin-top: 40px; /* Espaciado entre el título y la imagen */
    max-width: 100%; /* Limitar la imagen a un máximo del 100% */
    transform-origin: left; /* La imagen crece desde la izquierda */
    transition: transform 1s ease, width 1s ease, opacity 1s ease; /* Transición suave */
    display: block; /* Asegura que la imagen se comporte correctamente */
    margin-left: 0; /* Asegura que la imagen no se desplace hacia el centro */
}

/* Texto adicional alineado a la derecha */
#sideTextContainer {
    padding-top: 30px; /* Espaciado superior */
    margin-top: 30px; /* Espaciado superior */
}

/* Inicialmente oculto y no visible */
#sideText {
    visibility: hidden; /* Hace que el texto no sea visible */
    opacity: 0; /* Totalmente transparente */
    transform: translateX(50px); /* Empuja el texto hacia la derecha */
    transition: opacity 1s ease, transform 1s ease; /* Transición suave */
}

/* Cuando el texto "Único" se reduce, el texto adicional aparece */
.shrink-title ~ #sideText {
    visibility: visible; /* Hace que el texto sea visible */
    opacity: 1;
    transform: translateX(0); /* El texto se mueve hacia su posición final */
}

/* Responsividad en pantallas pequeñas */
@media (max-width: 768px) {
    #unico-title {
        font-size: 10vw; /* Texto más pequeño en dispositivos móviles */
    }

    #sideImage {
        padding: 0 5vw; /* Márgenes laterales pequeños */
    }
}


<!-- Sección de nueva colección -->


nuevas actualizaciiones 
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
  
  title.style.transformOrigin = "left top";
  title.style.transform = `scale(${startScale}) translateY(10px)`;
  title.classList.remove("shrink");

  // Usando GSAP Observer para controlar el progreso sin bloquear el scroll
  gsap.registerPlugin(ScrollTrigger, Observer);

  // Se crea un observer para el scroll
  Observer.create({
    target: window,
    type: "wheel,touch",  // Detecta el scroll con la rueda o toque
    onChange: (e) => {
      // Avanza el progreso de la animación
      const direction = e.deltaY > 0 ? "down" : "up";
      if (direction === "down") {
        progress += 0.04;
        if (progress > 1) progress = 1;
      } else if (direction === "up") {
        progress -= 0.04;
        if (progress < 0) progress = 0;
      }

      // Aplicar la animación suavizada con `easeOutCubic`
      const eased = easeOutCubic(progress);
      const currentScale = startScale + (endScale - startScale) * eased;
      const currentTranslate = 10 * (1 - eased);

      // Animación del título (escala y posición)
      title.style.transform = `scale(${currentScale}) translateY(${currentTranslate}px)`;

      // Animación de la imagen (escala sincronizada con el título) usando una animación de escala más controlada
      gsap.to(sideImage, {
        scale: 1 + (1 - eased) * 0.15,  // Escala de 1 a 1.15 dependiendo del progreso
        duration: 0.5, // Duración controlada para una animación más fluida
        ease: "power2.out"  // Una suavización más estándar para la escala
      });

      // Mostrar el texto cuando el progreso sea máximo
      if (progress >= 1) {
        title.classList.add("shrink");
        sideText.classList.add("side-visible");
        sideImage.classList.add("normal");
      } else if (progress <= 0) {
        title.classList.remove("shrink");
        sideText.classList.remove("side-visible");
        sideImage.classList.remove("normal");
      }
    },
  });

  // Usamos `ScrollTrigger` para las animaciones basadas en el scroll
  gsap.from("#mainTitle", {
    opacity: 0,
    y: -100,
    duration: 1,
    scrollTrigger: {
      trigger: "#about",
      start: "top 75%",
      end: "bottom top",
      scrub: true,
    },
  });
  gsap.from("#sideText", {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: "#about",
      start: "top 75%",
      end: "bottom top",
      scrub: true,
      onEnter: () => {
        sideText.classList.add("side-visible");  // Añadir la clase cuando el texto entre
      },
      onLeaveBack: () => {
        sideText.classList.remove("side-visible");  // Eliminar la clase cuando el texto se vaya al hacer scroll hacia arriba
      },
    },
  });

  gsap.from("#sideImage", {
    opacity: 0,
    scale: 1.2,
    duration: 1,
    scrollTrigger: {
      trigger: "#about",
      start: "top 75%",
      end: "bottom top",
      scrub: true,
    },
  });

  // --- Scroll con desplazamiento suave usando ScrollToPlugin ---
  const scrollButton = document.getElementById("scrollButton");
  if (scrollButton) {
    scrollButton.addEventListener("click", () => {
      gsap.to(window, {
        scrollTo: "#about",  // Desplazar a la sección 'about'
        duration: 1.5,  // Tiempo de animación
        ease: "power2.inOut",  // Efecto de suavizado
      });
    });
  }
});
