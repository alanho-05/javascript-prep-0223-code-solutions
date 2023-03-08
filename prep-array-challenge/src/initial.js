/* exported initial */
function initial(array) {
  const x = [];
  for (let i = 0; i < array.length - 1; i++) {
    x.push(array[i]);
  }
  return x;
}
