// Year
document.querySelectorAll('[data-year]').forEach(el => {
  el.textContent = new Date().getFullYear();
});

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

// Product finder tabs — swap "looking for" options
const finderOptions = {
  loans: [
    ['personal', 'Personal Loan'],
    ['home', 'Home Loan'],
    ['business', 'Business Loan'],
    ['education', 'Education Loan'],
    ['car', 'Car / Used Car Loan'],
    ['vehicle', 'Vehicle Loan'],
  ],
  insurance: [
    ['life', 'Life Insurance'],
    ['term', 'Term Insurance'],
    ['health', 'Health Insurance'],
    ['general', 'General Insurance'],
    ['vehicle-ins', 'Vehicle Insurance'],
  ],
  business: [
    ['business', 'Business Loan'],
    ['od', 'Overdraft (OD)'],
    ['cc', 'Cash Credit (CC)'],
    ['lap', 'Loan Against Property'],
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

document.getElementById('finderForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const looking = lookingFor?.value || '';
  const map = {
    personal: 'loans.html#personal',
    home: 'loans.html#home',
    business: 'loans.html#business',
    education: 'loans.html#education',
    car: 'loans.html#car',
    vehicle: 'loans.html#vehicle',
    od: 'loans.html#od',
    cc: 'loans.html#cc',
    lap: 'loans.html#lap',
    life: 'insurance.html#life',
    term: 'insurance.html#term',
    health: 'insurance.html#health',
    general: 'insurance.html#general',
    'vehicle-ins': 'insurance.html#vehicle',
  };
  window.location.href = map[looking] || 'contact.html';
});

// EMI Calculator + donut
const calcAmount = document.getElementById('calcAmount');
const calcRate = document.getElementById('calcRate');
const calcTenure = document.getElementById('calcTenure');
const canvas = document.getElementById('emiChart');

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
    { value: principal, color: '#C41E3A' },
    { value: interest, color: '#00B4E6' },
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

  // inner white hole already via center overlay; draw subtle ring bg
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.strokeStyle = '#F0F0F0';
  ctx.lineWidth = line;
  ctx.globalCompositeOperation = 'destination-over';
  ctx.stroke();
  ctx.globalCompositeOperation = 'source-over';
}

function updateCalc() {
  if (!calcAmount) return;
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

updateCalc();

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

// Contact forms
document.querySelectorAll('.contact-form').forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const success = form.querySelector('.form-success');
    if (success) {
      success.classList.add('show');
      form.reset();
      setTimeout(() => success.classList.remove('show'), 6000);
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
