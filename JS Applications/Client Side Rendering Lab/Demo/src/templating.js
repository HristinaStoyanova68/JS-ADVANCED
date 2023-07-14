const templateCache = {};

// const patern1 = /%%1/gi;
// const patern2 = /%%2/gi;

const pattern = /%%([^%]+)%%/g;

export async function getTemplate(name, data) {

    if (templateCache[name] == undefined) {
        const request = await fetch(`./templates/${name}.html`);
        const result = await request.text();

        templateCache[name] = result;
    }

    let template = templateCache[name];

    template = template.replace(pattern, replacer);
    // template = template.replace(patern1, data.name);
    // template = template.replace(patern2, data.phone);

    return template;

    function replacer(match, propName) {
        //console.log(params);
        return data[propName];
        }
}

