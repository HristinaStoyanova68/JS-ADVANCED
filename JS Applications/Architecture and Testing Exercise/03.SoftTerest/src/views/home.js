let section = document.getElementById('homePage');
section.remove();

let ctx = null;

export function showHome(context) {
    ctx = context;
    context.showSection(section);
    section.querySelector('#getStartedLink').addEventListener('click', (event) => {
        event.preventDefault();
        ctx.goTo('catalog');
    })
}