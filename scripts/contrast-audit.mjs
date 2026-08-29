/**
 * WCAG 2.1 contrast audit for Prateek Finserve CSS tokens & common pairs
 * Run: node scripts/contrast-audit.mjs
 */

const tokens = {
  brandBright: '#00b1ef',
  brand: '#006d96', // accessible UI (--maroon alias)
  brandHover: '#005a7d',
  brandDarker: '#004d6b',
  brandDeep: '#0092c7',
  brandDark: '#006d96',
  accent: '#e91c21',
  accentDeep: '#c4181c',
  pinkSoft: '#EFF9FE',
  pinkMid: '#D9F2FD',
  lavender: '#F5FAFD',
  white: '#FFFFFF',
  off: '#F7F7F8',
  text: '#2B2B2B',
  textSoft: '#666666',
  border: '#E5E5E5',
  heroH1: '#0a4f66',
  heroBg: '#0a3040',
  heroTeal: '#0a8caf',
  heroGreen: '#0d5c3d',
  success: '#2E7D32',
  errorBg: '#fdecef',
  greyBg2: '#f3f4f6',
  aboutBlue1: '#0B3D6E',
  aboutGreen1: '#0D5C3D',
  iconTint: 'rgba(0,109,150,0.08)',
};

function hexToRgb(hex) {
  const h = hex.replace('#', '');
  const n = parseInt(h.length === 3 ? h.split('').map((c) => c + c).join('') : h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function parseColor(input) {
  if (input.startsWith('#')) return hexToRgb(input);
  const rgba = input.match(/rgba?\(([^)]+)\)/);
  if (rgba) {
    const parts = rgba[1].split(',').map((p) => p.trim());
    const r = +parts[0];
    const g = +parts[1];
    const b = +parts[2];
    const a = parts[3] !== undefined ? +parts[3] : 1;
    if (a < 1) {
      const bg = [255, 255, 255];
      return [
        Math.round(r * a + bg[0] * (1 - a)),
        Math.round(g * a + bg[1] * (1 - a)),
        Math.round(b * a + bg[2] * (1 - a)),
      ];
    }
    return [r, g, b];
  }
  throw new Error(`Unknown color: ${input}`);
}

function relLuminance([r, g, b]) {
  const srgb = [r, g, b].map((v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
}

function contrast(fg, bg) {
  const l1 = relLuminance(parseColor(fg));
  const l2 = relLuminance(parseColor(bg));
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

function grade(ratio, large = false) {
  const aa = large ? 3 : 4.5;
  const aaa = large ? 4.5 : 7;
  if (ratio >= aaa) return 'AAA';
  if (ratio >= aa) return 'AA';
  if (ratio >= 3) return 'AA-large-only';
  return 'FAIL';
}

const pairs = [
  // Body & typography
  ['Body text on white', tokens.text, tokens.white],
  ['Soft text on white', tokens.textSoft, tokens.white],
  ['Soft text on off-gray', tokens.textSoft, tokens.off],
  ['Soft text on pink-soft', tokens.textSoft, tokens.pinkSoft],
  ['Body text on pink-soft', tokens.text, tokens.pinkSoft],
  ['Body text on lavender', tokens.text, tokens.lavender],

  // Brand — accessible UI (post-fix)
  ['Brand dark on white (links, logo, nav hover)', tokens.brand, tokens.white],
  ['Brand dark on off-gray', tokens.brand, tokens.off],
  ['Brand dark on pink-soft (dropdown hover)', tokens.brand, tokens.pinkSoft],
  ['Brand hover on white', tokens.brandHover, tokens.white],
  ['Brand darker on white', tokens.brandDarker, tokens.white],

  // Buttons - primary
  ['White on brand dark (primary btn)', tokens.white, tokens.brand],
  ['White on brand hover (btn hover)', tokens.white, tokens.brandHover],
  ['White on brand darker (footer/sticky)', tokens.white, tokens.brandDarker],

  // Outline / secondary buttons
  ['Brand dark on white (outline btn)', tokens.brand, tokens.white],
  ['Brand dark on pink-soft (outline hover)', tokens.brand, tokens.pinkSoft],

  // Hero
  ['Hero h1 #0a4f66 on white veil (~96%)', tokens.heroH1, 'rgba(255,255,255,0.96)'],
  ['Hero h1 #0a4f66 on white', tokens.heroH1, tokens.white],
  ['Brand dark eyebrow on white veil', tokens.brand, 'rgba(255,255,255,0.96)'],
  ['Brand dark eyebrow on white', tokens.brand, tokens.white],
  ['Hero h1 on hero photo bg #0a3040', tokens.heroH1, tokens.heroBg],

  // Accent red
  ['Accent red on white', tokens.accent, tokens.white],
  ['Accent deep on white', tokens.accentDeep, tokens.white],
  ['White on accent red', tokens.white, tokens.accent],
  ['Accent on error bg #fdecef', tokens.accent, tokens.errorBg],
  ['Accent deep on error bg', tokens.accentDeep, tokens.errorBg],

  // Trust band / stats
  ['White on brand dark gradient', tokens.white, tokens.brand],
  ['White 92% on brand dark', 'rgba(255,255,255,0.92)', tokens.brand],
  ['White 85% on brand dark', 'rgba(255,255,255,0.85)', tokens.brand],

  // Contact sidebar (cyan bg)
  ['White on brand dark (contact sidebar)', tokens.white, tokens.brand],
  ['White 88% on brand dark', 'rgba(255,255,255,0.88)', tokens.brand],
  ['CI label 88% opacity white on brand dark', 'rgba(255,255,255,0.88)', tokens.brand],

  // Contact tabs
  ['White on brand dark (active tab)', tokens.white, tokens.brand],
  ['Soft text on white (inactive tab)', tokens.textSoft, tokens.white],

  // Footer
  ['White on brand-darker footer', tokens.white, tokens.brandDarker],
  ['White 88% on brand-darker', 'rgba(255,255,255,0.88)', tokens.brandDarker],

  // Sticky bar
  ['White on brand-darker sticky', tokens.white, tokens.brandDarker],
  ['White on brand dark sticky CTA', tokens.white, tokens.brand],

  // Forms
  ['Label text on white form', tokens.text, tokens.white],
  ['Placeholder-like soft on white', tokens.textSoft, tokens.white],
  ['Success green on #E8F5E9', tokens.success, '#E8F5E9'],
  ['Maroon/brand on white form focus border', tokens.brand, tokens.white],

  // Page banner
  ['Brand on white banner h1', tokens.brand, tokens.white],
  ['Text on white banner sub', tokens.text, tokens.white],
  ['Soft text on white banner', tokens.textSoft, tokens.white],

  // Product cards / sections
  ['Brand on pink-mid card bg', tokens.brand, tokens.pinkMid],
  ['Text on pink-mid', tokens.text, tokens.pinkMid],
  ['Soft on grey #f3f4f6', tokens.textSoft, tokens.greyBg2],

  // Partner badges
  ['White on accent badge', tokens.white, tokens.accent],
  ['Brand on rgba cyan tint', tokens.brand, 'rgba(0,177,239,0.06)'],
  ['Brand on rgba cyan tint 5%', tokens.brand, 'rgba(0,177,239,0.05)'],

  // About hero gradients
  ['White on about blue gradient dark', tokens.white, tokens.aboutBlue1],
  ['White on about green gradient dark', tokens.white, tokens.aboutGreen1],
  ['White 95% on about blue', 'rgba(255,255,255,0.95)', tokens.aboutBlue1],

  // Logo subtitle
  ['Soft text under logo', tokens.textSoft, tokens.white],

  // Nav
  ['Nav uppercase on white', tokens.text, tokens.white],
  ['Nav hover brand on white', tokens.brand, tokens.white],

  // Marquee
  ['Soft text marquee on white', tokens.textSoft, tokens.white],
  ['Brand active marquee on white', tokens.brand, tokens.white],

  // EMI / calc tabs
  ['Soft on off tab bg', tokens.textSoft, tokens.off],
  ['Brand active tab on white', tokens.brand, tokens.white],

  // Misc hero CTA colors
  ['White on #0a8caf hero btn', tokens.white, tokens.heroTeal],
  ['White on #0d5c3d hero btn', tokens.white, tokens.heroGreen],
];

console.log('\n=== WCAG 2.1 Contrast Audit — Prateek Finserve ===\n');
console.log('Normal text: AA ≥ 4.5:1 | AAA ≥ 7:1 | Large text (≥18px bold / ≥24px): AA ≥ 3:1\n');

const fails = [];
const warnings = [];

for (const [label, fg, bg] of pairs) {
  const ratio = contrast(fg, bg);
  const g = grade(ratio);
  const gLarge = grade(ratio, true);
  const icon = g === 'FAIL' ? '✗' : g === 'AA-large-only' ? '⚠' : g === 'AA' ? '~' : '✓';
  const line = `${icon} ${ratio.toFixed(2)}:1 [${g}${g === 'AA-large-only' ? ` / large:${gLarge}` : ''}] — ${label}`;
  console.log(line);
  if (g === 'FAIL') fails.push({ label, fg, bg, ratio });
  else if (g === 'AA-large-only') warnings.push({ label, fg, bg, ratio });
}

console.log('\n=== SUMMARY ===');
console.log(`Total pairs checked: ${pairs.length}`);
console.log(`Pass AA (normal or large): ${pairs.length - fails.length - warnings.length + warnings.filter(w => grade(w.ratio, true) !== 'FAIL').length}`);
console.log(`Large-text only (3:1–4.5:1): ${warnings.length}`);
console.log(`Fail (<3:1 even for large): ${fails.length}`);

if (fails.length) {
  console.log('\n--- CRITICAL FAILURES ---');
  fails.forEach((f) => console.log(`  • ${f.ratio.toFixed(2)}:1 — ${f.label} (${f.fg} on ${f.bg})`));
}

if (warnings.length) {
  console.log('\n--- WARNINGS (OK for large/bold only) ---');
  warnings.forEach((w) => console.log(`  • ${w.ratio.toFixed(2)}:1 — ${w.label}`));
}
