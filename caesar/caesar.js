const caesar = function(src, shift) {
  if( src.length === 0 ) return '';

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const len = alphabet.length;
  const shiftNormalized = shift - (Math.floor(shift/len) * len); // Normalize shift to positive int && capped to less than (len * 2)
  const char = src.substr(0, 1);
  const charLower = char.toLowerCase();
  const charIndex = alphabet.indexOf(charLower);
  let newChar = char;
  if( charIndex >= 0 ) {
    let newIndex = charIndex + shiftNormalized;
    if( newIndex >= len ) newIndex -= len; // check for overflow

    newChar = alphabet[newIndex];
    if( char === charLower.toUpperCase() ) newChar = newChar.toUpperCase(); // check original char case
  }

  return newChar + caesar(src.substr(1), shift);
}

module.exports = caesar
