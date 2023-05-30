function solve() {

  //constants
  const CAMEL_CASE = "Camel Case";
  const PASCAL_CASE = "Pascal Case";

  //capture elements
  const inputValueByLowerCase = document
    .getElementById("text")
    .value.toLowerCase();
  const currCaseValue = document
    .getElementById("naming-convention").value;
    const result = document.getElementById("result");

    //validate case
    if (currCaseValue !== CAMEL_CASE && currCaseValue !== PASCAL_CASE) {
      result.textContent = 'Error!';
      return;
    } 

    const arrOfStrings = inputValueByLowerCase.split(' ');
    let output = '';
    let startingPoint = 0;

    if (currCaseValue === CAMEL_CASE) {
      output += arrOfStrings[0];
      startingPoint = 1;
    }

    for (let i = startingPoint; i < arrOfStrings.length; i++) {
      const currWord = arrOfStrings[i]
      output += currWord[0].toUpperCase() + currWord.slice(1, currWord.length);

      result.textContent = output;      
    }
}

