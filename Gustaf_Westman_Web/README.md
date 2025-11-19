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





Carrito #1: 

document.addEventListener('DOMContentLoaded', () => {
    // Elementos del DOM
    const cartCountEl = document.getElementById('cart-count');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalEl = document.getElementById('cart-total');
    const cartEmptyEl = document.getElementById('cart-empty');
    const goToCheckoutBtn = document.getElementById('go-to-checkout');
    const checkoutForm = document.getElementById('checkout-form');

    // Estado del carrito
    let cart = [];

    // Añadir listeners a los botones "add to cart"
    const productElements = document.querySelectorAll('.product');
    productElements.forEach(productEl => {
        const addBtn = productEl.querySelector('.add-cart');
        if (!addBtn) return;

        addBtn.addEventListener('click', () => {
            const id = productEl.dataset.id;
            const name = productEl.dataset.name;
            const price = parseFloat(productEl.dataset.price);
            const img = productEl.dataset.img;

            addToCart({ id, name, price, img });
        });
    });

    function addToCart(product) {
        const existing = cart.find(item => item.id === product.id);
        if (existing) {
            existing.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }
        updateCartUI();
    }

    function removeFromCart(id) {
        cart = cart.filter(item => item.id !== id);
        updateCartUI();
    }

    function changeQuantity(id, delta) {
        const item = cart.find(i => i.id === id);
        if (!item) return;

        item.quantity += delta;
        if (item.quantity <= 0) {
            // eliminar si llega a 0
            cart = cart.filter(i => i.id !== id);
        }
        updateCartUI();
    }

    function calcTotal() {
        return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }

    function formatCurrency(value) {
        // Formato europeo con coma y € al final
        return value.toLocaleString('es-ES', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }) + ' €';
    }

    function updateCartUI() {
        // Actualizar numerito del header
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountEl.textContent = totalItems;

        // Carrito vacío
        if (cart.length === 0) {
            cartEmptyEl.style.display = 'block';
            cartItemsContainer.innerHTML = '';
            cartTotalEl.textContent = '0,00 €';
            goToCheckoutBtn.disabled = true;
            return;
        } else {
            cartEmptyEl.style.display = 'none';
            goToCheckoutBtn.disabled = false;
        }

        // Pintar items del carrito
        cartItemsContainer.innerHTML = '';

        cart.forEach(item => {
            const row = document.createElement('div');
            row.classList.add('cart-item', 'd-flex', 'align-items-center', 'justify-content-between', 'border-bottom', 'py-2');

            row.innerHTML = `
                <div class="d-flex align-items-center">
                    <img src="${item.img}" alt="${item.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px; margin-right: 10px;">
                    <div>
                        <div class="fw-semibold">${item.name}</div>
                        <div class="text-muted small">${formatCurrency(item.price)}</div>
                    </div>
                </div>
                <div class="d-flex align-items-center">
                    <button class="btn btn-sm btn-outline-secondary me-2 btn-qty" data-id="${item.id}" data-action="decrease">-</button>
                    <span>${item.quantity}</span>
                    <button class="btn btn-sm btn-outline-secondary ms-2 btn-qty" data-id="${item.id}" data-action="increase">+</button>
                    <button class="btn btn-sm btn-outline-danger ms-3 btn-remove" data-id="${item.id}">×</button>
                </div>
            `;

            cartItemsContainer.appendChild(row);
        });

        // Total
        const total = calcTotal();
        cartTotalEl.textContent = formatCurrency(total);
    }

    // Delegación de eventos para +, -, eliminar
    if (cartItemsContainer) {
        cartItemsContainer.addEventListener('click', (e) => {
            const btn = e.target;

            if (btn.classList.contains('btn-qty')) {
                const id = btn.dataset.id;
                const action = btn.dataset.action;
                if (action === 'increase') {
                    changeQuantity(id, 1);
                } else if (action === 'decrease') {
                    changeQuantity(id, -1);
                }
            }

            if (btn.classList.contains('btn-remove')) {
                const id = btn.dataset.id;
                removeFromCart(id);
            }
        });
    }

    // Botón "Ir al pago" que hace scroll a la sección de checkout
    if (goToCheckoutBtn) {
        goToCheckoutBtn.addEventListener('click', () => {
            const checkoutSection = document.getElementById('checkout');
            if (!checkoutSection) return;
            checkoutSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Envío del formulario de pago (DEMO)
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();

            if (cart.length === 0) {
                alert('Tu carrito está vacío. Añade productos antes de pagar.');
                return;
            }

            // Podrías añadir más validaciones aquí si quieres
            alert('¡Gracias por tu compra!');

            // Limpiar carrito y formulario
            cart = [];
            updateCartUI();
            checkoutForm.reset();

            // Scroll arriba del todo
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Inicializar UI
    updateCartUI();
});

