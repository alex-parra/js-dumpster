const sumAll = function(start, end) {
  if( typeof start !== 'number' || typeof end !== 'number' ) return 'ERROR';

  const [first, last] = ( end < start ) ? [end, start] : [start, end];

  if( first < 0 || last < 0 ) return 'ERROR';

  if( first === last ) return last;

  return first + sumAll(first + 1, last);
}

module.exports = sumAll
