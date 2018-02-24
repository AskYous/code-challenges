function findProfession(level, pos) {
  const absPos = Math.pow(2, level - 1) + pos - 1;
  const parents = [];
  let n = true;
  for (let i = absPos; i > 0; i = Math.floor(i / 2)) {
    parents.push(i);
  }
  parents.reverse();
  for (let p of parents) {
    n = p % 2 !== 0 ? !n : n;
  }
  return n ? 'Doctor' : 'Engineer';
}

module.exports = findProfession;
