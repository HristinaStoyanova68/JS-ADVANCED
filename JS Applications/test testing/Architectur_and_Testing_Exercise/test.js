// const { chromium } = require('playwright-chromium');
// (async () => {
// const browser = await chromium.launch();
// const page = await browser.newPage();
// await page.goto('https://google.com/');
// await page.screenshot({ path: `example.png` });
// await browser.close();
// })();

const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

let browser, page; // Declare reusable variables
describe('E2E tests', async function () {
    before(async () => { 
        browser = await chromium.launch(); 
    });

    after(async () => { 
        await browser.close(); 
    });

    beforeEach(async () => {
         page = await browser.newPage(); 
        });

    afterEach(async () => { 
        await page.close(); 
    });

    it('load static page', async () => {
        await page.goto('https://softuni.bg');
        await page.screenshot({ path: 'index.png'});
        //await browser.close();
        expect(1).to.equal(1);
    })
});