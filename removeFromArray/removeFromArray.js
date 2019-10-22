const removeFromArray = function(list, ...toRemove) {
  return list.filter(el => toRemove.includes(el) === false);
}

module.exports = removeFromArray
