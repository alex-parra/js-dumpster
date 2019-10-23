const fibonacci = function(x) {
  x = Number(x);
  if( isNaN(x) || x < 0 ) return 'OOPS';
  return ( x < 2 ) ? x : fibonacci(x - 2) + fibonacci(x - 1);
}

module.exports = fibonacci
