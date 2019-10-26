const palindromes = function(text) {

  const plainText = text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const plainReversed = plainText.split('').reduce((acc, l) => l + acc, '');
  return plainText === plainReversed;

}

module.exports = palindromes
