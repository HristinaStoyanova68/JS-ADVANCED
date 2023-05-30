function search() {
   //capture elements

   const listOfTowns = document.querySelectorAll("#towns li");
   const inputValue = document.querySelector("input").value;
   const result = document.getElementById("result");

   //business logic

   let matches = 0;

   for (const li of listOfTowns) {
      const inputToLower = inputValue.toLowerCase();
      const liTextToLower = li.textContent.toLowerCase();

      if (liTextToLower.includes(inputToLower)) {
         li.style.fontWeight = "bold";
         li.style.textDecoration = "underline";
         matches++;
      } else {
         li.style.fontWeight = "";
         li.style.textDecoration = "";
      }
   }

   result.textContent = `${matches} matches found`;
}
