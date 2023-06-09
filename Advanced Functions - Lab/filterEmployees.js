function filterEmployees(employees, criteria) {

  const employeesAsArr = JSON.parse(employees);
  const [prop, value] = criteria.split('-');

  employeesAsArr
    .filter(x => x[prop] == value)
    .map((x, i) => {
      const fullName = x.first_name + ' ' + x.last_name;

      console.log(`${i}. ${fullName} - ${x.email}`)
    });
}

filterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
  'gender-Female'
);