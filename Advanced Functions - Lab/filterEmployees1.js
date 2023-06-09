function filterEmployees(employees, criteria) {

  const employeesAsArr = JSON.parse(employees);
  const [prop, value] = criteria.split('-');

  const result = employeesAsArr.filter(x => x[prop] == value);

  for (let i = 0; i < result.length; i++) {
    const fullName = result[i]['first_name'] + ' ' + result[i]['last_name'];
    const email = result[i]['email'];

    console.log(`${i}. ${fullName} - ${email}`);
  }
  //console.log(result);
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