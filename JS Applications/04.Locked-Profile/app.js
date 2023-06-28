function lockedProfile() {
    
    
    const url = 'http://localhost:3030/jsonstore/advanced/profiles';

    fetch(url)
    .then(response => response.json())
    .then(data => {
        const dataAsArray = Object.values(data);
        console.log(dataAsArray);
    })
}