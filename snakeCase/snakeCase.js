const snakeCase = function(phrase) {
  let snakeCase = phrase.replace(/\.{2,}|-/g, ' ').replace(/[^a-zA-Z0-9\s-]/g, '');
  if( snakeCase.indexOf(' ') === -1 ) {
    snakeCase = snakeCase.replace(/([a-z])([A-Z])/g, '$1 $2');
  }
  return snakeCase.toLowerCase().trim().replace(/\s/g, '_');
};

module.exports = snakeCase
