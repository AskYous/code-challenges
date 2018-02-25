/**
 * @param {Tree} t
 */
function traverseTree(t) {
  if (!t) return [];
  const q = [];
  const a = [];
  q.push(t);
  while (q.length) {
    const t = q.shift();
    a.push(t.value);
    if (t.left) q.push(t.left);
    if (t.right) q.push(t.right);
  }
  return a;
}

function Tree(x) {
  this.value = x;
  this.left = null;
  this.right = null;
}

const a = traverseTree({
  value: 1,
  left: {
    value: 2,
    left: null,
    right: {
      value: 3,
      left: null,
      right: null
    }
  },
  right: {
    value: 4,
    left: {
      value: 5,
      left: null,
      right: null
    },
    right: null
  }
});
console.log(a);
