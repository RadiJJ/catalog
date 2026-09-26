/**
 * КАТАЛОГ ОДЕЖДЫ - MODAN STYLE LOGIC
 * Динамический каталог, корзина, отдельная страница Избранного и оформление заказа
 */

/* 1. ВЕКТОРНЫЕ ИКОНКИ (SVG) */
const SVG_ICONS = {
  heartOutline: `<svg class="icon-svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`,
  heartFilled: `<svg class="icon-svg filled" width="20" height="20" viewBox="0 0 24 24" fill="#C47847" stroke="#C47847" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`,
  cart: `<svg class="icon-svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>`,
  trash: `<svg class="icon-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>`,
  search: `<svg class="icon-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
  close: `<svg class="icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
  checkCircle: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#C47847" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
  location: `<svg class="icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
  phone: `<svg class="icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
  truck: `<svg class="icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>`
};

/* 2. БАЗА ДАННЫХ ТОВАРОВ */
const PRODUCTS_DATA = [
  {
    id: 'cardigan',
    title: 'Шерстяной кардиган',
    category: 'women',
    categoryName: 'Женская одежда',
    price: 78,
    img: 'assets/cardigan.jpg',
    badge: 'Новинка',
    description: 'Мягкий шерстяной кардиган свободного кроя. Изготовлен из высококачественной пряжи с добавлением мериносовой шерсти для максимального тепла и уюта.',
    composition: '80% Шерсть, 20% Акрил',
    care: 'Деликатная стирка при 30°C',
    fit: 'Свободный (Oversize)',
    sizes: ['S', 'M', 'L']
  },
  {
    id: 'palazzo',
    title: 'Брюки палаццо',
    category: 'women',
    categoryName: 'Женская одежда',
    price: 64,
    img: 'assets/palazzo.jpg',
    badge: 'Тренды',
    description: 'Стильные широкие брюки палаццо с высокой посадкой. Элегантные стрелки визуально удлиняют силуэт.',
    composition: '65% Полиэстер, 30% Вискоза, 5% Эластан',
    care: 'Машинная стирка при 40°C',
    fit: 'Высокая посадка',
    sizes: ['XS', 'S', 'M', 'L']
  },
  {
    id: 'coat',
    title: 'Пальто оверсайз',
    category: 'women',
    categoryName: 'Женская одежда',
    price: 99,
    img: 'assets/coat.jpg',
    badge: 'Товар недели',
    description: 'Элегантное пальто прямого кроя из смеси шерсти и кашемира. Спокойный бежевый оттенок, аккуратный лацкан и комфортный силуэт оверсайз.',
    composition: '70% Шерсть, 30% Кашемир',
    care: 'Только химчистка',
    fit: 'Oversize',
    sizes: ['S', 'M', 'L']
  },
  {
    id: 'trench',
    title: 'Базовый тренч',
    category: 'women',
    categoryName: 'Женская одежда',
    price: 145,
    img: 'assets/trench.jpg',
    badge: 'Премиум',
    description: 'Двубортный тренчкот из водоотталкивающей ткани. Классический двубортный фасон с поясом на талии.',
    composition: '100% Хлопок с пропиткой',
    care: 'Химчистка',
    fit: 'Прямой крой с поясом',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'jacket',
    title: 'Демисезонная куртка',
    category: 'men',
    categoryName: 'Мужская одежда',
    price: 135,
    img: 'assets/jacket.jpg',
    badge: 'Новинка',
    description: 'Легкая и теплая демисезонная куртка для мужчин. Ветрозащитная ткань и удобные глубокие карманы.',
    composition: '100% Нейлон, утеплитель холлофайбер',
    care: 'Машинная стирка при 30°C',
    fit: 'Стандартный крой',
    sizes: ['M', 'L', 'XL', 'XXL']
  },
  {
    id: 'hoodie',
    title: 'Оверсайз худи',
    category: 'men',
    categoryName: 'Мужская одежда',
    price: 85,
    img: 'assets/hoodie.jpg',
    badge: 'Хит',
    description: 'Плотное худи из 3-х ниточного футера с начесом. Объёмный капюшон и карман-кенгуру.',
    composition: '80% Хлопок, 20% Полиэстер',
    care: 'Стирка при 30°C выворачивая',
    fit: 'Oversize fit',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'loafers',
    title: 'Кожаные лоферы',
    category: 'shoes',
    categoryName: 'Обувь',
    price: 89,
    img: 'assets/loafers.jpg',
    badge: 'Классика',
    description: 'Классические лоферы из натуральной кожи. Прочная гибкая подошва и мягкая стелька для долгих прогулок.',
    composition: '100% Натуральная кожа',
    care: 'Очистка специальной губкой',
    fit: 'Стандартная полнота',
    sizes: ['37', '38', '39', '40', '41']
  },
  {
    id: 'sneakers',
    title: 'Кожаные кроссовки',
    category: 'shoes',
    categoryName: 'Обувь',
    price: 110,
    img: 'assets/sneakers.jpg',
    badge: 'Must have',
    description: 'Универсальные белые кроссовки из гладкой кожи. Анатомическая стелька и амортизирующая подошва.',
    composition: 'Верх: Кожа, Подошва: ТЭП',
    care: 'Влажная чистка',
    fit: 'Размер в размер',
    sizes: ['38', '39', '40', '41', '42', '43']
  },
  {
    id: 'bag',
    title: 'Сумка-багет',
    category: 'bags',
    categoryName: 'Сумки',
    price: 42,
    img: 'assets/bag.jpg',
    badge: 'Бестселлер',
    description: 'Лаконичная сумка-багет из экокожи с качественной фурнитурой. Идеально дополняет любой повседневный образ.',
    composition: '100% Экокожа',
    care: 'Протирать влажной салфеткой',
    fit: 'Компактный размер',
    sizes: ['One Size']
  },
  {
    id: 'accessory',
    title: 'Шарф из кашемира',
    category: 'bags',
    categoryName: 'Аксессуары',
    price: 35,
    img: 'assets/accessory.jpg',
    badge: 'Уют',
    description: 'Объемный тёплый шарф с бахромой. Невероятно мягкая текстура согреет в холодные дни.',
    composition: '50% Кашемир, 50% Акрил',
    care: 'Ручная стирка',
    fit: '200 x 70 см',
    sizes: ['One Size']
  }
];

