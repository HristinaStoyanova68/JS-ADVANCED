function solve() {

  //capture elements

  const table = document.querySelector('table.table tbody');
  const [input, output] = [...document.querySelectorAll('textarea')];
  const [generateBtn, buyBtn] = [...document.querySelectorAll('button')];

  //attach events

  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);

  //helper functions

  function p(...content) {
    return createElement('p', {}, ...content);
  }

  function td(...content) {
    return createElement('td', {}, ...content);
  }

  function createElement(type, props, ...content) {
    const element = document.createElement(type);

    //loop props and fill element
    for (const prop in props) {
      element[prop] = props[prop];
    }

    //loop content and fill element
    for (let entry of content) {

      if (typeof entry === 'string' || typeof entry === 'number') {
        entry = document.createTextNode(entry);
      }

      element.appendChild(entry);
    }

    return element;
  }

  //on click events

  const items = [];
  function generate(event) {
    // read input JSON and parse it
    // for every array element, create table row
    const data = JSON.parse(input.value);

    for (let item of data) {

      //create checkbox
      const checkbox = createElement('input', { type: 'checkbox' });

      //create row
      const { img, name, price, decFactor } = item;

      const row = createElement(
        'tr',
        {},
        td(createElement('img', { src: img })),
        td(p(name)),
        td(p(price)),
        td(p(decFactor)),
        td(checkbox),
      );

      //push items

      items.push({ 
        element: row, 
        isChecked, 
        item });

      function isChecked() {
        return checkbox.checked;
      }

      table.appendChild(row);
    }
  }

  function buy(event) {

    const furniture = items.filter((i) => i.isChecked())
    .reduce(
      (acc, { item: curr}, i, a) => {
        acc.names.push(curr.name);
        acc.total += Number(curr.price);
        acc.decFactor += Number(curr.decFactor) / a.length;
        return acc;
      },
      {names: [], total: 0, decFactor: 0}
      );

      const result = `Bought furniture: ${furniture.names.join(', ')}\nTotal price: ${furniture.total.toFixed(2)}\nAverage decoration factor: ${furniture.decFactor}`;

      output.value = result;
  }
}
