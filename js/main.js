// Channel partners data + filters
const partners = [
  // Private banks
  { name: 'HDFC Bank', type: 'pvt', label: 'Private Bank', slug: 'hdfc-bank', domain: 'hdfcbank.com' },
  { name: 'ICICI Bank', type: 'pvt', label: 'Private Bank', slug: 'icici-bank', domain: 'icicibank.com' },
  { name: 'Axis Bank', type: 'pvt', label: 'Private Bank', slug: 'axis-bank', domain: 'axisbank.com' },
  { name: 'Kotak Mahindra Bank', type: 'pvt', label: 'Private Bank', slug: 'kotak-mahindra-bank', domain: 'kotak.com' },
  { name: 'Yes Bank', type: 'pvt', label: 'Private Bank', slug: 'yes-bank', domain: 'yesbank.in' },
  { name: 'IndusInd Bank', type: 'pvt', label: 'Private Bank', slug: 'indusind-bank', domain: 'indusind.com' },
  { name: 'IDFC FIRST Bank', type: 'pvt', label: 'Private Bank', slug: 'idfc-first-bank', domain: 'idfcfirstbank.com' },
  { name: 'Bandhan Bank', type: 'pvt', label: 'Private Bank', slug: 'bandhan-bank', domain: 'bandhanbank.com' },
  { name: 'Standard Chartered', type: 'pvt', label: 'Private Bank', slug: 'standard-chartered', domain: 'sc.com' },
  { name: 'Ujjivan SFB', type: 'pvt', label: 'Small Finance Bank', slug: 'ujjivan-sfb', domain: 'ujjivansfb.in' },
  { name: 'Unity SFB', type: 'pvt', label: 'Small Finance Bank', slug: 'unity-sfb', domain: 'theunitybank.com' },
  { name: 'Saraswat Bank', type: 'pvt', label: 'Co-operative Bank', slug: 'saraswat-bank', domain: 'saraswatbank.com' },
  // Govt / PSU banks (CGTMSE)
  { name: 'State Bank of India', type: 'govt', label: 'Govt Bank · CGTMSE', slug: 'state-bank-of-india', domain: 'sbi.co.in' },
  { name: 'Punjab National Bank', type: 'govt', label: 'Govt Bank · CGTMSE', slug: 'punjab-national-bank', domain: 'pnbindia.in' },
  { name: 'Bank of Baroda', type: 'govt', label: 'Govt Bank · CGTMSE', slug: 'bank-of-baroda', domain: 'bankofbaroda.in' },
  { name: 'Canara Bank', type: 'govt', label: 'Govt Bank · CGTMSE', slug: 'canara-bank', domain: 'canarabank.com' },
  { name: 'Union Bank of India', type: 'govt', label: 'Govt Bank · CGTMSE', slug: 'union-bank-of-india', domain: 'unionbankofindia.co.in' },
  { name: 'Indian Bank', type: 'govt', label: 'Govt Bank · CGTMSE', slug: 'indian-bank', domain: 'indianbank.in' },
  // NBFCs / HFCs
  { name: 'Edelweiss', type: 'nbfc', label: 'NBFC', slug: 'edelweiss', domain: 'edelweissfin.com' },
  { name: 'Ambit', type: 'nbfc', label: 'NBFC', slug: 'ambit', domain: 'ambit.co' },
  { name: 'SMC', type: 'nbfc', label: 'NBFC', slug: 'smc', domain: 'smctradeonline.com' },
  { name: 'Arka Fincap', type: 'nbfc', label: 'NBFC', slug: 'arka-fincap', domain: 'arkafincap.com' },
  { name: 'Faircent', type: 'nbfc', label: 'NBFC / P2P', slug: 'faircent', domain: 'faircent.com' },
  { name: 'Piramal', type: 'nbfc', label: 'NBFC', slug: 'piramal', domain: 'piramalfinance.com' },
  { name: 'Finnable', type: 'nbfc', label: 'NBFC', slug: 'finnable', domain: 'finnable.com' },
  { name: 'IIFL', type: 'nbfc', label: 'NBFC', slug: 'iifl', domain: 'iifl.com' },
  { name: 'Anand Rathi', type: 'nbfc', label: 'NBFC', slug: 'anand-rathi', domain: 'anandrathi.com' },
  { name: 'Motilal Oswal', type: 'nbfc', label: 'NBFC', slug: 'motilal-oswal', domain: 'motilaloswal.com' },
  { name: 'UGRO Capital', type: 'nbfc', label: 'NBFC', slug: 'ugro-capital', domain: 'ugrocapital.com' },
  { name: 'Sitara Finance', type: 'nbfc', label: 'NBFC', slug: 'sitara-finance', domain: 'sitaraindia.com' },
  { name: 'Cholamandalam (Chola LAP)', type: 'nbfc', label: 'NBFC', slug: 'cholamandalam', domain: 'cholamandalam.com' },
  { name: 'HDB Financial', type: 'nbfc', label: 'NBFC', slug: 'hdb-financial', domain: 'hdbfs.com' },
  { name: 'DMI Finance', type: 'nbfc', label: 'NBFC', slug: 'dmi-finance', domain: 'dmifinance.in' },
  { name: 'Godrej Capital', type: 'nbfc', label: 'NBFC', slug: 'godrej-capital', domain: 'godrejcapital.com' },
  { name: 'Avash Housing', type: 'nbfc', label: 'HFC', slug: 'avash-housing', domain: 'avashousing.com' },
  { name: 'Axis Finance', type: 'nbfc', label: 'NBFC', slug: 'axis-finance', domain: 'axisfinance.co.in' },
  { name: 'InCred (LAP)', type: 'nbfc', label: 'NBFC', slug: 'incred', domain: 'incred.com' },
  { name: 'Vastu Finance', type: 'nbfc', label: 'NBFC / HFC', slug: 'vastu-finance', domain: 'vastuhfc.com' },
  { name: 'Muthoot Fincorp', type: 'nbfc', label: 'NBFC', slug: 'muthoot-fincorp', domain: 'muthootfincorp.com' },
  { name: 'Aditya Birla Housing Finance', type: 'nbfc', label: 'HFC', slug: 'aditya-birla-housing-finance', domain: 'adityabirlacapital.com' },
  { name: 'Grihum Housing Finance', type: 'nbfc', label: 'HFC', slug: 'grihum-housing-finance', domain: 'grihumhousing.com' },
  { name: 'Bajaj Finserv', type: 'nbfc', label: 'NBFC', slug: 'bajaj-finserv', domain: 'bajajfinserv.in' },
  { name: 'Fullerton India', type: 'nbfc', label: 'NBFC', slug: 'fullerton-india', domain: 'fullertonindia.com' },
  { name: 'Poonawalla Fincorp', type: 'nbfc', label: 'NBFC', slug: 'poonawalla-fincorp', domain: 'poonawallafincorp.com' },
  { name: 'Tata Capital', type: 'nbfc', label: 'NBFC', slug: 'tata-capital', domain: 'tatacapital.com' },
  { name: 'L&T Finance', type: 'nbfc', label: 'NBFC', slug: 'lt-finance', domain: 'ltfs.com' },
  { name: 'Indifi', type: 'nbfc', label: 'NBFC / Fintech', slug: 'indifi', domain: 'indifi.com' },
  { name: 'KreditBee', type: 'nbfc', label: 'Fintech', slug: 'kreditbee', domain: 'kreditbee.in' },
];

