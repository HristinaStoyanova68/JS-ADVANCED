function lockedProfile() {
    
    const mainElement = document.getElementById('main');
    const firstDivElement = document.querySelector('.profile');

    const url = 'http://localhost:3030/jsonstore/advanced/profiles';

    fetch(url)
    .then(response => response.json())
    .then(data => {
        const dataAsArray = Object.values(data);
        
        for (let i = 0; i < dataAsArray.length; i++) {
            const personData = dataAsArray[i];
            const userName = personData.username;
            const userEmail = personData.email;
            const userAge = personData.age;

            if (i === 0) {
                const [lock, unlock, username, email, age] = document.querySelectorAll('.profile input');
                
                username.value = userName;
                email.value = userEmail;
                age.value = userAge;

                firstDivElement.querySelector('div').style.display = 'none';
                firstDivElement.querySelector('button').addEventListener('click', onClick);
                continue;
            }

            const newMainDivElement = document.createElement('div');
            newMainDivElement.classList.add('profile');

            const imgElement = document.createElement('img');
            imgElement.src = './iconProfile2.png';
            imgElement.classList.add('userIcon');

            const lockLabelElement = document.createElement('label');
            lockLabelElement.textContent = 'Lock';

            const lockInputElement = document.createElement('input');
            lockInputElement.type = 'radio';
            lockInputElement.name = `user${i + 1}Locked`;
            lockInputElement.value = 'Lock';

            const unlockLabelElement = document.createElement('label');
            unlockLabelElement.textContent = 'Unlock';

            const unlockInputElement = document.createElement('input');
            unlockInputElement.type = 'radio';
            unlockInputElement.name = `user${i + 1}Locked`;
            unlockInputElement.value = 'Unlock';

            const brElement = document.createElement('br');
            const hrElement = document.createElement('hr');

            const usernameLabelElement = document.createElement('label');
            usernameLabelElement.textContent = 'Username';
            
            const usernameInputElement = document.createElement('input');
            usernameInputElement.type = 'text';
            usernameInputElement.name = `user${i + 1}Username`;
            usernameInputElement.value = userName;
            usernameInputElement.disabled = 'readonly';

            const userDivElement = document.createElement('div');
            userDivElement.classList.add(`user${i + 1}Username`);
            userDivElement.style.display = 'none';

            const secondNrElement = document.createElement('hr');

            const emailLabelElement = document.createElement('label');
            emailLabelElement.textContent = 'Email:';

            const emailInputElement = document.createElement('input');
            emailInputElement.type = 'email';
            emailInputElement.name = `user${i + 1}Email`;
            emailInputElement.value = userEmail;
            emailInputElement.disabled = 'readonly';

            const ageLabelElement = document.createElement('label');
            ageLabelElement.textContent = 'Age:';

            const ageInputElement = document.createElement('input');
            ageInputElement.type = 'email';
            ageInputElement.name = `user${i + 1}Age`;
            ageInputElement.value = userAge;
            ageInputElement.disabled = 'readonly';

            const btnElement = document.createElement('button');
            btnElement.textContent = 'Show more';
            btnElement.addEventListener('click', onClick);

            userDivElement.appendChild(secondNrElement);
            userDivElement.appendChild(emailLabelElement);
            userDivElement.appendChild(emailInputElement);
            userDivElement.appendChild(ageLabelElement);
            userDivElement.appendChild(ageInputElement);

            newMainDivElement.appendChild(imgElement);
            newMainDivElement.appendChild(lockLabelElement);
            newMainDivElement.appendChild(lockInputElement);
            newMainDivElement.appendChild(unlockLabelElement);
            newMainDivElement.appendChild(unlockInputElement);
            newMainDivElement.appendChild(brElement);
            newMainDivElement.appendChild(hrElement);
            newMainDivElement.appendChild(usernameLabelElement);
            newMainDivElement.appendChild(usernameInputElement);
            newMainDivElement.appendChild(userDivElement);
            newMainDivElement.appendChild(btnElement);

            mainElement.appendChild(newMainDivElement);

            
        }
    });

    function onClick(event) {
        const currBtn = event.currentTarget;
        const currMainDivElement = currBtn.parentElement;

        const currUserDivElement = currMainDivElement.querySelector('div');

        const [currLockInputElement, currUnlockInputElement] = currMainDivElement.querySelectorAll('input');

        if (!currLockInputElement.checked && currUnlockInputElement.checked) {

            if (currBtn.textContent === 'Show more') {
                currBtn.textContent = 'Hide it';
                currUserDivElement.style.display = 'block';
            } else {
                currBtn.textContent = 'Show more';
                currUserDivElement.style.display = 'none';
            }
        }
    }
}