function getInfo() {

    //read input value
    //request to server
    //parse data
    //display data
    //check error

    // const stopId = document.getElementById('stopId').value;
    // const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

    // fetch(url)
    // .then(res => res.json())
    // .then(data => console.log(data))
    
    let inputIdElem = document.getElementById('stopId');

    let ulElements = document.getElementById('buses');
    let divElem = document.getElementById('stopName');


    let url = `http://localhost:3030/jsonstore/bus/businfo/${inputIdElem.value}`;

   fetch(url)
   .then(response => response.json())
   .then(data => {
    let buses = data.buses;
    //console.log(buses);
    let name = data.name;

    divElem.textContent = name;
    ulElements.innerHTML = '';

    Object.keys(buses).forEach(bus => {
        let liElem = document.createElement('li');
        liElem.textContent = `Bus ${bus} arrives in ${buses[bus]} minutes`;
        ulElements.appendChild(liElem);
    })
   })
   .catch(error => {

    divElem.textContent = 'Error';
    ulElements.innerHTML = '';
   });
}