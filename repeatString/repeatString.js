const repeatString = function(str, times) {
  if( times < 0 ) return 'ERROR';
  if( times === 0 ) return '';
  return str + repeatString(str, times - 1);
}

module.exports = repeatString