/* 3. ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ */
document.addEventListener('DOMContentLoaded', () => {
  initCartCounter();
  initWishlistCounter();
  initCatalogGrid();
  initCategoryFilters();
  initSearch();
  initProductDetailsPage();
  initCartPage();
  initWishlistPage();
});

/* 4. УПРАВЛЕНИЕ КОРЗИНОЙ (localStorage) */
function getCart() {
  const cart = localStorage.getItem('modan_catalog_cart');
  if (cart) {
    try {
      return JSON.parse(cart);
    } catch (e) {
      return [];
    }
  }
  return [
    { id: 'cardigan', title: 'Шерстяной кардиган', price: 78, qty: 1, img: 'assets/cardigan.jpg', size: 'M' },
    { id: 'coat', title: 'Пальто оверсайз', price: 99, qty: 1, img: 'assets/coat.jpg', size: 'M' }
  ];
}

function saveCart(cart) {
  localStorage.setItem('modan_catalog_cart', JSON.stringify(cart));
  updateCartBadge();
}

function updateCartBadge() {
  const cart = getCart();
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  const badges = document.querySelectorAll('.cart-badge');
  badges.forEach(b => {
    b.textContent = totalQty;
    b.style.display = totalQty > 0 ? 'flex' : 'none';
  });
}

function initCartCounter() {
  updateCartBadge();
}

function addToCart(productId, size = 'M', event = null) {
  if (event) event.stopPropagation();

  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const cart = getCart();
  const existingIndex = cart.findIndex(item => item.id === productId && item.size === size);

  if (existingIndex > -1) {
    cart[existingIndex].qty += 1;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      size: size,
      qty: 1,
      img: product.img
    });
  }

  saveCart(cart);
  showToast(`"${product.title}" (${size}) добавлен в корзину!`);
}

/* 5. УПРАВЛЕНИЕ ИЗБРАННЫМ (localStorage) */
function getWishlist() {
  const wishlist = localStorage.getItem('modan_catalog_wishlist');
  return wishlist ? JSON.parse(wishlist) : ['coat', 'bag'];
}

