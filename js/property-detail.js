// ── Property Detail Page Logic ──
(function () {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  if (!id) { window.location.href = '/properties.html'; return; }

  const prop = PROPERTIES.find(p => p.id === id);
  if (!prop) { window.location.href = '/properties.html'; return; }

  // Page meta
  document.getElementById('pageTitle').textContent = `${prop.title} — ${prop.address}, ${prop.city} | Peterpan Corp`;
  document.getElementById('pageDesc').content = prop.description.substring(0, 160);

  // Breadcrumb
  document.getElementById('breadcrumbTitle').textContent = prop.title;

  // Hero — use real property image if available, otherwise satellite view
  const heroEl = document.getElementById('propertyHero');
  const heroContent = prop.image
    ? `<img src="${prop.image}" alt="${prop.title}" style="width:100%;height:100%;object-fit:cover;">`
    : `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d300!2d${prop.coords.lng}!3d${prop.coords.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus"
        style="width:100%;height:100%;border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
        title="Satellite view of ${prop.address}"></iframe>`;
  heroEl.innerHTML = `
    ${heroContent}
    <div class="property-hero-overlay">
      <div class="container">
        <h1 id="heroTitle">${prop.title}</h1>
        <p id="heroSubtitle">${prop.address}, ${prop.city}, ${prop.state} ${prop.zip}</p>
      </div>
    </div>
  `;

  // Badges
  document.getElementById('typeBadge').textContent = prop.category.replace('-', ' ');
  document.getElementById('typeBadge').className = `card-badge ${prop.category}`;
  document.getElementById('typeBadge').style.position = 'static';
  document.getElementById('statusBadge').textContent = prop.status;
  document.getElementById('fullAddress').innerHTML = `
    <i class="fas fa-map-marker-alt" style="color:var(--green-600);"></i>
    ${prop.address}, ${prop.city}, ${prop.state} ${prop.zip} &bull; ${prop.county} County
    &nbsp;
    <a href="${getGoogleMapsLink(prop)}" target="_blank" rel="noopener" style="font-size:0.8rem;color:var(--green-600);">
      <i class="fas fa-external-link-alt"></i> Open in Google Maps
    </a>
  `;

  // Description
  document.getElementById('description').textContent = prop.description;

  // Included parcels (grouped properties)
  if (prop.includedParcels && prop.includedParcels.length > 0) {
    const parcelsHtml = `
      <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:12px;padding:20px;margin:20px 0;">
        <h4 style="color:#166534;font-size:0.95rem;margin-bottom:12px;">
          <i class="fas fa-layer-group" style="margin-right:6px;"></i>
          Included Parcels (${prop.includedParcels.length + 1} total)
        </h4>
        <div style="font-size:0.82rem;color:#166534;margin-bottom:12px;">This listing includes ${prop.includedParcels.length} adjacent parcel${prop.includedParcels.length > 1 ? 's' : ''} managed as one unit:</div>
        ${prop.includedParcels.map(p => `
          <div style="background:white;padding:10px 14px;border-radius:8px;margin-bottom:8px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
            <div>
              <strong style="color:#0f172a;font-size:0.88rem;">${p.address}</strong>
              <span style="color:#64748b;font-size:0.8rem;margin-left:8px;">${p.use}</span>
            </div>
            <div style="display:flex;gap:12px;font-size:0.78rem;color:#475569;">
              ${p.building ? '<span>' + p.building.toLocaleString() + ' sqft bldg</span>' : ''}
              <span>${p.sqft.toLocaleString()} sqft lot</span>
              ${p.assessed ? '<span>Assessed: $' + p.assessed.toLocaleString() + '</span>' : ''}
            </div>
          </div>
        `).join('')}
      </div>`;
    document.getElementById('description').insertAdjacentHTML('afterend', parcelsHtml);
  }

  // Mission
  document.getElementById('missionText').textContent = prop.mission;

  // Features
  const featureList = document.getElementById('featureList');
  prop.features.forEach(f => {
    const li = document.createElement('li');
    li.textContent = f;
    featureList.appendChild(li);
  });

  // Sidebar values
  document.getElementById('estimatedValue').textContent = formatCurrency(prop.estimatedValue);
  document.getElementById('purchasePrice').textContent = formatCurrency(prop.purchasePrice);
  document.getElementById('taxAssessed').textContent = formatCurrency(prop.taxAssessed);
  document.getElementById('annualTax').textContent = formatCurrency(prop.annualTax);

  const equity = prop.estimatedValue - prop.purchasePrice;
  document.getElementById('equitySpread').textContent = '+' + formatCurrency(equity);

  document.getElementById('buildingSqft').textContent = formatSqft(prop.buildingSqft);
  document.getElementById('landSqft').textContent = formatSqft(prop.landSqft);
  document.getElementById('yearBuilt').textContent = prop.yearBuilt;
  document.getElementById('county').textContent = prop.county;

  // Value metrics
  const pricePerSqft = prop.buildingSqft ? Math.round(prop.estimatedValue / prop.buildingSqft) : 0;
  document.getElementById('pricePerSqft').textContent = formatCurrency(pricePerSqft);
  document.getElementById('taxMonthly').textContent = formatCurrency(Math.round(prop.annualTax / 12));

  // Financial table
  const tbody = document.getElementById('financialBody');
  const rows = [
    ['Estimated Market Value', formatCurrency(prop.estimatedValue)],
    ['Original Purchase Price', formatCurrency(prop.purchasePrice)],
    ['County Tax Assessment', formatCurrency(prop.taxAssessed)],
    ['Annual Property Tax', formatCurrency(prop.annualTax)],
    ['Monthly Tax Cost', formatCurrency(Math.round(prop.annualTax / 12))],
    ['Building Area', formatSqft(prop.buildingSqft)],
    ['Land Area', formatSqft(prop.landSqft)],
    ['Total Lot Size', formatSqft(prop.totalSqft)],
    ['Price per SqFt (Building)', formatCurrency(pricePerSqft)],
    ['Year Built', prop.yearBuilt],
    ['County', prop.county + ' County, Kansas'],
    ['Property Type', prop.type],
    ['Current Status', prop.status],
    ['Equity Spread', '+' + formatCurrency(equity)],
    ['GPS Coordinates', `${prop.coords.lat.toFixed(6)}, ${prop.coords.lng.toFixed(6)}`]
  ];

  rows.forEach(([label, value]) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td style="font-weight:500;color:var(--slate-700);">${label}</td><td>${value}</td>`;
    tbody.appendChild(tr);
  });

  // Legal description
  document.getElementById('legalDesc').textContent = prop.legalDesc;

  // Location Map — interactive Google Maps centered on property with street map view
  const mapContainer = document.getElementById('mapContainer');
  if (prop.coords) {
    mapContainer.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1500!2d${prop.coords.lng}!3d${prop.coords.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus"
        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
        style="width:100%;height:100%;border:0;border-radius:var(--radius-lg);"
        title="Street map of ${prop.address}, ${prop.city}"></iframe>`;
  } else {
    mapContainer.innerHTML = `<p style="color:var(--slate-500);text-align:center;padding:40px;">Map not available for this location</p>`;
  }

  // Strategy section
  const strategy = (typeof PROPERTY_STRATEGIES !== 'undefined') ? PROPERTY_STRATEGIES[id] : null;
  const stratEl = document.getElementById('strategySection');
  if (strategy && stratEl) {
    let html = `<div style="margin-bottom:20px;">
      <h3 style="font-size:1.3rem;color:var(--green-800);margin-bottom:4px;">${strategy.vision}</h3>
      <p style="font-size:0.9rem;color:var(--slate-500);">Total Potential Funding: <strong style="color:var(--green-700);">${strategy.totalFunding}</strong></p>
    </div>`;

    strategy.phases.forEach((phase, i) => {
      html += `<div style="background:#fff;border-radius:12px;padding:20px 24px;margin-bottom:16px;box-shadow:0 2px 8px rgba(0,0,0,0.05);border-left:4px solid ${['#059669','#2563eb','#d97706'][i] || '#059669'};">
        <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:10px;flex-wrap:wrap;gap:8px;">
          <h4 style="font-family:'Inter',sans-serif;font-size:1rem;color:#0f172a;margin:0;">
            <span style="background:${['#ecfdf5','#dbeafe','#fef3c7'][i] || '#ecfdf5'};color:${['#059669','#2563eb','#d97706'][i] || '#059669'};padding:2px 10px;border-radius:100px;font-size:0.72rem;font-weight:700;margin-right:8px;">PHASE ${i+1}</span>
            ${phase.name}
          </h4>
          <div style="display:flex;gap:12px;flex-shrink:0;">
            <span style="font-size:0.78rem;color:var(--slate-500);"><i class="fas fa-clock" style="margin-right:3px;"></i>${phase.timeline}</span>
            <span style="font-size:0.78rem;color:var(--green-700);font-weight:600;"><i class="fas fa-dollar-sign" style="margin-right:3px;"></i>${phase.cost}</span>
          </div>
        </div>
        <ul style="list-style:none;padding:0;margin:0 0 10px;">
          ${phase.actions.map(a => `<li style="padding:4px 0;font-size:0.88rem;color:var(--slate-600);display:flex;gap:8px;"><span style="color:var(--green-600);flex-shrink:0;">&#9654;</span>${a}</li>`).join('')}
        </ul>
        <div style="background:var(--slate-50);padding:8px 12px;border-radius:6px;font-size:0.82rem;">
          <strong style="color:var(--slate-700);">Outcome:</strong> <span style="color:var(--slate-600);">${phase.outcome}</span>
        </div>
      </div>`;
    });

    if (strategy.keyContacts && strategy.keyContacts.length > 0) {
      html += `<div style="background:var(--green-50);border:1px solid var(--green-100);border-radius:12px;padding:16px 20px;margin-top:8px;">
        <h4 style="font-size:0.85rem;color:var(--green-800);margin-bottom:8px;"><i class="fas fa-address-book" style="margin-right:6px;"></i>Key Contacts</h4>
        <ul style="list-style:none;padding:0;margin:0;">
          ${strategy.keyContacts.map(c => `<li style="padding:3px 0;font-size:0.85rem;color:var(--green-700);">&#8226; ${c}</li>`).join('')}
        </ul>
      </div>`;
    }

    stratEl.innerHTML = html;
  }

  // Neighborhood data
  const hood = (typeof getNeighborhood === 'function') ? getNeighborhood(prop) : null;
  const hoodEl = document.getElementById('neighborhoodSection');
  if (hood && hoodEl) {
    const fc = formatCurrency;
    hoodEl.innerHTML = `
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px;">

        <!-- Demographics -->
        <div style="background:#fff;border-radius:12px;padding:20px;box-shadow:0 2px 6px rgba(0,0,0,0.05);">
          <h4 style="font-family:'Inter',sans-serif;font-size:0.9rem;color:#0f172a;margin-bottom:14px;"><i class="fas fa-users" style="color:#059669;margin-right:6px;"></i>Demographics</h4>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
            <div style="background:#f8fafc;padding:8px 10px;border-radius:6px;"><div style="font-size:0.68rem;color:#94a3b8;text-transform:uppercase;">Population</div><div style="font-size:1rem;font-weight:700;color:#0f172a;">${hood.population.toLocaleString()}</div></div>
            <div style="background:#f8fafc;padding:8px 10px;border-radius:6px;"><div style="font-size:0.68rem;color:#94a3b8;text-transform:uppercase;">Median Age</div><div style="font-size:1rem;font-weight:700;color:#0f172a;">${hood.medianAge}</div></div>
            <div style="background:#f8fafc;padding:8px 10px;border-radius:6px;"><div style="font-size:0.68rem;color:#94a3b8;text-transform:uppercase;">Median Income</div><div style="font-size:1rem;font-weight:700;color:#059669;">${fc(hood.medianIncome)}</div></div>
            <div style="background:#f8fafc;padding:8px 10px;border-radius:6px;"><div style="font-size:0.68rem;color:#94a3b8;text-transform:uppercase;">Poverty Rate</div><div style="font-size:1rem;font-weight:700;color:#0f172a;">${hood.povertyRate}%</div></div>
          </div>
        </div>

        <!-- Housing Market -->
        <div style="background:#fff;border-radius:12px;padding:20px;box-shadow:0 2px 6px rgba(0,0,0,0.05);">
          <h4 style="font-family:'Inter',sans-serif;font-size:0.9rem;color:#0f172a;margin-bottom:14px;"><i class="fas fa-chart-line" style="color:#2563eb;margin-right:6px;"></i>Housing Market</h4>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
            <div style="background:#f8fafc;padding:8px 10px;border-radius:6px;"><div style="font-size:0.68rem;color:#94a3b8;text-transform:uppercase;">Median Home</div><div style="font-size:1rem;font-weight:700;color:#0f172a;">${fc(hood.medianHomeValue)}</div></div>
            <div style="background:#f8fafc;padding:8px 10px;border-radius:6px;"><div style="font-size:0.68rem;color:#94a3b8;text-transform:uppercase;">Median Rent</div><div style="font-size:1rem;font-weight:700;color:#0f172a;">${fc(hood.medianRent)}/mo</div></div>
            <div style="background:#f8fafc;padding:8px 10px;border-radius:6px;"><div style="font-size:0.68rem;color:#94a3b8;text-transform:uppercase;">Avg $/SqFt</div><div style="font-size:1rem;font-weight:700;color:#0f172a;">${hood.avgPricePerSqft ? fc(hood.avgPricePerSqft) : 'N/A'}</div></div>
            <div style="background:#f8fafc;padding:8px 10px;border-radius:6px;"><div style="font-size:0.68rem;color:#94a3b8;text-transform:uppercase;">Vacancy</div><div style="font-size:1rem;font-weight:700;color:#0f172a;">${hood.vacancyRate}%</div></div>
          </div>
          <div style="margin-top:10px;padding:8px 10px;background:#ecfdf5;border-radius:6px;font-size:0.8rem;color:#065f46;"><strong>Trend:</strong> ${hood.marketTrend}</div>
        </div>

        <!-- Schools -->
        <div style="background:#fff;border-radius:12px;padding:20px;box-shadow:0 2px 6px rgba(0,0,0,0.05);">
          <h4 style="font-family:'Inter',sans-serif;font-size:0.9rem;color:#0f172a;margin-bottom:14px;"><i class="fas fa-graduation-cap" style="color:#d97706;margin-right:6px;"></i>Schools — ${hood.schoolDistrict}</h4>
          ${hood.schools.map(s => `<div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:1px solid #f1f5f9;">
            <div><span style="font-size:0.85rem;font-weight:500;color:#0f172a;">${s.name}</span><span style="font-size:0.72rem;color:#94a3b8;margin-left:6px;">${s.type}</span></div>
            <div style="display:flex;align-items:center;gap:6px;">
              <span style="font-size:0.72rem;color:#94a3b8;">${s.enrollment > 0 ? s.enrollment + ' students' : ''}</span>
              <span style="background:${s.rating >= 7 ? '#dcfce7' : s.rating >= 5 ? '#fef3c7' : '#fee2e2'};color:${s.rating >= 7 ? '#166534' : s.rating >= 5 ? '#92400e' : '#991b1b'};padding:2px 8px;border-radius:100px;font-size:0.72rem;font-weight:700;">${s.rating}/10</span>
            </div>
          </div>`).join('')}
        </div>

        <!-- Safety & Livability -->
        <div style="background:#fff;border-radius:12px;padding:20px;box-shadow:0 2px 6px rgba(0,0,0,0.05);">
          <h4 style="font-family:'Inter',sans-serif;font-size:0.9rem;color:#0f172a;margin-bottom:14px;"><i class="fas fa-shield-halved" style="color:#7c3aed;margin-right:6px;"></i>Safety & Livability</h4>
          <div style="background:#f8fafc;padding:10px 12px;border-radius:6px;margin-bottom:8px;font-size:0.85rem;color:#475569;"><strong>Walkability:</strong> ${hood.walkScoreLabel || 'Car-Dependent'}</div>
          <div style="font-size:0.82rem;color:#475569;padding:6px 0;border-bottom:1px solid #f1f5f9;"><strong>Crime:</strong> ${hood.crimeRate}</div>
          <div style="font-size:0.82rem;color:#475569;padding:6px 0;border-bottom:1px solid #f1f5f9;"><strong>Climate:</strong> ${hood.climate}</div>
          <div style="font-size:0.82rem;color:#475569;padding:6px 0;border-bottom:1px solid #f1f5f9;"><strong>Population Trend:</strong> ${hood.populationTrend || 'stable'}</div>
          ${hood.unemploymentRate ? `<div style="font-size:0.82rem;color:#475569;padding:6px 0;"><strong>Unemployment:</strong> ${hood.unemploymentRate}%</div>` : ''}
        </div>

        <!-- Nearby & Distances -->
        <div style="background:#fff;border-radius:12px;padding:20px;box-shadow:0 2px 6px rgba(0,0,0,0.05);">
          <h4 style="font-family:'Inter',sans-serif;font-size:0.9rem;color:#0f172a;margin-bottom:14px;"><i class="fas fa-location-dot" style="color:#dc2626;margin-right:6px;"></i>Nearby</h4>
          <div style="font-size:0.82rem;color:#475569;padding:6px 0;border-bottom:1px solid #f1f5f9;"><i class="fas fa-hospital" style="color:#dc2626;width:16px;margin-right:6px;"></i>${hood.nearestHospital.name} <span style="color:#94a3b8;float:right;">${hood.nearestHospital.distance}</span></div>
          <div style="font-size:0.82rem;color:#475569;padding:6px 0;border-bottom:1px solid #f1f5f9;"><i class="fas fa-cart-shopping" style="color:#059669;width:16px;margin-right:6px;"></i>${hood.nearestGrocery.name} <span style="color:#94a3b8;float:right;">${hood.nearestGrocery.distance}</span></div>
          <h5 style="font-size:0.78rem;color:#94a3b8;text-transform:uppercase;margin:12px 0 6px;letter-spacing:0.5px;">Distances to Major Cities</h5>
          ${Object.entries(hood.distances).map(([city, dist]) => `<div style="font-size:0.82rem;color:#475569;padding:4px 0;display:flex;justify-content:space-between;"><span>${city}</span><span style="color:#94a3b8;">${dist}</span></div>`).join('')}
        </div>

        <!-- Economy & Employers -->
        <div style="background:#fff;border-radius:12px;padding:20px;box-shadow:0 2px 6px rgba(0,0,0,0.05);">
          <h4 style="font-family:'Inter',sans-serif;font-size:0.9rem;color:#0f172a;margin-bottom:14px;"><i class="fas fa-briefcase" style="color:#059669;margin-right:6px;"></i>Economy & Employers</h4>
          <h5 style="font-size:0.78rem;color:#94a3b8;text-transform:uppercase;margin-bottom:6px;letter-spacing:0.5px;">Top Employers</h5>
          ${hood.topEmployers.map(e => `<div style="font-size:0.82rem;color:#475569;padding:3px 0;">&#8226; ${e}</div>`).join('')}
          <h5 style="font-size:0.78rem;color:#94a3b8;text-transform:uppercase;margin:10px 0 6px;letter-spacing:0.5px;">Industries</h5>
          <div style="display:flex;flex-wrap:wrap;gap:4px;">${hood.topIndustries.map(i => `<span style="background:#f1f5f9;padding:2px 8px;border-radius:100px;font-size:0.72rem;color:#475569;">${i}</span>`).join('')}</div>
        </div>

      </div>
      <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:12px;padding:16px 20px;margin-top:16px;">
        <p style="font-size:0.9rem;color:#065f46;line-height:1.7;">${hood.description}</p>
      </div>
      ${hood.landmarks.length > 0 ? `<div style="margin-top:12px;font-size:0.82rem;color:#64748b;"><strong>Local Landmarks:</strong> ${hood.landmarks.join(' &bull; ')}</div>` : ''}
    `;
  }

  // Similar properties
  const similarGrid = document.getElementById('similarGrid');
  const similar = PROPERTIES.filter(p => p.id !== id && p.category === prop.category).slice(0, 3);
  if (similar.length === 0) {
    const others = PROPERTIES.filter(p => p.id !== id).slice(0, 3);
    others.forEach(p => similarGrid.appendChild(createPropertyCard(p)));
  } else {
    similar.forEach(p => similarGrid.appendChild(createPropertyCard(p)));
  }
})();
