function solve() {

    const infoElement = document.querySelector('#info span');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');


    let busStop = {
        name: '',
        next: 'depot'
    };

    function depart() {
        //get info for next stop
        //display next stop

        departBtn.disabled = true;

        const url = `http://localhost:3030/jsonstore/bus/schedule/${busStop.next}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                busStop.name = data.name;
                busStop.next = data.next;

                infoElement.textContent = `Next stop ${busStop.name}`;
            })
            .catch(err => {
                departBtn.disabled = true;
                arriveBtn.disabled = true;

                infoElement.textContent = `Error`;
            });

        arriveBtn.disabled = false;
    }

    function arrive() {
        arriveBtn.disabled = true;

        infoElement.textContent = `Arriving at ${busStop.name}`;

        departBtn.disabled = false;

    }

    return {
        depart,
        arrive
    };
}

let result = solve();