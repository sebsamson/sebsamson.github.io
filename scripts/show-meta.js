const fs = require('fs');
const file = process.argv[2] || 'petzfantasy-ds.html';
const s = fs.readFileSync(file, 'utf8');
const lines = s.split(/\r?\n/);
for (let i=0;i<lines.length;i++) {
  if (lines[i].includes('<meta name="description"')) {
    console.log(`${file}:${i+1}: ${lines[i]}`);
  }
  if (lines[i].includes('<h2>')) {
    console.log(`${file}:${i+1}: ${lines[i]}`);
  }
}
