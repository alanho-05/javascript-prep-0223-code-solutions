function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
console.log('Results of 2 numbers added:', addTwoNumbers(2, 2));

function convertHoursToMinutes(hours) {
  return hours * 60;
}
console.log('Hours converted to minutes:', convertHoursToMinutes(2));

function getGreeting(name) {
  return 'Hello ' + name + '!';
}
console.log('Generated greetings:', getGreeting('World'));

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
console.log('Results of 2 numbers added then times by 5:', addAndMultiplyBy5(10, 5));

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
console.log('Results from the product of 2 numbers then divided by 5:', multiplyAndDivideBy5(35, 10));

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
console.log('Results of subtraction of 2 numbers:', subtractTwoNumbers(22, 7));

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
console.log('Circumference of a circle:', getCircleCircumference(5));

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
console.log('Their name is:', getFullName('Juan', 'Ramirez'));

function cube(number) {
  return number * number * number;
}
console.log('Cube power of a number:', cube(5));