function saveWishlist(wishlist) {
  localStorage.setItem('modan_catalog_wishlist', JSON.stringify(wishlist));
  updateWishlistUI();
}

function toggleWishlist(productId, btnEl = null, event = null) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  let wishlist = getWishlist();
  const index = wishlist.indexOf(productId);
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  const title = product ? product.title : 'Товар';

  if (index > -1) {
    wishlist.splice(index, 1);
    showToast(`"${title}" удален из Избранного`);
  } else {
    wishlist.push(productId);
    showToast(`"${title}" добавлен в Избранное!`);
  }

  saveWishlist(wishlist);

  // Если находимся на странице Избранного, перерендерим список
  const wishlistContainer = document.getElementById('wishlistDynamicGrid');
  if (wishlistContainer) {
    renderWishlistItems();
  }
}

function updateWishlistUI() {
  const wishlist = getWishlist();
  const wishlistBtns = document.querySelectorAll('.btn-wishlist');

  wishlistBtns.forEach(btn => {
    const id = btn.getAttribute('data-id');
    if (id) {
      if (wishlist.includes(id)) {
        btn.innerHTML = SVG_ICONS.heartFilled;
        btn.classList.add('active');
      } else {
        btn.innerHTML = SVG_ICONS.heartOutline;
        btn.classList.remove('active');
      }
    }
  });

  const wishlistBadges = document.querySelectorAll('.wishlist-badge');
  wishlistBadges.forEach(b => {
    b.textContent = wishlist.length;
    b.style.display = wishlist.length > 0 ? 'flex' : 'none';
  });
}

function initWishlistCounter() {
  updateWishlistUI();
}

/* 6. УВЕДОМЛЕНИЯ (Toast) */
function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2300);
}

/* 7. РЕНДЕР И ФИЛЬТРАЦИЯ КАТАЛОГА (index.html) */
function initCatalogGrid() {
  const catalogContainer = document.getElementById('catalogDynamicGrid');
  if (!catalogContainer) return;

  renderProductsGrid(PRODUCTS_DATA);
}

