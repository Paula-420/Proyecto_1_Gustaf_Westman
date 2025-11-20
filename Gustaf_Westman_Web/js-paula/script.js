const CART_STORAGE_KEY = 'gw_cart';

function loadCartFromStorage() {
  try {
    const data = localStorage.getItem(CART_STORAGE_KEY);
    if (!data) return [];
    const parsed = JSON.parse(data);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch (err) {
    console.error('Error leyendo el carrito de localStorage', err);
    return [];
  }
}

function saveCartToStorage(cart) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (err) {
    console.error('Error guardando el carrito en localStorage', err);
  }
}

// Un solo DOMContentLoaded para todo
document.addEventListener('DOMContentLoaded', () => {
  initSmoothScrollAndAnimations();
  initCartAndSlideUp();
  initNewsletterModal();
});

// =============================
// 1) SMOOTH SCROLL + ANIMACIONES
// =============================
function initSmoothScrollAndAnimations() {
  // Smooth scroll para anchors, EXCEPTO el link del carrito
  document.querySelectorAll('a[href^="#"]:not(.js-open-cart)').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Scroll reveal: header/catalogo/productos/footer
  const toAnimate = document.querySelectorAll(
    '.catalog-header, .product, .footer__brand, .footer__column'
  );

  toAnimate.forEach(el => el.classList.add('animate-on-scroll'));

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    toAnimate.forEach(el => observer.observe(el));
  } else {
    // fallback
    toAnimate.forEach(el => el.classList.add('is-visible'));
  }
}

// =============================
// 2) CARRITO + SLIDE-UP + PAGO
// =============================
function initCartAndSlideUp() {
  // Elementos del DOM (pueden no existir en algunas páginas)
  const cartCountEl        = document.getElementById('cart-count');
  const cartItemsContainer = document.getElementById('cart-items');
  const cartTotalEl        = document.getElementById('cart-total');
  const cartEmptyEl        = document.getElementById('cart-empty');
  const goToCheckoutBtn    = document.getElementById('go-to-checkout');
  const checkoutForm       = document.getElementById('checkout-form');

  const cartSection    = document.getElementById('cart');
  const cartToggleLink = document.querySelector('.js-open-cart');
  const cartCloseBtn   = cartSection ? cartSection.querySelector('.btn-close') : null;

  // Botón scroll to top (existe en ambas páginas)
  const scrollBtn   = document.getElementById("scrollToTopBtn");
  const scrollBadge = document.getElementById("scrollToTopBadge");

  // Listener de scroll-to-top
  if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Abrir / cerrar carrito desde el icono del header
  if (cartToggleLink && cartSection) {
    cartToggleLink.addEventListener('click', (e) => {
      e.preventDefault();
      cartSection.classList.toggle('cart--open');
    });
  }

  // Cerrar carrito con el botón .btn-close de Bootstrap
  if (cartCloseBtn && cartSection) {
    cartCloseBtn.addEventListener('click', () => {
      cartSection.classList.remove('cart--open');
    });
  }

  // Estado del carrito (persistente entre páginas)
  let cart = loadCartFromStorage();

  // Añadir listeners a los botones "add to cart"
  const productElements = document.querySelectorAll('.product');
  productElements.forEach(productEl => {
    const addBtn = productEl.querySelector('.add-cart');
    if (!addBtn) return;

    addBtn.addEventListener('click', () => {
      const id    = productEl.dataset.id;
      const name  = productEl.dataset.name;
      const price = parseFloat(productEl.dataset.price);
      const img   = productEl.dataset.img;

      addToCart({ id, name, price, img });
    });
  });

  function addToCart(product) {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
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
      cart = cart.filter(i => i.id !== id);
    }
    updateCartUI();
  }

  function calcTotal() {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  function formatCurrency(value) {
    return value.toLocaleString('es-ES', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }) + ' €';
  }

  function updateCartUI() {
    saveCartToStorage(cart);

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCountEl) {
      cartCountEl.textContent = totalItems;
    }

    // === LÓGICA DEL BOTÓN SCROLL-TO-TOP ===
    if (scrollBtn && scrollBadge) {
      scrollBadge.textContent = totalItems;

      if (totalItems > 0) {
        scrollBtn.classList.add("show");
        scrollBtn.classList.remove("hide");
        scrollBtn.classList.remove("btn-dark");
        scrollBtn.classList.add("btn-warning");

        scrollBtn.classList.add("pulse-animation");
        setTimeout(() => {
          scrollBtn.classList.remove("pulse-animation");
        }, 800);
      } else {
        scrollBtn.classList.add("hide");
        scrollBtn.classList.remove("show");
        scrollBtn.classList.remove("btn-warning");
        scrollBtn.classList.add("btn-dark");
      }
    }
    // === FIN SCROLL-TO-TOP ===

    // Carrito vacío
    if (!cart.length) {
      if (cartEmptyEl)         cartEmptyEl.style.display = 'block';
      if (cartItemsContainer)  cartItemsContainer.innerHTML = '';
      if (cartTotalEl)         cartTotalEl.textContent = '0,00 €';
      if (goToCheckoutBtn)     goToCheckoutBtn.disabled = true;
      return;
    } else {
      if (cartEmptyEl)     cartEmptyEl.style.display = 'none';
      if (goToCheckoutBtn) goToCheckoutBtn.disabled = false;
    }

    // Pintar items del carrito
    if (cartItemsContainer) {
      cartItemsContainer.innerHTML = '';

      cart.forEach(item => {
        const row = document.createElement('div');
        row.classList.add(
          'cart-item',
          'd-flex',
          'align-items-center',
          'justify-content-between',
          'border-bottom',
          'py-2'
        );

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
    }

    const total = calcTotal();
    if (cartTotalEl) {
      cartTotalEl.textContent = formatCurrency(total);
    }
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

  // Botón "Ir al pago"
  if (goToCheckoutBtn) {
    goToCheckoutBtn.addEventListener('click', () => {
      if (!cart.length) return;
      window.location.href = 'pago.html';
    });
  }

  // Envío del formulario de pago
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!cart.length) {
        alert('Tu carrito está vacío. Añade productos antes de pagar.');
        return;
      }

      alert('¡Gracias por tu compra!');

      cart = [];
      updateCartUI();
      checkoutForm.reset();

      if (cartSection) {
        cartSection.classList.remove('cart--open');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Inicializar UI al cargar la página (coge lo de localStorage)
  updateCartUI();
}

// ==========================
// 3) MODAL BOOTSTRAP (newsletter)
// ==========================
function initNewsletterModal() {
  const newsletterForm = document.getElementById("newsletter-form");
  if (!newsletterForm) return;

  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const modalElement = document.getElementById("newsletterSuccessModal");
    if (!modalElement) return;

    const modal = new bootstrap.Modal(modalElement);
    modal.show();

    newsletterForm.reset();
  });
}
