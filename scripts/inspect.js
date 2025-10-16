const fs = require('fs');
const p = 'petzfantasy-ds.html';
const s = fs.readFileSync(p, 'utf8');

for (let i = 0; i < s.length; i++) {
  const ch = s[i];
  if (ch === '\uFFFD') {
    const context = s.slice(Math.max(0, i - 5), i + 5);
    const codes = Array.from(context).map(c => c.codePointAt(0).toString(16)).join(' ');
    console.log('Context:', JSON.stringify(context));
    console.log('Codes  :', codes);
  }
}
