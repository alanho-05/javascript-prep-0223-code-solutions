/* exported compact */
function compact(array) {
  const x = [];
  for (let c = 0; c < array.length; c++) {
    if (Boolean(array[c]) === true) {
      x.push(array[c]);
    } else continue;
  }
  return x;
}