function partnerTypeClass(type) {
  if (type === 'govt') return 'govt';
  if (type === 'nbfc') return 'nbfc';
  return '';
}

function partnerInitials(name) {
  return name.split(/[\s(]+/).filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
}

/** Prefer local SVG/PNG first (reliable), then CDN, then initials */
const LOCAL_LOGO_EXT = {
  'state-bank-of-india': 'png',
  'punjab-national-bank': 'png',
  'union-bank-of-india': 'png',
  'bank-of-baroda': 'png',
  'canara-bank': 'png',
  'yes-bank': 'png',
  'indian-bank': 'png',
  'hdfc-bank': 'png',
  'icici-bank': 'png',
  'indusind-bank': 'png',
  'idfc-first-bank': 'png',
  'bandhan-bank': 'png',
  'edelweiss': 'png',
  'ambit': 'png',
  'axis-bank': 'svg',
  'kotak-mahindra-bank': 'svg',
  'arka-fincap': 'png',
  'faircent': 'png',
  'piramal': 'png',
  'finnable': 'png',
  'iifl': 'png',
  'anand-rathi': 'png',
  'smc': 'svg',
  'motilal-oswal': 'svg',
  'ugro-capital': 'webp',
  'sitara-finance': 'png',
  'standard-chartered': 'svg',
  'ujjivan-sfb': 'svg',
  'unity-sfb': 'svg',
  'saraswat-bank': 'png',
  'cholamandalam': 'svg',
  'hdb-financial': 'svg',
  'dmi-finance': 'svg',
  'godrej-capital': 'jpg',
  'avash-housing': 'png',
  'axis-finance': 'webp',
  'incred': 'svg',
  'vastu-finance': 'svg',
  'muthoot-fincorp': 'png',
  'aditya-birla-housing-finance': 'png',
  'grihum-housing-finance': 'svg',
  'bajaj-finserv': 'png',
  'fullerton-india': 'svg',
  'poonawalla-fincorp': 'svg',
  'tata-capital': 'svg',
  'lt-finance': 'webp',
  'indifi': 'png',
  'kreditbee': 'svg',
};

function partnerLocalSrc(slug) {
  const ext = LOCAL_LOGO_EXT[slug] || 'png';
  return `assets/partners/${slug}.${ext}`;
}

/** Shrink-only fits (never scale up — that clips wordmarks) */
const LOGO_FIT = {
  'bank-of-baroda': { max: 0.82 },
  'canara-bank': { max: 0.82 },
  'bandhan-bank': { max: 0.84 },
  'punjab-national-bank': { max: 0.84 },
  'indian-bank': { max: 0.86 },
  'state-bank-of-india': { max: 0.88 },
  'union-bank-of-india': { max: 0.86 },
  'bajaj-finserv': { max: 0.84 },
  'tata-capital': { max: 0.88 },
  'lt-finance': { max: 0.88, soft: true },
  'cholamandalam': { max: 0.88 },
  'muthoot-fincorp': { max: 0.88, soft: true },
  'piramal': { max: 0.84 },
  'faircent': { max: 0.88 },
  'icici-bank': { max: 0.9 },
  'axis-bank': { max: 0.9 },
  'axis-finance': { max: 0.9, soft: true },
  'indusind-bank': { max: 0.92, blend: true },
  'yes-bank': { max: 0.92 },
  'ujjivan-sfb': { max: 0.95 },
  'saraswat-bank': { max: 0.95 },
  'vastu-finance': { max: 0.85 },
  'aditya-birla-housing-finance': { max: 0.88 },
  'avash-housing': { max: 0.88 },
  'grihum-housing-finance': { max: 0.88 },
  'godrej-capital': { max: 0.88 },
};

function partnerLogoHtml(p) {
  const local = partnerLocalSrc(p.slug);
  const cdn = `https://logo.clearbit.com/${p.domain}`;
  const initials = partnerInitials(p.name);
  const fit = LOGO_FIT[p.slug] || {};
  const max = Math.min(fit.max || 1, 1);
  const mods = [
    fit.blend ? ' partner-logo--blend' : '',
    fit.soft ? ' partner-logo--soft' : '',
  ].join('');
  // Eager load: lazy loading blanks tiles in a moving marquee until they enter view
  return `<div class="partner-logo${mods}" title="${p.name}" style="--logo-max:${max}">
    <span class="partner-logo__media">
      <img src="${local}" alt="${p.name}" loading="eager" decoding="async" width="160" height="48"
        data-cdn="${cdn}" data-initials="${initials}"
        onerror="partnerLogoFallback(this)">
      <span class="partner-initials" hidden aria-hidden="true">${initials}</span>
    </span>
  </div>`;
}

function renderPartnerTiles(list, container) {
  if (!container) return;
  container.innerHTML = list.map(p => {
    const cls = partnerTypeClass(p.type) + (p.label.includes('HFC') ? ' hfc' : '');
    return `<div class="partner-tile">
      ${partnerLogoHtml(p)}
      <span class="ptype ${cls}">${p.label}</span>
      <span class="pname">${p.name}</span>
    </div>`;
  }).join('');
}

function partnerLogoFallback(img) {
  if (img.dataset.triedCdn !== '1' && img.dataset.cdn) {
    img.dataset.triedCdn = '1';
    img.src = img.dataset.cdn;
    return;
  }
  img.style.display = 'none';
  img.removeAttribute('alt');
  const wrap = img.parentElement;
  const initials = wrap?.querySelector('.partner-initials');
  if (initials) {
    initials.hidden = false;
    initials.removeAttribute('aria-hidden');
  }
}
window.partnerLogoFallback = partnerLogoFallback;

function renderMarqueeTracks(type) {
  const list = partners.filter(p => p.type === type);
  if (!list.length) return;
  document.querySelectorAll(`[data-partners="${type}"]`).forEach(track => {
    // Repeat until we have enough tiles for a smooth infinite loop
    let items = list.slice();
    while (items.length < 12) items = items.concat(list);
    items = items.concat(items); // double for translateX(-50%) seamless loop
    track.innerHTML = items.map(partnerLogoHtml).join('');
  });
}

function preloadPartnerLogos() {
  const seen = new Set();
  partners.forEach(p => {
    const src = partnerLocalSrc(p.slug);
    if (seen.has(src)) return;
    seen.add(src);
    const img = new Image();
    img.src = src;
  });
}

function renderPartnerMarquees() {
  preloadPartnerLogos();
  renderMarqueeTracks('pvt');
  renderMarqueeTracks('govt');
  renderMarqueeTracks('nbfc');
}

renderPartnerMarquees();

const gridAll = document.getElementById('partnerGridAll');
const gridPvt = document.getElementById('partnerGridPvt');
const gridGovt = document.getElementById('partnerGridGovt');
const gridNbfc = document.getElementById('partnerGridNbfc');
const partnersFull = document.getElementById('partnersFull');

if (gridAll) {
  const featured = [
    ...partners.filter(p => p.type === 'govt'),
    ...partners.filter(p => p.type === 'pvt').slice(0, 8),
    ...partners.filter(p => p.type === 'nbfc').slice(0, 12),
  ];
  renderPartnerTiles(featured, gridAll);
}
if (partnersFull) renderPartnerTiles(partners, partnersFull);
renderPartnerTiles(partners.filter(p => p.type === 'pvt'), gridPvt);
renderPartnerTiles(partners.filter(p => p.type === 'govt'), gridGovt);
renderPartnerTiles(partners.filter(p => p.type === 'nbfc'), gridNbfc);

document.getElementById('partnerCats')?.addEventListener('click', (e) => {
  const btn = e.target.closest('.partner-cat-btn');
  if (!btn) return;
  const group = btn.dataset.group;
  document.querySelectorAll('.partner-cat-btn').forEach(b => b.classList.toggle('active', b === btn));
  document.querySelectorAll('.partner-group').forEach(g => {
    const show = group === 'all' ? g.dataset.group === 'all' : g.dataset.group === group;
    g.classList.toggle('active', show);
  });
});

// Pause marquees on hover (Beingship-style data-pause)
document.querySelectorAll('.marquee[data-pause]').forEach(el => {
  el.addEventListener('mouseenter', () => el.classList.add('is-paused'));
  el.addEventListener('mouseleave', () => el.classList.remove('is-paused'));
});

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('.marquee').forEach(el => el.classList.add('is-paused'));
}
// Mobile nav
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
const mobileNavClose = document.getElementById('mobileNavClose');
if (menuToggle && mobileNav) {
  menuToggle.addEventListener('click', () => mobileNav.classList.add('open'));
  mobileNavClose?.addEventListener('click', () => mobileNav.classList.remove('open'));
  mobileNav.addEventListener('click', (e) => {
    if (e.target === mobileNav) mobileNav.classList.remove('open');
  });
}

