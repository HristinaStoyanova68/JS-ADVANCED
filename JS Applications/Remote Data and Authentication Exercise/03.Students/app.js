const url = 'http://localhost:3030/jsonstore/collections/students';

const tbodyElement = document.querySelector('tbody');

const formElement = document.getElementById('form');
formElement.addEventListener('submit', onSubmit);

extractStudents();

async function onSubmit(e) {
    e.preventDefault();

    const [
        firstNameInputElement,
        lastNameInputElement,
        facultyNumberInputElement,
        gradeInputElement
    ]
        = document.querySelectorAll('input');

    const firstName = firstNameInputElement.value;
    const lastName = lastNameInputElement.value;
    const facultyNumber = facultyNumberInputElement.value;
    const grade = gradeInputElement.value;

    if (
        firstName === '' ||
        lastName === '' ||
        facultyNumber === '' ||
        grade === ''
    ) {
        return;
    }

    createStudent(firstName, lastName, facultyNumber, grade);

    const bodyContent = {
        firstName,
        lastName,
        facultyNumber,
        grade
    }

    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(bodyContent)
    }
    fetch(url, options)
    
    firstNameInputElement.value = '';
    lastNameInputElement.value = '';
    facultyNumberInputElement.value = '';
    gradeInputElement.value = '';
}

function extractStudents() {

    fetch(url)
    .then(res => res.json())
    .then(data => {
        Object.values(data).forEach(element => {
            const firstName = element.firstName;
            const lastName = element.lastName;
            const facultyNumber = element.facultyNumber;
            const grade = element.grade;

            createStudent(firstName, lastName, facultyNumber, grade);
        })
    })
}

function createStudent(firstName, lastName, facultyNumber, grade) {

    const trElement = document.createElement('tr');

    const firstNameTdElement = document.createElement('td');
    firstNameTdElement.textContent = firstName;
    const lastNameTdElement = document.createElement('td');
    lastNameTdElement.textContent = lastName;
    const facultyNumberTdElement = document.createElement('td');
    facultyNumberTdElement.textContent = facultyNumber;
    const gradeTdElement = document.createElement('td');
    gradeTdElement.textContent = grade;

    trElement.append(
        firstNameTdElement,
        lastNameTdElement,
        facultyNumberTdElement,
        gradeTdElement
    );

    tbodyElement.appendChild(trElement);
}

