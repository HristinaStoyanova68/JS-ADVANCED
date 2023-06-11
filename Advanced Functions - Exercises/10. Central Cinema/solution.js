function solve() {
    
    const onScreenBtn = document.querySelector('#container button');
    onScreenBtn.addEventListener('click', onScreenHandler);
    const clearArchiveBtn = document.querySelector('#archive > button');
    clearArchiveBtn.addEventListener('click', clearArchive);

    function onScreenHandler(event) {

        event.preventDefault();

        const inputs = Array.from(document.querySelectorAll('#container input'));
        const inputName = inputs[0];
        const inputHall = inputs[1];
        const inputTicketPrice = inputs[2];
        let name = inputName.value;
        let hallName = inputHall.value;
        let price = inputTicketPrice.value;

        if (name.trim() !== '' &&
            hallName.trim() !== '' &&
            price.trim() !== '' &&
            !isNaN(Number(price))) {

            price = Number(price);

            let li = document.createElement('li');
            let spanName = document.createElement('span');
            spanName.textContent = name;
            let hallStrong = document.createElement('strong');
            hallStrong.textContent = `Hall: ${hallName}`;
            let rightSectionDiv = document.createElement('div');
            let priceStrong = document.createElement('strong');
            priceStrong.textContent = price.toFixed(2);

            let ticketsSoldInput = document.createElement('input');
            ticketsSoldInput.setAttribute('placeholder', 'Tickets Sold');

            let archiveBtn = document.createElement('button');
            archiveBtn.textContent = 'Archive';
            archiveBtn.addEventListener('click', archiveMovie);

            rightSectionDiv.appendChild(priceStrong);
            rightSectionDiv.appendChild(ticketsSoldInput);
            rightSectionDiv.appendChild(archiveBtn);

            li.appendChild(spanName);
            li.appendChild(hallStrong);
            li.appendChild(rightSectionDiv);

            let moviesUl = document.querySelector('#movies ul');
            moviesUl.appendChild(li);

            inputName.value = '';
            inputHall.value = '';
            inputTicketPrice.value = '';
        }
    }

    function archiveMovie(event) {
        let movieLi = event.target.parentElement.parentElement;
        let ticketsSoldInput = movieLi.querySelector('div input');
        let ticketsSold = ticketsSoldInput.value;

        if (ticketsSold.trim() !== '' &&
            !isNaN(Number(ticketsSold))) {
            ticketsSold = Number(ticketsSold);

            let priceStrong = movieLi.querySelector('div strong');
            let price = Number(priceStrong.textContent);


            let hallStrong = movieLi.querySelector('strong');
            let totalPrice = price * ticketsSold;
            hallStrong.textContent = `Total amount: ${totalPrice.toFixed(2)}`;

            let rightDiv = movieLi.querySelector('div');
            rightDiv.remove();

            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', deleteFromArchive);
            movieLi.appendChild(deleteBtn);

            let archiveUl = document.querySelector('#archive ul');
            archiveUl.appendChild(movieLi);

        }
    }

    function deleteFromArchive(event) {

        let currElement = event.target;
        let movieLi = currElement.parentElement;
        movieLi.remove();
    }

    function clearArchive() {

        let archiveLis = Array.from(document.querySelectorAll('#archive ul li'));
        archiveLis.forEach(element => element.remove());
    }
}