document.querySelectorAll('.mobile-nav-toggle').forEach((btn) => {
  btn.addEventListener('click', () => {
    const group = btn.closest('.mobile-nav-group');
    if (!group) return;
    const isOpen = group.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
});

// Hero banner slider
(function initHeroSlider() {
  const banner = document.getElementById('heroBanner');
  const slides = [...document.querySelectorAll('#heroSlider .hero-slide')];
  const dotsWrap = document.getElementById('heroDots');
  const prevBtn = document.getElementById('heroPrev');
  const nextBtn = document.getElementById('heroNext');
  const slidesWrap = banner.querySelector('.hero-slides');
  if (!banner || slides.length < 2 || !dotsWrap || !slidesWrap) return;

  slides.forEach((slide) => slide.removeAttribute('hidden'));

  let index = 0;
  let timer = null;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const AUTO_MS = 6500;

  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'hero-dot';
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
    dot.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    dot.addEventListener('click', () => goTo(i, true));
    dotsWrap.appendChild(dot);
  });

  const dots = [...dotsWrap.querySelectorAll('.hero-dot')];

  function syncHeight() {
    let max = 0;
    slides.forEach((slide) => {
      const content = slide.querySelector('.hero-slide-content');
      if (content) max = Math.max(max, content.offsetHeight);
    });
    slidesWrap.style.minHeight = `${Math.max(max, 520)}px`;
  }

  function goTo(i, userDriven) {
    index = (i + slides.length) % slides.length;
    slides.forEach((slide, n) => {
      const on = n === index;
      slide.classList.toggle('is-active', on);
      slide.setAttribute('aria-hidden', on ? 'false' : 'true');
    });
    dots.forEach((dot, n) => dot.setAttribute('aria-selected', n === index ? 'true' : 'false'));
    banner.dataset.theme = slides[index].dataset.theme || 'default';
    requestAnimationFrame(syncHeight);
    if (userDriven) restart();
  }

  function next() { goTo(index + 1, false); }
  function prev() { goTo(index - 1, true); }

  function stop() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  function start() {
    if (reduceMotion) return;
    stop();
    timer = setInterval(next, AUTO_MS);
  }

  function restart() {
    stop();
    start();
  }

  prevBtn?.addEventListener('click', prev);
  nextBtn?.addEventListener('click', () => { goTo(index + 1, true); });

  // Pause only while the user is interacting with the finder or controls —
  // not for the whole banner (full-bleed heroes keep the cursor over them,
  // which was stopping autoplay on slide 1 until a manual change).
  const pauseZones = [
    banner.querySelector('.finder'),
    banner.querySelector('.hero-slider-controls'),
  ].filter(Boolean);

  pauseZones.forEach((zone) => {
    zone.addEventListener('mouseenter', stop);
    zone.addEventListener('mouseleave', start);
    zone.addEventListener('focusin', stop);
    zone.addEventListener('focusout', (e) => {
      if (!zone.contains(e.relatedTarget)) start();
    });
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop();
    else start();
  });

  window.addEventListener('resize', syncHeight);

  goTo(0, false);
  start();
})();

