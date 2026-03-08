const products = [
    {
        id: 1,
        name: "Camo Aari Jorts",
        price: 265.00,
        currency: "USD",
        image: "images/product-1.jpg",
        category: "bottoms",
        soldOut: true,
        stripeLink: "https://buy.stripe.com/YOUR_PAYMENT_LINK_1"
    },
    {
        id: 2,
        name: "Limited Edition Zardozi x Denim Zip Up",
        price: 444.00,
        currency: "USD",
        image: "images/product-2.jpg",
        category: "outerwear",
        soldOut: true,
        stripeLink: "https://buy.stripe.com/YOUR_PAYMENT_LINK_2"
    },
    {
        id: 3,
        name: "Embroidered Wide Leg Pants",
        price: 320.00,
        currency: "USD",
        image: "images/product-3.jpg",
        category: "bottoms",
        soldOut: false,
        stripeLink: "https://buy.stripe.com/YOUR_PAYMENT_LINK_3"
    },
    {
        id: 4,
        name: "Floral Embroidered Hoodie",
        price: 385.00,
        currency: "USD",
        image: "images/product-4.jpg",
        category: "outerwear",
        soldOut: false,
        stripeLink: "https://buy.stripe.com/YOUR_PAYMENT_LINK_4"
    }
];

function formatPrice(price, currency) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency
    }).format(price);
}

function createProductCard(product) {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.setAttribute('data-category', product.category);
    card.setAttribute('data-available', !product.soldOut);

    const imageWrapper = document.createElement('div');
    imageWrapper.className = 'product-image-wrapper';

    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.name;
    img.className = 'product-image';
    img.loading = 'lazy';
    imageWrapper.appendChild(img);

    if (product.soldOut) {
        const badge = document.createElement('span');
        badge.className = 'product-badge';
        badge.textContent = 'SOLD OUT';
        badge.setAttribute('aria-label', 'This item is sold out');
        imageWrapper.appendChild(badge);
    }

    const info = document.createElement('div');
    info.className = 'product-info';

    const name = document.createElement('h2');
    name.className = 'product-name';
    name.textContent = product.name;

    const price = document.createElement('p');
    price.className = 'product-price';
    price.textContent = formatPrice(product.price, product.currency);

    const buyButton = document.createElement('button');
    buyButton.className = 'btn btn-buy';
    buyButton.textContent = product.soldOut ? 'Sold Out' : 'Buy Now';
    buyButton.disabled = product.soldOut;
    buyButton.setAttribute('aria-label', product.soldOut 
        ? `${product.name} is sold out` 
        : `Buy ${product.name} for ${formatPrice(product.price, product.currency)}`);
    
    if (!product.soldOut) {
        buyButton.addEventListener('click', () => {
            window.location.href = product.stripeLink;
        });
    }

    info.appendChild(name);
    info.appendChild(price);
    info.appendChild(buyButton);

    card.appendChild(imageWrapper);
    card.appendChild(info);

    return card;
}

function renderProducts(productsToRender) {
    const grid = document.querySelector('.products-grid');
    if (!grid) return;

    grid.innerHTML = '';
    productsToRender.forEach(product => {
        grid.appendChild(createProductCard(product));
    });
}

function filterProducts() {
    const categoryCheckboxes = document.querySelectorAll('input[name="category"]:checked');
    const availabilityCheckboxes = document.querySelectorAll('input[name="availability"]:checked');

    const selectedCategories = Array.from(categoryCheckboxes).map(cb => cb.value);
    const selectedAvailability = Array.from(availabilityCheckboxes).map(cb => cb.value);

    let filtered = products;

    if (selectedCategories.length > 0) {
        filtered = filtered.filter(p => selectedCategories.includes(p.category));
    }

    if (selectedAvailability.length > 0) {
        filtered = filtered.filter(p => {
            if (selectedAvailability.includes('available') && !p.soldOut) return true;
            if (selectedAvailability.includes('sold-out') && p.soldOut) return true;
            return false;
        });
    }

    renderProducts(filtered);
}

function initFilterPanel() {
    const filterBtn = document.querySelector('.filter-btn');
    const filterPanel = document.getElementById('filter-panel');
    
    if (!filterBtn || !filterPanel) return;

    filterBtn.addEventListener('click', () => {
        const isExpanded = filterBtn.getAttribute('aria-expanded') === 'true';
        filterBtn.setAttribute('aria-expanded', !isExpanded);
        filterPanel.hidden = isExpanded;
    });

    const checkboxes = filterPanel.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterProducts);
    });
}

function initViewToggle() {
    const viewBtns = document.querySelectorAll('.view-btn');
    const productsGrid = document.querySelector('.products-grid');
    
    if (!viewBtns.length || !productsGrid) return;

    viewBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            viewBtns.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-pressed', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-pressed', 'true');

            const view = btn.getAttribute('data-view');
            if (view === 'list') {
                productsGrid.classList.add('list-view');
            } else {
                productsGrid.classList.remove('list-view');
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.products-grid')) {
        renderProducts(products);
        initFilterPanel();
        initViewToggle();
    }
});