function renderProductsGrid(products) {
  const catalogContainer = document.getElementById('catalogDynamicGrid');
  if (!catalogContainer) return;

  catalogContainer.innerHTML = '';
  const wishlist = getWishlist();

  if (products.length === 0) {
    catalogContainer.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--text-secondary);">
        <p style="font-size: 1.1rem; margin-bottom: 0.5rem;">Ничего не найдено</p>
        <p style="font-size: 0.85rem; color: var(--text-muted);">Попробуйте изменить запрос или выбрать другую категорию</p>
      </div>
    `;
    return;
  }

  products.forEach(product => {
    const isLiked = wishlist.includes(product.id);
    const card = document.createElement('article');
    card.className = 'product-card';
    card.setAttribute('data-category', product.category);

    card.innerHTML = `
      <div class="product-img-wrapper">
        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
        <button class="btn-wishlist ${isLiked ? 'active' : ''}" data-id="${product.id}" onclick="toggleWishlist('${product.id}', this, event)" title="В избранное">
          ${isLiked ? SVG_ICONS.heartFilled : SVG_ICONS.heartOutline}
        </button>
        <a href="product.html?id=${product.id}">
          <img src="${product.img}" alt="${product.title}" class="product-img" loading="lazy">
        </a>
      </div>
      <div class="product-info">
        <div>
          <a href="product.html?id=${product.id}"><h3 class="product-title">${product.title}</h3></a>
          <div class="price-current">${product.price} BYN</div>
        </div>
        <button class="btn-quick-add" onclick="addToCart('${product.id}', '${product.sizes[0]}', event)">
          + В корзину
        </button>
      </div>
    `;

    catalogContainer.appendChild(card);
  });
}

function initCategoryFilters() {
  const filterCards = document.querySelectorAll('.category-card');
  if (filterCards.length === 0) return;

  filterCards.forEach(card => {
    card.addEventListener('click', () => {
      filterCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      const category = card.getAttribute('data-category');
      const searchInput = document.getElementById('searchInput');
      if (searchInput) searchInput.value = '';

      if (category === 'all') {
        renderProductsGrid(PRODUCTS_DATA);
      } else {
        const filtered = PRODUCTS_DATA.filter(p => p.category === category);
        renderProductsGrid(filtered);
      }
    });
  });
}

function initSearch() {
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    const activeCategoryCard = document.querySelector('.category-card.active');
    const category = activeCategoryCard ? activeCategoryCard.getAttribute('data-category') : 'all';

    let list = PRODUCTS_DATA;
    if (category !== 'all') {
      list = list.filter(p => p.category === category);
    }

    if (query) {
      list = list.filter(p => p.title.toLowerCase().includes(query) || p.categoryName.toLowerCase().includes(query));
    }

    renderProductsGrid(list);
  });
}

/* 8. ДИНАМИЧЕСКАЯ СТРАНИЦА ТОВАРА (product.html) */
function initProductDetailsPage() {
  const productContainer = document.getElementById('productDetailContainer');
  if (!productContainer) return;

  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id') || 'coat';
  const product = PRODUCTS_DATA.find(p => p.id === productId) || PRODUCTS_DATA[2];

  document.title = `Каталог | ${product.title}`;

  const breadcrumbEl = document.getElementById('productBreadcrumbs');
  if (breadcrumbEl) {
    breadcrumbEl.innerHTML = `
      <a href="index.html" style="color: var(--text-secondary);">Каталог</a> / 
      <span style="color: var(--text-secondary);">${product.categoryName}</span> / 
      <span>${product.title}</span>
    `;
  }

  const wishlist = getWishlist();
  const isLiked = wishlist.includes(product.id);

  productContainer.innerHTML = `
    <section class="gallery-main">
      ${product.badge ? `<span class="product-badge detail-badge">${product.badge}</span>` : ''}
      <img src="${product.img}" alt="${product.title}">
    </section>

    <section class="detail-content">
      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
        <div>
          <span style="font-size: 0.75rem; color: var(--accent-price); font-weight: 700; text-transform: uppercase;">${product.categoryName}</span>
          <h1 class="detail-title">${product.title}</h1>
        </div>
        <button class="btn-wishlist detail-wishlist-btn ${isLiked ? 'active' : ''}" data-id="${product.id}" onclick="toggleWishlist('${product.id}', this, event)">
          ${isLiked ? SVG_ICONS.heartFilled : SVG_ICONS.heartOutline}
        </button>
      </div>
      
      <div style="font-size: 1.8rem; font-weight: 700; color: var(--accent-price);">
        ${product.price} BYN
      </div>

      <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6;">
        ${product.description}
      </p>

      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <span style="font-size: 0.85rem; font-weight: 600; color: var(--text-primary);">Выберите размер:</span>
        <div class="size-options" id="sizeOptionsGroup">
          ${product.sizes.map((sz, idx) => `
            <button class="size-btn ${idx === 0 ? 'active' : ''}" data-size="${sz}">${sz}</button>
          `).join('')}
        </div>
      </div>

      <div style="margin-top: 0.8rem;">
        <button class="btn-primary" id="detailAddToCartBtn">
          Добавить в корзину — ${product.price} BYN
        </button>
      </div>

      <div class="detail-specs-card">
        <h3 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.6rem;">Характеристики товара</h3>
        <ul class="specs-list">
          <li><strong>Состав:</strong> ${product.composition}</li>
          <li><strong>Уход:</strong> ${product.care}</li>
          <li><strong>Фасон:</strong> ${product.fit}</li>
        </ul>
      </div>
    </section>
  `;

  const sizeBtns = productContainer.querySelectorAll('.size-btn');
  let selectedSize = product.sizes[0];

  sizeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sizeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedSize = btn.getAttribute('data-size');
    });
  });

  const addBtn = document.getElementById('detailAddToCartBtn');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      addToCart(product.id, selectedSize);
    });
  }
}

/* 9. СТРАНИЦА ИЗБРАННОГО (wishlist.html) */
function initWishlistPage() {
  const wishlistContainer = document.getElementById('wishlistDynamicGrid');
  if (!wishlistContainer) return;

  renderWishlistItems();
}

function renderWishlistItems() {
  const wishlistContainer = document.getElementById('wishlistDynamicGrid');
  if (!wishlistContainer) return;

  const wishlistIds = getWishlist();
  const favoriteProducts = PRODUCTS_DATA.filter(p => wishlistIds.includes(p.id));

  wishlistContainer.innerHTML = '';

  if (favoriteProducts.length === 0) {
    wishlistContainer.innerHTML = `
      <div class="empty-cart-card" style="grid-column: 1 / -1;">
        <div class="empty-icon-wrapper" style="color: var(--text-muted); margin-bottom: 0.8rem;">
          ${SVG_ICONS.heartOutline}
        </div>
        <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--text-primary);">Список избранного пуст</h3>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.2rem;">Сохраняйте понравившиеся вещи, нажав на иконку сердечка на карточке товара</p>
        <a href="index.html" class="btn-primary" style="width: auto; padding: 0.7rem 1.8rem;">Перейти в каталог</a>
      </div>
    `;
    return;
  }

  favoriteProducts.forEach(product => {
    const card = document.createElement('article');
    card.className = 'product-card';

    card.innerHTML = `
      <div class="product-img-wrapper">
        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
        <button class="btn-wishlist active" data-id="${product.id}" onclick="toggleWishlist('${product.id}', this, event)" title="Удалить из избранного">
          ${SVG_ICONS.heartFilled}
        </button>
        <a href="product.html?id=${product.id}">
          <img src="${product.img}" alt="${product.title}" class="product-img" loading="lazy">
        </a>
      </div>
      <div class="product-info">
        <div>
          <a href="product.html?id=${product.id}"><h3 class="product-title">${product.title}</h3></a>
          <div class="price-current">${product.price} BYN</div>
        </div>
        <button class="btn-quick-add" onclick="addToCart('${product.id}', '${product.sizes[0]}', event)">
          + В корзину
        </button>
      </div>
    `;

    wishlistContainer.appendChild(card);
  });
}

/* 10. СТРАНИЦА КОРЗИНЫ И ОФОРМЛЕНИЕ ЗАКАЗА (cart.html) */
function initCartPage() {
  const cartListContainer = document.getElementById('cartItemsList');
  if (!cartListContainer) return;

  renderCartItems();

  const checkoutForm = document.getElementById('checkoutForm');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const cart = getCart();
      if (cart.length === 0) {
        showToast('Ваша корзина пуста!');
        return;
      }

      const name = document.getElementById('custName')?.value || 'Покупатель';
      const phone = document.getElementById('custPhone')?.value || '';
      const address = document.getElementById('custAddress')?.value || '';
      const orderId = Math.floor(100000 + Math.random() * 900000);

      showOrderConfirmationModal({
        orderId,
        name,
        phone,
        address,
        items: cart,
        total: calculateCartTotal(cart)
      });

      saveCart([]);
      renderCartItems();
    });
  }
}

function calculateCartTotal(cart) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const delivery = subtotal > 0 ? (subtotal > 150 ? 0 : 7) : 0;
  return subtotal + delivery;
}

function renderCartItems() {
  const cartListContainer = document.getElementById('cartItemsList');
  if (!cartListContainer) return;

  const cart = getCart();
  cartListContainer.innerHTML = '';

  if (cart.length === 0) {
    cartListContainer.innerHTML = `
      <div class="empty-cart-card">
        <div class="empty-icon-wrapper" style="color: var(--text-muted); margin-bottom: 0.8rem;">
          ${SVG_ICONS.cart}
        </div>
        <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--text-primary);">Ваша корзина пуста</h3>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.2rem;">Добавьте понравившиеся вещи из каталога</p>
        <a href="index.html" class="btn-primary" style="width: auto; padding: 0.7rem 1.8rem;">Перейти в каталог</a>
      </div>
    `;
    updateOrderSummary(0);
    return;
  }

  let totalSum = 0;

  cart.forEach((item, index) => {
    totalSum += item.price * item.qty;
    const itemEl = document.createElement('div');
    itemEl.className = 'cart-item';
    itemEl.innerHTML = `
      <img src="${item.img || 'assets/coat.jpg'}" alt="${item.title}" class="cart-item-img">
      <div class="cart-item-info">
        <h4 class="cart-item-title">${item.title}</h4>
        <div class="cart-item-meta">Размер: <span>${item.size || 'M'}</span></div>
        <div class="cart-item-price">${item.price * item.qty} BYN</div>
        <div class="qty-control">
          <button class="qty-btn" onclick="changeQty(${index}, -1)">-</button>
          <span style="font-size: 0.85rem; font-weight: 700;">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
        </div>
      </div>
      <button class="cart-remove-btn" onclick="removeCartItem(${index})" title="Удалить">${SVG_ICONS.close}</button>
    `;
    cartListContainer.appendChild(itemEl);
  });

  updateOrderSummary(totalSum);
}

window.changeQty = function(index, delta) {
  const cart = getCart();
  if (cart[index]) {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
      cart.splice(index, 1);
    }
    saveCart(cart);
    renderCartItems();
  }
};

window.removeCartItem = function(index) {
  const cart = getCart();
  const title = cart[index] ? cart[index].title : 'Товар';
  cart.splice(index, 1);
  saveCart(cart);
  renderCartItems();
  showToast(`"${title}" удален из корзины`);
};

function updateOrderSummary(subtotal) {
  const subtotalEl = document.getElementById('summarySubtotal');
  const deliveryEl = document.getElementById('summaryDelivery');
  const totalEl = document.getElementById('summaryTotal');

  const deliveryCost = subtotal > 0 ? (subtotal > 150 ? 0 : 7) : 0;
  const total = subtotal + deliveryCost;

  if (subtotalEl) subtotalEl.textContent = `${subtotal} BYN`;
  if (deliveryEl) deliveryEl.textContent = deliveryCost === 0 ? (subtotal > 0 ? 'Бесплатно' : '0 BYN') : `${deliveryCost} BYN`;
  if (totalEl) totalEl.textContent = `${total} BYN`;
}

/* 11. МОДАЛЬНОЕ ОКНО ПОДТВЕРЖДЕНИЯ ЗАКАЗА */
function showOrderConfirmationModal(orderData) {
  let modal = document.getElementById('orderModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'orderModal';
    modal.className = 'modal-overlay';
    document.body.appendChild(modal);
  }

  const itemsListHtml = orderData.items.map(it => `
    <div style="display: flex; justify-content: space-between; font-size: 0.85rem; padding: 0.3rem 0; border-bottom: 1px dashed var(--accent-border);">
      <span>${it.title} (${it.size}) × ${it.qty}</span>
      <strong>${it.price * it.qty} BYN</strong>
    </div>
  `).join('');

  modal.innerHTML = `
    <div class="modal-dialog">
      <div class="modal-header">
        <div class="modal-icon">${SVG_ICONS.checkCircle}</div>
        <h2>Заказ #${orderData.orderId} оформлен!</h2>
        <p style="font-size: 0.85rem; color: var(--text-secondary);">Спасибо за ваш заказ, ${orderData.name}!</p>
      </div>

      <div class="modal-body">
        <div class="order-details-box">
          <h4 style="font-size: 0.9rem; font-weight: 700; margin-bottom: 0.5rem;">Состав заказа:</h4>
          ${itemsListHtml}
          <div style="display: flex; justify-content: space-between; font-size: 1rem; font-weight: 800; color: var(--accent-price); margin-top: 0.8rem; padding-top: 0.5rem; border-top: 1px solid var(--accent-border);">
            <span>Итого к оплате:</span>
            <span>${orderData.total} BYN</span>
          </div>
        </div>

        <div style="font-size: 0.82rem; color: var(--text-secondary); background: var(--bg-primary); padding: 0.8rem; border-radius: var(--radius-md); display: flex; flex-direction: column; gap: 0.3rem;">
          <div>${SVG_ICONS.location} <strong>Доставка:</strong> ${orderData.address}</div>
          <div>${SVG_ICONS.phone} <strong>Телефон:</strong> ${orderData.phone}</div>
          <div>${SVG_ICONS.truck} <strong>Ориентировочная дата:</strong> завтра с 10:00 до 18:00</div>
        </div>
      </div>

      <button class="btn-primary" style="margin-top: 1rem;" onclick="closeOrderModal()">
        Отлично, вернуться в каталог
      </button>
    </div>
  `;

  modal.classList.add('show');
}

window.closeOrderModal = function() {
  const modal = document.getElementById('orderModal');
  if (modal) {
    modal.classList.remove('show');
    window.location.href = 'index.html';
  }
};