// Product finder tabs â€” swap "looking for" options
const finderOptions = {
  loans: [
    ['home', 'Home Loan'],
    ['lap', 'Loan Against Property'],
    ['car', 'Car / Used Car Loan'],
    ['personal', 'Personal Loan'],
    ['business', 'Business Loan'],
    ['od', 'Overdraft (OD)'],
    ['cc', 'Cash Credit (CC)'],
    ['education', 'Education Loan'],
    ['vehicle', 'Vehicle Loan'],
    ['professional', 'Professional Loan'],
    ['machinery', 'Machinery Loan'],
    ['gold', 'Gold Loan'],
  ],
  insurance: [
    ['life', 'Life Insurance'],
    ['health', 'Health Insurance'],
    ['term', 'Term Insurance'],
    ['general', 'General Insurance'],
    ['vehicle-ins', 'Vehicle Insurance'],
  ],
  business: [
    ['business', 'Business Loan'],
    ['lap', 'Loan Against Property'],
    ['od', 'Overdraft (OD)'],
    ['cc', 'Cash Credit (CC)'],
    ['machinery', 'Machinery Loan'],
  ],
  property: [
    ['home', 'Home Loan'],
    ['lap', 'Loan Against Property'],
    ['od', 'Overdraft against Property'],
  ],
  vehicle: [
    ['car', 'Car / Used Car Loan'],
    ['vehicle', 'Vehicle Loan'],
    ['vehicle-ins', 'Vehicle Insurance'],
  ],
};

