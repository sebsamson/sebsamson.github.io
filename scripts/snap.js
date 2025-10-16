const path = require('path');
const fs = require('fs');
const puppeteer = require('puppeteer');

async function ensureDir(dir) {
  await fs.promises.mkdir(dir, { recursive: true });
}

async function snap() {
  const root = path.resolve(__dirname, '..');
  const outDir = path.join(root, 'screens');
  await ensureDir(outDir);

  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: null
  });

  const pages = [
    'index.html',
    'games.html',
    'essays-and-talks.html',
    'impact.html'
  ];

  const viewports = [
    { name: 'desktop', width: 1440, height: 900 },
    { name: 'mobile', width: 390, height: 844, isMobile: true, deviceScaleFactor: 2 }
  ];

  for (const rel of pages) {
    const filePath = path.join(root, rel);
    if (!fs.existsSync(filePath)) continue;
    const url = 'file:///' + filePath.replace(/\\/g, '/');
    for (const vp of viewports) {
      const page = await browser.newPage();
      await page.setViewport({
        width: vp.width,
        height: vp.height,
        deviceScaleFactor: vp.deviceScaleFactor || 1,
        isMobile: !!vp.isMobile,
      });
      await page.goto(url, { waitUntil: 'load', timeout: 60000 });
      // Small delay to allow fonts/images to settle
      await new Promise(r => setTimeout(r, 400));
      const outName = `${path.basename(rel, '.html')}-${vp.name}.png`;
      await page.screenshot({ path: path.join(outDir, outName), fullPage: true });
      await page.close();
      console.log('Saved', outName);
    }
  }

  await browser.close();
}

snap().catch(err => {
  console.error(err);
  process.exit(1);
});
