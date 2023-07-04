function attachEvents() {

    const baseUrl = `http://localhost:3030/jsonstore/forecaster/locations`;

    const locationInputElement = document.getElementById('location');
    const submitBtn = document.getElementById('submit');
    const mainForecastDivElement = document.getElementById('forecast');
    const currForecastDivElement = document.querySelector('#current');
    const upcomingForecastDivElement = document.querySelector('#upcoming');

    submitBtn.addEventListener('click', onSubmit);

    function onSubmit() {

        const locationName = locationInputElement.value;

        mainForecastDivElement.style.display = 'block';

        

        fetch(baseUrl)
            .then(response => response.json())
            .then(data => {
                const copyData = [...data];
                const currLocationData = copyData.find(x => x.name === locationName);
                const currCode = currLocationData.code;
                
                    const currUrl = `http://localhost:3030/jsonstore/forecaster/today/${currCode}`;
                    const upComingUrl = `http://localhost:3030/jsonstore/forecaster/upcoming/${currCode}`;

                    fetch(currUrl)
                        .then(response => response.json())
                        .then(data => {
                            const currName = data.name;
                            const currCondition = data.forecast.condition;
                            const currHighTemp = data.forecast.high;
                            const currLowTemp = data.forecast.low;
                            let symbol = '';

                            if (currCondition === 'Sunny') {
                                symbol = '&#x2600;';
                            } else if (currCondition === 'Partly sunny') {
                                symbol = '&#x26C5;';
                            } else if (currCondition === 'Overcast') {
                                symbol = '&#x2601;';
                            } else if (currCondition === 'Rain') {
                                symbol = '&#x2614;';
                            }

                            const newDivElement = document.createElement('div');
                            newDivElement.classList.add('forecasts');

                            const spanConditionSymbolElement = document.createElement('span');
                            spanConditionSymbolElement.classList.add('condition');
                            spanConditionSymbolElement.classList.add('symbol');
                            spanConditionSymbolElement.innerHTML = symbol;

                            const spanConditionInfoElement = document.createElement('span');
                            spanConditionInfoElement.classList.add('condition');

                            const spanNameElement = document.createElement('span');
                            spanNameElement.classList.add('forecast-data');
                            spanNameElement.textContent = currName;

                            const spanDegreseElement = document.createElement('span');
                            spanDegreseElement.classList.add('forecast-data');
                            spanDegreseElement.innerHTML = `${currLowTemp}&#176;/${currHighTemp}&#176;`

                            const spanConditionElement = document.createElement('span');
                            spanConditionElement.classList.add('forecast-data');
                            spanConditionElement.textContent = currCondition;

                            spanConditionInfoElement.appendChild(spanNameElement);
                            spanConditionInfoElement.appendChild(spanDegreseElement);
                            spanConditionInfoElement.appendChild(spanConditionElement);

                            newDivElement.appendChild(spanConditionSymbolElement);
                            newDivElement.appendChild(spanConditionInfoElement);

                            currForecastDivElement.appendChild(newDivElement);

                        });

                    fetch(upComingUrl)
                        .then(response => response.json())
                        .then(data => {

                            const newDivElement = document.createElement('div');
                            newDivElement.classList.add('forecast-info');

                            const dataAsArr = [...data.forecast];
                            dataAsArr.forEach((x) => {

                                const currCondition = x.condition;
                                const currHighTemp = x.high;
                                const currLowTemp = x.low;
                                let symbol = '';

                                if (currCondition === 'Sunny') {
                                    symbol = '&#x2600;';
                                } else if (currCondition === 'Partly sunny') {
                                    symbol = '&#x26C5;';
                                } else if (currCondition === 'Overcast') {
                                    symbol = '&#x2601;';
                                } else if (currCondition === 'Rain') {
                                    symbol = '&#x2614;';
                                }

                                const spanUpcomingElement = document.createElement('span');
                                spanUpcomingElement.classList.add('upcoming');

                                const spanConditionSymbolElement = document.createElement('span');
                                spanConditionSymbolElement.classList.add('symbol');
                                spanConditionSymbolElement.innerHTML = symbol;

                                const spanDegreseElement = document.createElement('span');
                                spanDegreseElement.classList.add('forecast-data');
                                spanDegreseElement.innerHTML = `${currLowTemp}&#176;/${currHighTemp}&#176;`

                                const spanConditionElement = document.createElement('span');
                                spanConditionElement.classList.add('forecast-data');
                                spanConditionElement.textContent = currCondition;

                                spanUpcomingElement.appendChild(spanConditionSymbolElement);
                                spanUpcomingElement.appendChild(spanDegreseElement);
                                spanUpcomingElement.appendChild(spanConditionElement);

                                newDivElement.appendChild(spanUpcomingElement);
                                upcomingForecastDivElement.appendChild(newDivElement);
                            })
                        })
                
            })
            .catch(err => {

                const newParagraphElement = document.createElement('p');
                newParagraphElement.textContent = 'Error';
                mainForecastDivElement.appendChild(newParagraphElement);
            });

        if (currForecastDivElement.children[1] && upcomingForecastDivElement.children[1]) {
            currForecastDivElement.children[1].remove();
            upcomingForecastDivElement.children[1].remove();
        }

        if (mainForecastDivElement.children[2]) {
            mainForecastDivElement.children[2].remove();
        }
    }
}

attachEvents();