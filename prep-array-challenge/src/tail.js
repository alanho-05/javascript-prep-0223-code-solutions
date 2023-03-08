/* exported tail */
function tail(array) {
  const x = [];
  for (let t = 1; t < array.length; t++) {
    x.push(array[t]);
  }
  return x;
}
