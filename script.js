// ============ YEAR ============
document.getElementById('year').textContent = new Date().getFullYear();

// ============ NAV SCROLL STATE ============
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ============ SCROLL REVEAL ============
const revealEls = document.querySelectorAll('.reveal, .reveal-scale');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => revealObserver.observe(el));

// ============ HERO COUNTERS ============
function animateCount(el) {
  const target = parseFloat(el.dataset.count);
  const suffix = el.dataset.suffix || '';
  const duration = 1400;
  const start = performance.now();
  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(target * eased);
    el.textContent = value + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCount(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

// ============ LOAN DATA + SLIDER ============
const loanData = [
  { name: 'Personal Loan', desc: 'Quick, unsecured funding for any personal need — medical, travel, or a big purchase.', rate: 'From 10.5%' },
  { name: 'Business Loan', desc: 'Working capital or expansion funding for established and growing businesses.', rate: 'From 12%' },
  { name: 'Home Loan', desc: 'Finance a new home or refinance an existing one at competitive long-term rates.', rate: 'From 8.5%' },
  { name: 'Loan Against Property', desc: 'Unlock funds against residential or commercial property you already own.', rate: 'From 9.5%' },
  { name: 'Overdraft (OD)', desc: 'Flexible, revolving credit against your account or property for short-term needs.', rate: 'From 11%' },
  { name: 'Cash Credit (CC)', desc: 'Working capital facility for businesses to manage day-to-day operations.', rate: 'From 11.5%' },
  { name: 'Car Loan', desc: 'New and used car financing, with terms tailored to the vehicle\'s age.', rate: 'From 9%' },
  { name: 'Education Loan', desc: 'Fund tuition and living costs for study in India or abroad.', rate: 'From 9.5%' },
];
const loanTrack = document.getElementById('loanTrack');
loanTrack.innerHTML = loanData.map((loan, i) => `
  <div class="loan-card reveal" style="--i:${i % 4}">
    <span class="num">${String(i + 1).padStart(2, '0')}</span>
    <h3>${loan.name}</h3>
    <p>${loan.desc}</p>
    <div class="rate"><b>${loan.rate}</b><span>indicative p.a.</span></div>
  </div>
`).join('');
loanTrack.querySelectorAll('.loan-card').forEach(el => revealObserver.observe(el));

document.getElementById('loanNext').addEventListener('click', () => {
  loanTrack.scrollBy({ left: 320, behavior: 'smooth' });
});
document.getElementById('loanPrev').addEventListener('click', () => {
  loanTrack.scrollBy({ left: -320, behavior: 'smooth' });
});

// ============ PROCESS TIMELINE FILL ============
const timelineSteps = document.querySelectorAll('.tstep');
const timelineTrack = document.getElementById('timelineTrack');
const timelineObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
    }
  });
}, { threshold: 0.6 });
timelineSteps.forEach(el => timelineObserver.observe(el));

const timelineSectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      timelineTrack.style.width = '100%';
      timelineSectionObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });
timelineSectionObserver.observe(document.getElementById('process'));

// ============ EMI CALCULATOR ============
const calcAmount = document.getElementById('calcAmount');
const calcRate = document.getElementById('calcRate');
const calcTenure = document.getElementById('calcTenure');

function formatINR(num) {
  return '₹' + Math.round(num).toLocaleString('en-IN');
}

function updateCalc() {
  const P = parseFloat(calcAmount.value);
  const annualRate = parseFloat(calcRate.value);
  const n = parseFloat(calcTenure.value);
  const r = annualRate / 12 / 100;

  let emi;
  if (r === 0) {
    emi = P / n;
  } else {
    emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  }
  const total = emi * n;
  const interest = total - P;

  document.getElementById('calcAmountOut').textContent = formatINR(P);
  document.getElementById('calcRateOut').textContent = annualRate.toFixed(1) + '%';
  document.getElementById('calcTenureOut').textContent = n + ' months';

  document.getElementById('emiOut').textContent = formatINR(emi);
  document.getElementById('principalOut').textContent = formatINR(P);
  document.getElementById('interestOut').textContent = formatINR(interest);
  document.getElementById('totalOut').textContent = formatINR(total);
}
[calcAmount, calcRate, calcTenure].forEach(input => input.addEventListener('input', updateCalc));
updateCalc();

