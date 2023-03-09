/* exported capitalize */
function capitalize(word) {
  let cap = '';
  for (let c = 0; c < word.length; c++) {
    if (c === 0) {
      const x = word.charAt(c);
      cap += x.toUpperCase();
    } else {
      const y = word.charAt(c);
      cap += y.toLowerCase();
    }
  }
  return cap;
}
