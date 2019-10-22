const ftoc = function(f) {
  return Number( ((f - 32) * 5/9).toFixed(1) );
}

const ctof = function(c) {
  return Number( ((c * 9/5) + 32).toFixed(1) );
}

module.exports = {
  ftoc,
  ctof
}
