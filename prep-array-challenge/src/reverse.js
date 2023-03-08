/* exported reverse */
function reverse(array) {
  const x = [];
  for (let r = array.length - 1; r >= 0; r--) {
    x.push(array[r]);
  }
  return x;
}
