const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

let browser, page; // Declare reusable variables
describe('E2E tests', async function () {
    this.timeout(6000);

    before(async () => { 
        browser = await chromium.launch({headless: false, slowMo: 1000}); 
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

    it ('loads article titles', async () => {
       
        await page.goto('http://localhost:5500');
        
        //await page.screenshot({ path: 'index.png'});
        const titles = await page.locator('div.head>span').allTextContents();
        //const titles = await page.textContent('div.head>span');
        //console.log(await titles.textContent());
        expect(titles).to.contains('Scalable Vector Graphics');
        expect(titles).to.contains('Open standard');
        expect(titles).to.contains('Unix');
        expect(titles).to.contains('ALGOL');
        //console.log(titles);
        //expect(1).to.equal(1);
    });

    it('shows more text', async () => {
        await page.goto('http://localhost:5500');

        await page.getByText('More').first().click();

        const visible = await page.isVisible('div.extra');
        expect(visible).to.be.true;

        const content = await page.locator('div.extra p').first().allTextContents();
        expect(content.length).to.be.greaterThan(0);
    });

    it('shows less text', async () => {
        await page.goto('http://localhost:5500');

        await page.getByText('More').first().click();
        let visible = await page.isVisible('div.extra');
        expect(visible).to.be.true;

        await page.getByText('Less').first().click();
        visible = await page.isVisible('div.extra');
        expect(visible).to.be.false;
    })
});