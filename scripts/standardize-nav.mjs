/**
 * Standardize header nav, sub-nav, mobile nav, and social placeholders.
 * Run: node scripts/standardize-nav.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const partialsDir = path.join(root, 'partials');

const navAfterHeader = fs.readFileSync(path.join(partialsDir, 'site-nav-after-header.html'), 'utf8').trim();
const [subNavBlock, mobileNavBlock] = navAfterHeader.split('<!-- Mobile nav -->').map((s) => s.trim());

const baseNavMain = `    <ul class="nav-main">
      <li>
        <button type="button">Explore Products &#9662;</button>
        <div class="dropdown">
          <a href="/loans">All Loans</a>
          <a href="/insurance">All Insurance</a>
          <a href="/loans#home">Home Loan</a>
          <a href="/loans#personal">Personal Loan</a>
          <a href="/insurance#health">Health Insurance</a>
          <a href="/#calculator">EMI Calculator</a>
        </div>
      </li>
      <li><a href="/loans">Loans</a></li>
      <li><a href="/insurance">Insurance</a></li>
      <li>
        <button type="button">Company &#9662;</button>
        <div class="dropdown">
          <a href="/about">About Us</a>
          <a href="/partners">Partners</a>
          <a href="careers.html">Careers</a>
        </div>
      </li>
      <li>
        <button type="button">Apply Now &#9662;</button>
        <div class="dropdown">
          <a href="contact.html#loan-enquiry">Customer Loan Enquiry</a>
          <a href="contact.html#partner-enquiry">Channel Partner / DSA</a>
        </div>
      </li>
    </ul>`;

const pages = ['index.html', 'loans.html', 'insurance.html', 'about.html', 'partners.html', 'careers.html', 'contact.html'];

const navMainRe = /<ul class="nav-main">[\s\S]*?<\/ul>/;
const subNavRe = /<nav class="sub-nav"[\s\S]*?<\/nav>\s*/;
const mobileNavRe = /<div class="mobile-nav" id="mobileNav">[\s\S]*?<\/div>\s*<\/div>/;
const footerSocialRe = /<div class="footer-social(?: social-links)?(?:[^>]*)>[\s\S]*?<\/div>(?=\s*<\/div>\s*<\/footer>)/;
const connectSocialRe = /<div class="footer-social" style="gap:12px;margin-top:8px;">[\s\S]*?<\/div>/;

const socialPlaceholder = '<div class="footer-social social-links" data-social-links aria-label="Social media"></div>';
const connectPlaceholder = '<div class="social-links" data-social-links aria-label="Social media"></div>';

function applyActive(nav, file) {
  let out = nav;
  if (file === 'loans.html') out = out.replace('<a href="/loans">Loans</a>', '<a href="/loans" class="active">Loans</a>');
  if (file === 'insurance.html') out = out.replace('<a href="/insurance">Insurance</a>', '<a href="/insurance" class="active">Insurance</a>');
  if (file === 'about.html') {
    out = out.replace('<button type="button">Company &#9662;</button>', '<button type="button" class="active">Company &#9662;</button>');
    out = out.replace('<a href="/about">About Us</a>', '<a href="/about" class="active">About Us</a>');
  }
  if (file === 'partners.html') {
    out = out.replace('<button type="button">Company &#9662;</button>', '<button type="button" class="active">Company &#9662;</button>');
    out = out.replace('<a href="/partners">Partners</a>', '<a href="/partners" class="active">Partners</a>');
  }
  if (file === 'careers.html') {
    out = out.replace('<button type="button">Company &#9662;</button>', '<button type="button" class="active">Company &#9662;</button>');
    out = out.replace('<a href="careers.html">Careers</a>', '<a href="careers.html" class="active">Careers</a>');
  }
  if (file === 'contact.html') {
    out = out.replace('<button type="button">Apply Now &#9662;</button>', '<button type="button" class="active">Apply Now &#9662;</button>');
    out = out.replace('contact.html#loan-enquiry', '#loan-enquiry').replace('contact.html#partner-enquiry', '#partner-enquiry');
  }
  return out;
}

for (const file of pages) {
  const filePath = path.join(root, file);
  let html = fs.readFileSync(filePath, 'utf8');

  html = html.replace(navMainRe, applyActive(baseNavMain, file));
  html = html.replace(mobileNavRe, mobileNavBlock);
  if (file === 'contact.html') {
    html = html.replace(/contact\.html#loan-enquiry/g, '#loan-enquiry').replace(/contact\.html#partner-enquiry/g, '#partner-enquiry');
  }
  if (!html.includes('<nav class="sub-nav"')) {
    html = html.replace('</header>', `</header>\n\n${subNavBlock}\n`);
  } else {
    html = html.replace(subNavRe, `${subNavBlock}\n\n`);
  }

  html = html.replace(footerSocialRe, socialPlaceholder);
  html = html.replace(connectSocialRe, connectPlaceholder);

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Standardized ${file}`);
}
