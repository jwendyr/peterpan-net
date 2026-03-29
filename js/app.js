// ── Utilities ──
function formatCurrency(n) {
  if (!n && n !== 0) return 'N/A';
  return '$' + n.toLocaleString('en-US');
}

function formatSqft(n) {
  if (!n) return 'N/A';
  return n.toLocaleString('en-US') + ' sqft';
}

// ── Stats Bar (shared across pages) ──
function renderStats() {
  const el = document.getElementById('statsGrid');
  if (!el) return;
  const S = PORTFOLIO_STATS;
  el.innerHTML = `
    <div class="stat-item">
      <h3>${S.totalParcels}</h3>
      <p>Parcels Across ${S.cities} Cities</p>
    </div>
    <div class="stat-item">
      <h3>${formatCurrency(S.totalEstimatedValue)}</h3>
      <p>Portfolio Market Value</p>
    </div>
    <div class="stat-item">
      <h3>${formatCurrency(S.totalEquity)}</h3>
      <p>Total Equity Built</p>
    </div>
    <div class="stat-item">
      <h3>${(S.totalLandSqft / 43560).toFixed(1)} acres</h3>
      <p>Total Land Holdings</p>
    </div>
  `;
}

// ── Property Card Renderer (uses Google Maps satellite view) ──
function createPropertyCard(prop) {
  const card = document.createElement('a');
  card.href = `/property.html?id=${prop.id}`;
  card.className = 'property-card';
  card.dataset.category = prop.category;
  card.dataset.city = prop.city.toLowerCase();
  card.dataset.search = `${prop.address} ${prop.city} ${prop.county} ${prop.title} ${prop.type}`.toLowerCase();

  // Use real property image if available, otherwise Google Maps satellite
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d400!2d${prop.coords.lng}!3d${prop.coords.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus`;

  const imageHtml = prop.image
    ? `<img src="${prop.image}" alt="${prop.title}" loading="lazy" style="width:100%;height:100%;object-fit:cover;">`
    : `<iframe src="${mapSrc}" style="width:100%;height:100%;border:0;pointer-events:none;" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Map of ${prop.address}"></iframe>`;

  card.innerHTML = `
    <div class="card-image" style="position:relative;">
      ${imageHtml}
      <span class="card-badge ${prop.category}">${prop.category.replace('-', ' ')}</span>
      <span class="card-status">${prop.status}</span>
    </div>
    <div class="card-body">
      <h3>${prop.title}</h3>
      <div class="card-location">${prop.address}, ${prop.city}, ${prop.state} ${prop.zip}</div>
      <div class="card-details">
        ${prop.beds ? `<div class="card-detail"><strong>${prop.beds} bd / ${prop.baths} ba</strong>Beds/Baths</div>` : ''}
        <div class="card-detail">
          <strong>${formatSqft(prop.buildingSqft)}</strong>
          Building
        </div>
        <div class="card-detail card-value">
          <strong>${formatCurrency(prop.estimatedValue)}</strong>
          Est. Value
        </div>
      </div>
    </div>
  `;
  return card;
}

// ── Featured Properties (Homepage) ──
function renderFeatured() {
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;
  const featured = ACTIVE_PROPERTIES.filter(p => p.highlight);
  featured.forEach(p => grid.appendChild(createPropertyCard(p)));
}

// ── All Properties Page ──
let currentFilter = 'all';
let currentSearch = '';

function renderAllProperties() {
  const grid = document.getElementById('propertyGrid');
  if (!grid) return;

  grid.innerHTML = '';
  let count = 0;

  ACTIVE_PROPERTIES.forEach(p => {
    const matchesFilter = currentFilter === 'all' || p.category === currentFilter;
    const matchesSearch = !currentSearch ||
      `${p.address} ${p.city} ${p.county} ${p.title} ${p.type}`.toLowerCase().includes(currentSearch);

    if (matchesFilter && matchesSearch) {
      grid.appendChild(createPropertyCard(p));
      count++;
    }
  });

  const noResults = document.getElementById('noResults');
  if (noResults) {
    noResults.style.display = count === 0 ? 'block' : 'none';
  }
}

function resetFilters() {
  currentFilter = 'all';
  currentSearch = '';
  const input = document.getElementById('searchInput');
  if (input) input.value = '';
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.filter === 'all');
  });
  renderAllProperties();
}

function initFilters() {
  const filterBar = document.getElementById('filterBar');
  if (!filterBar) return;

  filterBar.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    currentFilter = btn.dataset.filter;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderAllProperties();
  });

  const search = document.getElementById('searchInput');
  if (search) {
    search.addEventListener('input', (e) => {
      currentSearch = e.target.value.toLowerCase().trim();
      renderAllProperties();
    });
  }
}

// ── Portfolio Map (all properties with markers) ──
function renderPortfolioMap() {
  const container = document.getElementById('portfolioMap');
  if (!container) return;

  // Build a Google Maps embed with all property locations using My Maps embed
  // Center on Kansas at a good zoom level
  const centerLat = 38.75;
  const centerLng = -96.85;

  // Use a single embed centered on the portfolio area
  container.innerHTML = `<iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d400000!2d${centerLng}!3d${centerLat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus"
    style="width:100%;height:100%;border:0;border-radius:12px;"
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    title="Peterpan Corp Portfolio - Kansas"></iframe>`;
}

// ── Back to Top ──
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });
}

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  renderStats();
  renderFeatured();
  renderAllProperties();
  initFilters();
  initBackToTop();
  renderPortfolioMap();
});
