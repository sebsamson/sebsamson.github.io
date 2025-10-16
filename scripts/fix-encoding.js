const fs = require('fs');
const path = require('path');

function fixContent(s) {
  // Replace common UTF-8 -> Windows-1252 mojibake sequences
  return s
    .replace(/â€”/g, '—') // em dash
    .replace(/â€“/g, '–') // en dash
    .replace(/â€‘/g, '-') // non-breaking hyphen -> hyphen
    .replace(/â€™/g, '’') // right single quote
    .replace(/â€˜/g, '‘') // left single quote
    .replace(/â€œ/g, '“') // left double quote
    .replace(/â€/g, '”'); // right double quote
}

function run() {
  const dir = process.cwd();
  const files = fs.readdirSync(dir).filter(f => f.toLowerCase().endsWith('.html'));
  let changed = 0;
  for (const file of files) {
    const p = path.join(dir, file);
    const orig = fs.readFileSync(p, 'utf8');
    const next = fixContent(orig);
    if (next !== orig) {
      fs.writeFileSync(p, next, 'utf8');
      changed++;
      console.log(`Fixed: ${file}`);
    }
  }
  console.log(`Done. Updated ${changed} file(s).`);
}

run();