const finderTabs = document.getElementById('finderTabs');
const lookingFor = document.getElementById('lookingFor');

function setFinderOptions(cat) {
  if (!lookingFor || !finderOptions[cat]) return;
  lookingFor.innerHTML = finderOptions[cat]
    .map(([v, label]) => `<option value="${v}">${label}</option>`)
    .join('');
}

finderTabs?.addEventListener('click', (e) => {
  const btn = e.target.closest('.finder-tab');
  if (!btn) return;
  finderTabs.querySelectorAll('.finder-tab').forEach(t => t.classList.toggle('active', t === btn));
  setFinderOptions(btn.dataset.cat);
});

// Email submissions → support@prateekfinserve.com (FormSubmit)
const SUPPORT_EMAIL = 'support@prateekfinserve.com';
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${SUPPORT_EMAIL}`;

async function sendToSupport(fields) {
  const res = await fetch(FORMSUBMIT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      ...fields,
      _captcha: 'false',
      _template: 'table',
    }),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(text || 'Failed to send');
  }
  return res.json().catch(() => ({}));
}

function formPayload(form) {
  const data = new FormData(form);
  const payload = {};
  data.forEach((value, key) => {
    if (String(value).trim()) payload[key] = String(value).trim();
  });
  return payload;
}

// EMI Calculator + donut (shown after lead form)
const calcAmount = document.getElementById('calcAmount');
const calcRate = document.getElementById('calcRate');
const calcTenure = document.getElementById('calcTenure');
const canvas = document.getElementById('emiChart');
const emiGate = document.getElementById('emiGate');
const emiCalcPanel = document.getElementById('emiCalcPanel');
const EMI_UNLOCK_KEY = 'pf_emi_unlocked_at';
const EMI_UNLOCK_MS = 60 * 60 * 1000; // 1 hour

function getEmiUnlockAt() {
  try {
    const raw = localStorage.getItem(EMI_UNLOCK_KEY);
    const at = raw ? parseInt(raw, 10) : 0;
    return Number.isFinite(at) ? at : 0;
  } catch (_) {
    return 0;
  }
}

function isEmiUnlocked() {
  const at = getEmiUnlockAt();
  if (!at) return false;
  return Date.now() - at < EMI_UNLOCK_MS;
}

function saveEmiUnlock() {
  try {
    localStorage.setItem(EMI_UNLOCK_KEY, String(Date.now()));
  } catch (_) { /* ignore */ }
}

function clearEmiUnlock() {
  try {
    localStorage.removeItem(EMI_UNLOCK_KEY);
  } catch (_) { /* ignore */ }
}

function lockEmiCalculator() {
  if (emiGate) emiGate.hidden = false;
  if (emiCalcPanel) emiCalcPanel.hidden = true;
  clearEmiUnlock();
}
function formatINR(num) {
  return '₹' + Math.round(num).toLocaleString('en-IN');
}

function drawDonut(principal, interest) {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const size = 200;
  canvas.width = size * dpr;
  canvas.height = size * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, size, size);

  const total = principal + interest;
  if (total <= 0) return;

  const cx = size / 2;
  const cy = size / 2;
  const r = 78;
  const line = 22;
  let start = -Math.PI / 2;

  const slices = [
    { value: principal, color: '#00b1ef' },
    { value: interest, color: '#e91c21' },
  ];

  slices.forEach(slice => {
    const angle = (slice.value / total) * Math.PI * 2;
    ctx.beginPath();
    ctx.arc(cx, cy, r, start, start + angle);
    ctx.strokeStyle = slice.color;
    ctx.lineWidth = line;
    ctx.lineCap = 'butt';
    ctx.stroke();
    start += angle;
  });

  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.strokeStyle = '#F0F0F0';
  ctx.lineWidth = line;
  ctx.globalCompositeOperation = 'destination-over';
  ctx.stroke();
  ctx.globalCompositeOperation = 'source-over';
}

function updateCalc() {
  if (!calcAmount || !calcRate || !calcTenure) return;
  const P = parseFloat(calcAmount.value);
  const annualRate = parseFloat(calcRate.value);
  const n = parseFloat(calcTenure.value);
  const r = annualRate / 12 / 100;

  let emi;
  if (r === 0) emi = P / n;
  else emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

  const total = emi * n;
  const interest = total - P;

  document.getElementById('calcAmountOut').textContent = formatINR(P);
  document.getElementById('calcRateOut').textContent = annualRate.toFixed(1) + '%';
  document.getElementById('calcTenureOut').textContent = n + ' months';
  document.getElementById('emiOut').textContent = formatINR(emi);
  document.getElementById('principalOut').textContent = formatINR(P);
  document.getElementById('interestOut').textContent = formatINR(interest);
  document.getElementById('totalOut').textContent = formatINR(total);
  drawDonut(P, interest);
}

function unlockEmiCalculator(productName, { persist = true } = {}) {
  if (emiGate) emiGate.hidden = true;
  if (emiCalcPanel) emiCalcPanel.hidden = false;

  if (productName && calcRate) {
    const tabs = [...document.querySelectorAll('.calc-tab')];
    const match = tabs.find(t => t.dataset.product === productName);
    if (match) {
      tabs.forEach(t => t.classList.toggle('active', t === match));
      calcRate.value = match.dataset.rate;
    } else {
      const opt = document.querySelector(`#emiProduct option[value="${CSS.escape(productName)}"]`);
      if (opt?.dataset.rate) calcRate.value = opt.dataset.rate;
    }
  }

  requestAnimationFrame(() => updateCalc());
  if (persist) saveEmiUnlock();
  scheduleEmiRelock();
}

