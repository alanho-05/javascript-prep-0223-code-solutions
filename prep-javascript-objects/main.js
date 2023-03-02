const person = {
  firstName: 'Alan',
  lastName: 'Ho',
  hobby: 'Gaming'
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);

person.job = 'Mortgage Closer';
console.log("The person's current job is:", person.job);

person['previousJob'] = 'Assistant Paralegal';
console.log("The person's previous job is:", person['previousJob']);
console.log('The complete person object:', person);
