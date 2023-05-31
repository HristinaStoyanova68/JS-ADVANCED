function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   //debugger;

   //capture elements
   let input = document.querySelector('#inputs>textarea');
   let bestRestaurantResult = document.querySelector('#bestRestaurant>p');
   let workersResult = document.querySelector('#workers>p');
   //debugger;
   
   function onClick() {

      let arr = JSON.parse(input.value);
      let restaurants = {};

      for (let element of arr) {
         let [name, workers] = element.split(' - ');
         let workersCollection = workers.split(', ');

         //workers dictionary collection
         let workersDictCollection = [];

         for (let worker of workersCollection) {
            let [workerName, salary] = worker.split(' ');
            salary = Number(salary);
            workersDictCollection.push({ name: workerName, salary });
         }

         if (restaurants[name]) {
            workersDictCollection = workersDictCollection.concat(
               restaurants[name].workersDictCollection);
         }

         workersDictCollection.sort((w1, w2) => w2.salary - w1.salary);

         let bestSalary = workersDictCollection[0].salary;
         let totalSalary = workersDictCollection.reduce((sum, w) => sum + w.salary, 0);
         let averageSalary = totalSalary / workersDictCollection.length;

         restaurants[name] = {
            workers: workersDictCollection,
            averageSalary,
            bestSalary,
         }
      }

      let bestRestaurantResultSalary = 0;
      let bestRestaurant = undefined;

      for (let name in restaurants) {
         let currrRestaurant = restaurants[name];
         // console.log({currrRestaurant});

         if (currrRestaurant.averageSalary > bestRestaurantResultSalary) {
            bestRestaurant = {
               name,
               workers: currrRestaurant.workers,
               bestSalary: currrRestaurant.bestSalary,
               averageSalary: currrRestaurant.averageSalary,
            };

            bestRestaurantResultSalary = currrRestaurant.averageSalary;
         }
      }

      bestRestaurantResult.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;
      
      let result = [];

      // console.log(bestRestaurant);
      // console.log(bestRestaurant.workers);
      
      for (let worker of bestRestaurant.workers) {
         result.push(`Name: ${worker.name} With Salary: ${worker.salary}`);
      };

      workersResult.textContent = result.join(' ');
      //console.log(workersResult);
   }
}

