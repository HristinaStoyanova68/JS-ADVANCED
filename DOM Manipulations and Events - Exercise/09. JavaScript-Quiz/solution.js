function solve() {
  const sectionElemArr = Array.from(document.querySelectorAll('#quizzie section'));
  //console.log(sectionElemArr);
  const correctAnswersArr = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
  const resultElem = document.querySelector('#results');
  let trueAnswers = 0;

  for (let index = 0; index < correctAnswersArr.length; index++) {
    const currSection = sectionElemArr[index];
    const nextSection = sectionElemArr[index + 1];

    const [leftBtn, rightBtn] = currSection.querySelectorAll('.answer-wrap');

    leftBtn.addEventListener('click', checkAnswer);
    rightBtn.addEventListener('click', checkAnswer);

    function checkAnswer(event) {
      const clickedAnswer = event.target;
      const clickedAnswerText = clickedAnswer.textContent;

      correctAnswersArr.forEach(corrAnswer => {

        if (corrAnswer === clickedAnswerText) {
          trueAnswers++;
        }
      });

      currSection.style.display = 'none';

      if (index < 2) {
        nextSection.style.display = 'block';
      } else {
        resultElem.style.display = 'block';
        let resultTextElement = document.querySelector('#results li h1');

        if (trueAnswers === 3) {
          resultTextElement.textContent = 'You are recognized as top JavaScript fan!';
        } else {
          resultTextElement.textContent = `You have ${trueAnswers} right answers`;
        }
      }
    }
  }
}
