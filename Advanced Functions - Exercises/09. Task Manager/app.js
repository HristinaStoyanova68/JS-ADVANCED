function solve() {

    const inputTask = document.querySelector('#task');
    const inputDescription = document.querySelector('#description');
    const inputDate = document.querySelector('#date');

    const sections = Array.from(document.querySelectorAll('section'));
    const [addSection, openSection, inProgressSection, completeSection] = sections;

    const addBtn = document.querySelector('#add');
    addBtn.addEventListener('click', actionToDo);

    function actionToDo(event) {
        event.preventDefault();

        if (inputTask.value.trim() === '' ||
            inputDescription.value.trim() === '' ||
            inputDate.value.trim() === '') {
            return;
        }

        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        h3.textContent = inputTask.value;
        const pDescr = document.createElement('p');
        pDescr.textContent = `Description: ${inputDescription.value}`;
        const pdate = document.createElement('p');
        pdate.textContent = `Due Date: ${inputDate.value}`;

        const divBtns = document.createElement('div');
        divBtns.classList.add('flex');

        const startBtn = document.createElement('button');
        startBtn.classList.add('green');
        startBtn.textContent = 'Start';
        startBtn.addEventListener('click', startArticle);

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('red');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', deleteArticle);

        divBtns.appendChild(startBtn);
        divBtns.appendChild(deleteBtn);
        article.appendChild(h3);
        article.appendChild(pDescr);
        article.appendChild(pdate);
        article.appendChild(divBtns);

        openSection.lastElementChild.appendChild(article);

        inputTask.value = '';
        inputDescription.value = '';
        inputDate.value = '';

        function deleteArticle() {
            article.remove();
        }

        function startArticle() {
            startBtn.remove();
            const finishBtn = document.createElement('button');
            finishBtn.classList.add('orange');
            finishBtn.textContent = 'Finish';
            finishBtn.addEventListener('click', finishArticle);
            divBtns.appendChild(finishBtn);
            //article.appendChild(divBtns);
            inProgressSection.lastElementChild.appendChild(article);
        }

        function finishArticle() {
            divBtns.remove();
            completeSection.lastElementChild.appendChild(article);
        }
    }
}