let emiRelockTimer = null;
function scheduleEmiRelock() {
  if (emiRelockTimer) clearTimeout(emiRelockTimer);
  const at = getEmiUnlockAt();
  if (!at) return;
  const remaining = EMI_UNLOCK_MS - (Date.now() - at);
  if (remaining <= 0) {
    lockEmiCalculator();
    return;
  }
  emiRelockTimer = setTimeout(() => lockEmiCalculator(), remaining);
}

[calcAmount, calcRate, calcTenure].forEach(el => {
  el?.addEventListener('input', updateCalc);
});

document.getElementById('calcTabs')?.addEventListener('click', (e) => {
  const tab = e.target.closest('.calc-tab');
  if (!tab || !calcRate) return;
  document.querySelectorAll('.calc-tab').forEach(t => t.classList.toggle('active', t === tab));
  calcRate.value = tab.dataset.rate;
  updateCalc();
});

document.getElementById('emiLeadForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const submitBtn = document.getElementById('emiLeadSubmit');
  const success = document.getElementById('emiLeadSuccess');
  const error = document.getElementById('emiLeadError');
  const product = document.getElementById('emiProduct')?.value || '';

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  if (error) {
    error.hidden = true;
    error.classList.remove('show');
  }
  success?.classList.remove('show');
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';
  }

  try {
    await sendToSupport({
      ...formPayload(form),
      _subject: `EMI Calculator enquiry — ${product}`,
      form_source: 'EMI Calculator Unlock',
      page: window.location.href,
    });
    success?.classList.add('show');
    setTimeout(() => unlockEmiCalculator(product), 600);
  } catch (err) {
    if (error) {
      error.hidden = false;
      error.classList.add('show');
    }
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Unlock EMI Calculator';
    }
  }
});

