/* ============================================
   LUXELIVING INTERIORS — Interactive Logic
   ============================================ */

/* ---------- Product Data ---------- */
const products = [
  {
    id: 1,
    name: 'Aria Lounge Sofa',
    category: 'sofas',
    price: 3200,
    image: 'https://images.pexels.com/photos/8135275/pexels-photo-8135275.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'A luxurious beige sofa with plush cushions, handcrafted for ultimate comfort and timeless elegance.',
  },
  {
    id: 2,
    name: 'Velvet Noir Sofa',
    category: 'sofas',
    price: 2850,
    image: 'https://images.pexels.com/photos/8135267/pexels-photo-8135267.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Sophisticated velvet upholstery with deep seating, designed to be the centerpiece of any room.',
  },
  {
    id: 3,
    name: 'Nordic Accent Chair',
    category: 'armchairs',
    price: 980,
    image: 'https://images.pexels.com/photos/12269764/pexels-photo-12269764.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'A stylish brown armchair with clean lines, perfect for modern and transitional interiors.',
  },
  {
    id: 4,
    name: 'Verde Lounge Chair',
    category: 'armchairs',
    price: 1250,
    image: 'https://images.pexels.com/photos/35632442/pexels-photo-35632442.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'A sculptural armchair in a minimalist design, bringing warmth and character to any space.',
  },
  {
    id: 5,
    name: 'Heritage Oak Dining Table',
    category: 'tables',
    price: 2400,
    image: 'https://images.pexels.com/photos/11112739/pexels-photo-11112739.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'An elegant solid oak dining table showcasing natural grain and minimalist craftsmanship.',
  },
  {
    id: 6,
    name: 'Marble Dining Table',
    category: 'tables',
    price: 3100,
    image: 'https://images.pexels.com/photos/39828896/pexels-photo-39828896.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'A stunning marble table with a chic base, elevating every dining experience.',
  },
  {
    id: 7,
    name: 'Serenity Coffee Table',
    category: 'tables',
    price: 760,
    image: 'https://images.pexels.com/photos/32246936/pexels-photo-32246936.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'A minimalist coffee table with warm earth tones, designed for modern living spaces.',
  },
  {
    id: 8,
    name: 'Contour Lounge Chair',
    category: 'armchairs',
    price: 1100,
    image: 'https://images.pexels.com/photos/25857376/pexels-photo-25857376.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'A modern armchair with sleek contours and soft lighting, crafted for refined relaxation.',
  },
  {
    id: 9,
    name: 'Lumiere Floor Lamp',
    category: 'lighting',
    price: 620,
    image: 'https://images.pexels.com/photos/38014632/pexels-photo-38014632.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'A contemporary wooden floor lamp with soft ambient lighting for minimalist interiors.',
  },
  {
    id: 10,
    name: 'Brass Vintage Lamp',
    category: 'lighting',
    price: 480,
    image: 'https://images.pexels.com/photos/10531005/pexels-photo-10531005.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'A vintage brass floor lamp with a decorative beaded shade, exuding classic elegance.',
  },
  {
    id: 11,
    name: 'Aurora Platform Bed',
    category: 'bedroom',
    price: 2100,
    image: 'https://images.pexels.com/photos/33314768/pexels-photo-33314768.png?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'A luxurious minimalist platform bed with soft lighting for a cozy, serene atmosphere.',
  },
  {
    id: 12,
    name: 'Tranquility Bedroom Suite',
    category: 'bedroom',
    price: 3650,
    image: 'https://images.pexels.com/photos/19672569/pexels-photo-19672569.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'An elegant modern bedroom suite featuring luxury furnishing and soft ambient lighting.',
  },
];

const DEMO_MESSAGE =
  'This is a live demonstration portfolio example created to showcase web development skills. For custom projects, the actual content and backend functionality will be tailored to your specific requirements.';

/* ---------- State ---------- */
let activeCategory = 'all';
let searchQuery = '';

/* ---------- DOM References ---------- */
const productGrid = document.getElementById('productGrid');
const noResults = document.getElementById('noResults');
const filterBar = document.getElementById('filterBar');
const searchInput = document.getElementById('searchInput');
const demoModal = document.getElementById('demoModal');
const modalMessage = document.getElementById('modalMessage');
const modalClose = document.getElementById('modalClose');
const modalConfirm = document.getElementById('modalConfirm');
const siteHeader = document.getElementById('siteHeader');
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const newsletterForm = document.getElementById('newsletterForm');

/* ---------- Render Products ---------- */
function renderProducts() {
  const filtered = products.filter((p) => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      q === '' ||
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    productGrid.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }

  noResults.style.display = 'none';

  productGrid.innerHTML = filtered
    .map(
      (p, i) => `
      <article class="product-card" style="animation-delay: ${i * 60}ms">
        <div class="product-image-wrap">
          <img src="${p.image}" alt="${p.name}" loading="lazy" />
          <span class="product-badge">${capitalize(p.category)}</span>
        </div>
        <div class="product-info">
          <h3 class="product-name">${p.name}</h3>
          <p class="product-desc">${p.description}</p>
          <p class="product-price">$${p.price.toLocaleString()}</p>
          <div class="product-actions">
            <button class="btn-cart" data-demo>Add to Cart</button>
            <button class="btn-buy" data-demo>Buy Now</button>
          </div>
        </div>
      </article>`
    )
    .join('');

  // Re-bind demo triggers on the newly rendered buttons
  bindDemoTriggers();
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/* ---------- Category Filter ---------- */
filterBar.addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;

  document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
  btn.classList.add('active');
  activeCategory = btn.dataset.category;
  renderProducts();
});

/* ---------- Search ---------- */
searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value;
  renderProducts();
});

/* ---------- Demo Modal ---------- */
function openDemoModal() {
  modalMessage.textContent = DEMO_MESSAGE;
  demoModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDemoModal() {
  demoModal.classList.remove('open');
  document.body.style.overflow = '';
}

function bindDemoTriggers() {
  document.querySelectorAll('[data-demo]').forEach((el) => {
    // Avoid double-binding
    if (el.dataset.demoBound) return;
    el.dataset.demoBound = 'true';

    el.addEventListener('click', (e) => {
      e.preventDefault();
      openDemoModal();
      // Close mobile menu if open
      mobileMenu.classList.remove('open');
    });
  });
}

modalClose.addEventListener('click', closeDemoModal);
modalConfirm.addEventListener('click', closeDemoModal);
demoModal.addEventListener('click', (e) => {
  if (e.target === demoModal) closeDemoModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && demoModal.classList.contains('open')) {
    closeDemoModal();
  }
});

/* ---------- Newsletter Form ---------- */
newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  openDemoModal();
  newsletterForm.reset();
});

/* ---------- Header Scroll Effect ---------- */
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    siteHeader.classList.add('scrolled');
  } else {
    siteHeader.classList.remove('scrolled');
  }
});

/* ---------- Mobile Menu Toggle ---------- */
menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

/* ---------- Footer Year ---------- */
document.getElementById('currentYear').textContent = new Date().getFullYear();

/* ---------- Init ---------- */
renderProducts();
bindDemoTriggers();
