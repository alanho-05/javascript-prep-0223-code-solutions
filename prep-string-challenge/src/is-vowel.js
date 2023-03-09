/* exported isVowel */
function isVowel(character) {
  const x = character.toUpperCase();
  if (x === 'A' || x === 'E' || x === 'I' || x === 'O' || x === 'U') {
    return true;
  } else {
    return false;
  }
}