if (isEmiUnlocked() && emiCalcPanel) {
  unlockEmiCalculator(undefined, { persist: false });
} else if (getEmiUnlockAt()) {
  clearEmiUnlock();
}
// FAQ
document.querySelectorAll('.faq-item').forEach(item => {
  const q = item.querySelector('.faq-q');
  const a = item.querySelector('.faq-a');
  q?.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(openItem => {
      if (openItem !== item) {
        openItem.classList.remove('open');
        openItem.querySelector('.faq-a').style.maxHeight = null;
      }
    });
    item.classList.toggle('open', !isOpen);
    if (a) a.style.maxHeight = !isOpen ? a.scrollHeight + 'px' : null;
  });
});

// Pre-fill contact form from ?role= (careers page apply links) — runs after tab init below

function contactFormSource(form) {
  if (form.id === 'loan-enquiry') return 'Customer Loan Enquiry';
  if (form.id === 'partner-enquiry') return 'Channel Partner / DSA Enquiry';
  if (form.id === 'customerLoanForm') return 'Customer Loan Enquiry';
  if (form.id === 'partnerDsaForm') return 'Channel Partner / DSA Enquiry';
  if (form.id === 'pageContactForm') return 'Contact Page';
  return 'Homepage Contact';
}

function syncContactTabClasses() {
  const tabsWrap = document.getElementById('contactFormTabs');
  if (!tabsWrap) return;
  const hash = window.location.hash.replace('#', '');
  const showPartner = hash === 'partner-enquiry';
  tabsWrap.querySelectorAll('.contact-tab').forEach((tab) => {
    const isPartner = tab.getAttribute('href') === '#partner-enquiry';
    const on = showPartner ? isPartner : !isPartner;
    tab.setAttribute('aria-selected', on ? 'true' : 'false');
  });
}

