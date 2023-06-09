function area() {
    return Math.abs(this.x * this.y);
   };
   function vol() {
    return Math.abs(this.x * this.y * this.z);
   };
   function solve(area, vol, input) {

    const inputAsArr = JSON.parse(input);
    const result = [];

    for (const data of inputAsArr) {
        let calculatorObj = {
            area: area.call(data),
            volume: vol.call(data),
        }
        result.push(calculatorObj);
    }
    
    return result;
   }
   console.log(solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
    ));
      