// ============ INSURANCE TABS ============
const insuranceData = {
  'Vehicle': [
    { title: 'Comprehensive Cover', points: ['Own damage + third-party liability', 'Add-ons: zero depreciation, engine protect', 'Cashless garage network'] },
    { title: 'Third-Party Only', points: ['Meets legal minimum requirement', 'Lower premium', 'No cover for your own vehicle damage'] },
    { title: 'Used Car Insurance', points: ['Cover for pre-owned vehicles', 'Transfer or fresh policy options', 'Inspection-based premium'] },
  ],
  'Life': [
    { title: 'Whole Life Cover', points: ['Cover for lifetime, not a fixed term', 'Builds cash value over time', 'Premiums typically higher than term'] },
    { title: 'Endowment Plans', points: ['Combines insurance with savings', 'Maturity payout if you outlive the term', 'Lower cover than pure term for same premium'] },
    { title: 'ULIPs', points: ['Life cover + market-linked investment', 'Fund choice and switching flexibility', 'Returns subject to market performance'] },
  ],
  'Term': [
    { title: 'Pure Term Plan', points: ['Highest cover for the lowest premium', 'Payout to nominee only on death', 'No maturity value if you outlive the term'] },
    { title: 'Term + Return of Premium', points: ['Premiums refunded if you outlive the term', 'Higher premium than pure term', 'Good if you want cover + eventual payout'] },
    { title: 'Term with Riders', points: ['Add critical illness or accident cover', 'Customise protection to your risk profile', 'Each rider adds to the premium'] },
  ],
  'Health': [
    { title: 'Individual Health Cover', points: ['Cover for one person', 'Premium based on age and health history', 'Cashless treatment at network hospitals'] },
    { title: 'Family Floater', points: ['One sum insured shared across the family', 'Usually cheaper than individual policies per head', 'Cover can deplete faster with multiple claims'] },
    { title: 'Critical Illness Cover', points: ['Lump sum on diagnosis of listed illnesses', 'Pays regardless of actual treatment cost', 'Works alongside a base health policy'] },
  ],
  'General': [
    { title: 'Home Insurance', points: ['Structure and/or contents cover', 'Protection against fire, theft, natural disasters', 'Often required for home loan approval'] },
    { title: 'Shop / Business Insurance', points: ['Cover for premises, stock, and equipment', 'Public liability options available', 'Tailored to business type and size'] },
    { title: 'Travel Insurance', points: ['Medical emergencies while travelling', 'Trip cancellation and baggage cover', 'Domestic and international options'] },
  ],
};
const tabsNav = document.getElementById('tabsNav');
const tabPanels = document.getElementById('tabPanels');
const categories = Object.keys(insuranceData);

tabsNav.innerHTML = categories.map((cat, i) =>
  `<button class="tab-btn ${i === 0 ? 'active' : ''}" data-cat="${cat}">${cat} Insurance</button>`
).join('');

tabPanels.innerHTML = categories.map((cat, i) => `
  <div class="tab-panel ${i === 0 ? 'active' : ''}" data-panel="${cat}">
    ${insuranceData[cat].map(card => `
      <div class="ins-card">
        <span class="tag">${cat} Insurance</span>
        <h3>${card.title}</h3>
        <ul>${card.points.map(p => `<li>${p}</li>`).join('')}</ul>
      </div>
    `).join('')}
  </div>
`).join('');

tabsNav.addEventListener('click', (e) => {
  const btn = e.target.closest('.tab-btn');
  if (!btn) return;
  const cat = btn.dataset.cat;
  tabsNav.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b === btn));
  tabPanels.querySelectorAll('.tab-panel').forEach(p => p.classList.toggle('active', p.dataset.panel === cat));
});

// ============ TESTIMONIAL CAROUSEL ============
const testiTrack = document.getElementById('testiTrack');
const testiSlides = document.querySelectorAll('.testi-slide');
const testiDotsWrap = document.getElementById('testiDots');
let testiIndex = 0;

testiDotsWrap.innerHTML = testiSlides.length > 1
  ? Array.from(testiSlides).map((_, i) => `<button class="testi-dot ${i === 0 ? 'active' : ''}" data-i="${i}" aria-label="Go to testimonial ${i + 1}"></button>`).join('')
  : '';

function goToTesti(i) {
  testiIndex = i;
  testiTrack.style.transform = `translateX(-${i * 100}%)`;
  testiDotsWrap.querySelectorAll('.testi-dot').forEach((d, idx) => d.classList.toggle('active', idx === i));
}
testiDotsWrap.addEventListener('click', (e) => {
  const dot = e.target.closest('.testi-dot');
  if (dot) goToTesti(parseInt(dot.dataset.i, 10));
});
if (testiSlides.length > 1) {
  setInterval(() => {
    goToTesti((testiIndex + 1) % testiSlides.length);
  }, 6000);
}

// ============ FAQ ACCORDION ============
document.querySelectorAll('.faq-item').forEach(item => {
  const q = item.querySelector('.faq-q');
  const a = item.querySelector('.faq-a');
  q.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(openItem => {
      if (openItem !== item) {
        openItem.classList.remove('open');
        openItem.querySelector('.faq-a').style.maxHeight = null;
      }
    });
    item.classList.toggle('open', !isOpen);
    a.style.maxHeight = !isOpen ? a.scrollHeight + 'px' : null;
  });
});
