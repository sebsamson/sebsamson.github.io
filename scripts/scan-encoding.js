const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
for (const f of files) {
  const s = fs.readFileSync(f, 'utf8');
  const hits = [];
  if (s.includes('â€”')) hits.push('â€”');
  if (s.includes('â€“')) hits.push('â€“');
  if (s.includes('â€™')) hits.push('â€™');
  if (s.includes('â€œ')) hits.push('â€œ');
  if (s.includes('â€') || s.includes('â€') || s.includes('â€') || s.includes('â€')) hits.push('â€”like');
  if (hits.length) console.log(f, hits.join(','));
}