function applyContactHash(scroll) {
  syncContactTabClasses();
  if (!scroll) return;
  const hash = window.location.hash.replace('#', '');
  if (hash !== 'partner-enquiry' && hash !== 'loan-enquiry') return;
  const target = document.getElementById(hash);
  (target || document.getElementById('contactFormTabs'))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

(function initContactFormTabs() {
  const tabsWrap = document.getElementById('contactFormTabs');
  if (!tabsWrap) return;

  tabsWrap.addEventListener('click', (e) => {
    const tab = e.target.closest('.contact-tab');
    if (!tab) return;
    requestAnimationFrame(syncContactTabClasses);
  });

  applyContactHash(window.location.hash === '#partner-enquiry' || window.location.hash === '#loan-enquiry');
  window.addEventListener('hashchange', () => applyContactHash(true));
})();

(function initCareerApplyPrefill() {
  const params = new URLSearchParams(window.location.search);
  const role = params.get('role');
  if (!role) return;

  const roleMap = {
    'backend-operations': 'Backend Operations Executive',
    'sales-executive': 'Sales Executive',
  };
  const roleLabel = roleMap[role] || role;

  if (window.location.hash !== '#loan-enquiry') {
    window.location.hash = 'loan-enquiry';
  }
  syncContactTabClasses();

  const message = document.getElementById('loanMessage');
  if (message && !message.value.trim()) {
    message.value = `I am applying for the ${roleLabel} position at Prateek Finserve.`;
  }
})();

// Contact forms → support@prateekfinserve.com
document.querySelectorAll('.contact-form').forEach(form => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const success = form.querySelector('.form-success');
    const error = form.querySelector('.form-error');
    const btn = form.querySelector('button[type="submit"]');
    const originalLabel = btn?.textContent;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (error) {
      error.hidden = true;
      error.classList.remove('show');
    }
    success?.classList.remove('show');
    if (btn) {
      btn.disabled = true;
      btn.textContent = 'Sending…';
    }

    try {
      const payload = formPayload(form);
      const source = contactFormSource(form);
      await sendToSupport({
        ...payload,
        _subject: `Website enquiry — ${payload.enquiryType || payload.loanType || payload.partnerType || source}`,
        form_source: source,
        page: window.location.href,
      });
      success?.classList.add('show');
      form.reset();
      setTimeout(() => success?.classList.remove('show'), 8000);
    } catch (err) {
      if (error) {
        error.hidden = false;
        error.classList.add('show');
      }
    } finally {
      if (btn) {
        btn.disabled = false;
        btn.textContent = originalLabel || 'Submit';
      }
    }
  });
});
// Insurance tabs
const tabsNav = document.getElementById('tabsNav');
const tabPanels = document.getElementById('tabPanels');
if (tabsNav && tabPanels) {
  tabsNav.addEventListener('click', (e) => {
    const btn = e.target.closest('.tab-btn');
    if (!btn) return;
    const cat = btn.dataset.cat;
    tabsNav.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b === btn));
    tabPanels.querySelectorAll('.tab-panel').forEach(p => p.classList.toggle('active', p.dataset.panel === cat));
  });
}

// Trust stats band — animated counters
function animateCount(el) {
  const target = parseFloat(el.dataset.count);
  if (Number.isNaN(target)) return;
  const suffix = el.dataset.suffix || '';
  const duration = 1600;
  const start = performance.now();
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    el.textContent = Math.round(target).toLocaleString('en-IN') + suffix;
    return;
  }

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(target * eased);
    el.textContent = value.toLocaleString('en-IN') + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const trustStatsBand = document.querySelector('.trust-stats-band');
if (trustStatsBand) {
  const trustObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      trustStatsBand.classList.add('is-visible');
      trustStatsBand.querySelectorAll('[data-count]').forEach(animateCount);
      trustObserver.unobserve(entry.target);
    });
  }, { threshold: 0.25 });
  trustObserver.observe(trustStatsBand);
}
