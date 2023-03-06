function whileLoop1() {
  const array = [];
  let i = 0;
  while (i < 10) {
    array.push(i);
    i++;
  }
  return array;
}
console.log('whileLoop1 output', whileLoop1());

function whileLoop2() {
  const array = [];
  let i = 0;
  while (i < 19) {
    array.push(i);
    i += 2;
  }
  return array;
}
console.log('whileLoop2 output', whileLoop2());

function forLoop1() {
  const array = [];
  for (let i = 0; i < 10; i++) {
    array.push(i);
  }
  return array;
}
console.log('forLoop1 output', forLoop1());

function forLoop2() {
  for (let i = 100; i > 0; i--) {
    console.log('Time till explosion: ' + i + '!');
  }
}
forLoop2();

function forInLoop1(object) {
  const array = [];
  for (const x in object) {
    array.push(x);
  }
  return array;
}
const object = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine'
};
console.log(forInLoop1(object));

function forInLoop2(object) {
  const array = [];
  for (const x in object) {
    array.push(object[x]);
  }
  return array;
}
console.log(forInLoop2(object));
