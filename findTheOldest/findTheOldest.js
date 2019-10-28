let findTheOldest = function(people) {
  const currentYear = new Date().getFullYear();
  let oldest = undefined;
  people.forEach(p => {
    if( !p.yearOfBirth ) return;

    const age = (p.yearOfDeath || currentYear) - p.yearOfBirth;
    if( !oldest || oldest.age < age ) oldest = { ...p, age};
  });
  return oldest;
}

module.exports = findTheOldest
