function solution() {

    const url = 'http://localhost:3030/jsonstore/advanced/articles/list';

    fetch(url)
        .then(response => response.json())
        .then(listData => {

            listData.forEach(element => {
                const currId = element._id;
                const currTitle = element.title;

                const detailsUrl = `http://localhost:3030/jsonstore/advanced/articles/details/${currId}`;

                fetch(detailsUrl)
                    .then(response => response.json())
                    .then(detailsData => {
                        const content = detailsData.content;

                        const mainDivElement = document.createElement('div');
                        mainDivElement.classList.add('accordion');

                        const firstDivElement = document.createElement('div');
                        firstDivElement.classList.add('head');

                        const spanElement = document.createElement('span');
                        spanElement.textContent = currTitle;

                        const btnElement = document.createElement('button');
                        btnElement.classList.add('button');
                        btnElement.id = currId;
                        btnElement.textContent = 'More';
                        btnElement.addEventListener('click', onClick);

                        const secondDivElement = document.createElement('div');
                        secondDivElement.classList.add('extra');
                        secondDivElement.style.display = 'none';

                        const paragraphElement = document.createElement('p');
                        paragraphElement.textContent = content;

                        secondDivElement.appendChild(paragraphElement);
                        firstDivElement.appendChild(spanElement);
                        firstDivElement.appendChild(btnElement);

                        mainDivElement.appendChild(firstDivElement);
                        mainDivElement.appendChild(secondDivElement);

                        const sectionElement = document.getElementById('main');
                        sectionElement.appendChild(mainDivElement);

                        function onClick() {

                            if (btnElement.textContent === 'More') {
                                secondDivElement.style.display = 'block';

                                btnElement.textContent = 'Less';

                            } else if (btnElement.textContent === 'Less') {
                                secondDivElement.style.display = 'none';

                                btnElement.textContent = 'More';
                            }
                        }
                    });
            });
        });
}

solution()
