document.addEventListener('DOMContentLoaded', () => {
  /* Smooth scroll para anchors, EXCEPTO el link del carrito */
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

  /* Scroll reveal: header, products, footer columns */
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
});

document.addEventListener('DOMContentLoaded', () => {
    // Elementos del DOM
    const cartCountEl = document.getElementById('cart-count');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalEl = document.getElementById('cart-total');
    const cartEmptyEl = document.getElementById('cart-empty');
    const goToCheckoutBtn = document.getElementById('go-to-checkout');
    const checkoutForm = document.getElementById('checkout-form');


    const cartSection = document.getElementById('cart');
    const cartToggleLink = document.querySelector('.js-open-cart');
    const cartCloseBtn = document.querySelector('.cart-close'); 

    if (cartCloseBtn && cartSection) {
    cartCloseBtn.addEventListener('click', () => {
        cartSection.classList.remove('cart--open'); // Cierra el slide
    });
}

    // --- TOGGLE SLIDE-UP DEL CARRITO ---
    if (cartToggleLink && cartSection) {
        cartToggleLink.addEventListener('click', (e) => {
            e.preventDefault();
            cartSection.classList.toggle('cart--open'); // clase que pusimos en el CSS
        });
    }

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
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountEl.textContent = totalItems;

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

        const total = calcTotal();
        cartTotalEl.textContent = formatCurrency(total);
    }

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

            alert('¡Gracias por tu compra!');

            cart = [];
            updateCartUI();
            checkoutForm.reset();

            // Opcional: cerrar el carrito tras la compra
            if (cartSection) {
                cartSection.classList.remove('cart--open');
            }

            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Inicializar UI
    updateCartUI();
});
