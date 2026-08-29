import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const icons = fs.readFileSync(path.join(root, 'partials', 'social-links.html'), 'utf8').trim();

const pages = [
  'index.html',
  'loans.html',
  'insurance.html',
  'about.html',
  'partners.html',
  'careers.html',
  'contact.html',
];

const emptyFooter = /<div class="footer-social social-links" data-social-links aria-label="Social media"><\/div>/g;
const emptyConnect = /<div class="social-links" data-social-links aria-label="Social media"><\/div>/g;

const filledFooter = `<div class="footer-social social-links" aria-label="Social media">\n        ${icons.replace(/\n/g, '\n        ')}\n      </div>`;
const filledConnect = `<div class="social-links" aria-label="Social media">\n            ${icons.replace(/\n/g, '\n            ')}\n          </div>`;

for (const file of pages) {
  let html = fs.readFileSync(path.join(root, file), 'utf8');
  html = html.replace(emptyFooter, filledFooter);
  html = html.replace(emptyConnect, filledConnect);
  fs.writeFileSync(path.join(root, file), html, 'utf8');
  console.log(`Inlined social icons in ${file}`);
}
