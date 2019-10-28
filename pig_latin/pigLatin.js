function translate(phrase) {
  const words = phrase.split(' ');
  const transformed = [];
  words.forEach(word => {
    let suffix = '';
    for( let i = 0; i < word.length; i++ ) {
      const c = word[i];
      if( /[aeiou]/.test(c.toLowerCase()) ) {
        suffix += 'ay';
        transformed.push(word.substr(i) + suffix);
        return;
      }

      if( 'q' === c.toLowerCase() && i < word.length - 1 && word[i+1].toLowerCase() === 'u' ) {
        suffix += c + word[i+1];
        i += 1;
        continue;
      }

      suffix += c;
    }
  });
  return transformed.join(' ');
}

module.exports = {
  translate,
};
