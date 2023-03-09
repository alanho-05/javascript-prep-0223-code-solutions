/* exported reverseWord */
function reverseWord(word) {
  let str = '';
  for (let r = word.length - 1; r >= 0; r--) {
    str += word.charAt(r);
  }
  return str;
}
