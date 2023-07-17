import page from '../node_modules/page/page.mjs';

page('/', () => console.log('home path'));
page('/catalog', () => console.log('catalog page'));
page('/about', () => console.log('what about'));
page.start();