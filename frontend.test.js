const puppeteer = require('puppeteer');
const path = require('path');

describe('Frontend Tests', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
   executablePath: '/usr/bin/chromium-browser',
   headless: true
    });
    page = await browser.newPage();
    
    await page.goto('file://' + path.join(__dirname, 'Home.html'));
    
  });

  afterAll(async () => {
    await browser.close();
  });

  test('Page title should be "DevOps Project"', async () => {
    const title = await page.title();
    expect(title).toBe('DevOps Project');
  });

  test('Page should contain a header with the text "Company"', async () => {
    const headerText = await page.$eval('h1', (element) => element.innerText);
    expect(headerText).toBe('Company');
  });

});
