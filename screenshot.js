const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://croissant.io');
  await page.screenshot({ path: 'croissant.png' });

  await browser.close();
})();