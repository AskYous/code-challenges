/**
 * @param {Tree} t
 * @param {number} k
 */
function kthSmallestInBST(t, k) {
  let current = t;
  let i = 0;
  while (current) {
    if (!current.left) {
      if (++i === k) return current.value;
      current = current.right;
    } else {
      let temp = current.left;
      while (temp.right !== null && temp.right !== current) temp = temp.right;
      if (!temp.right) {
        temp.right = current;
        current = current.left;
      } else {
        temp.right = null;
        if (++i === k) return current.value;
        current = current.right;
      }
    }
  }
}

function Tree(x) {
  this.value = x;
  this.left = null;
  this.right = null;
}

const ans = kthSmallestInBST(
  {
    value: 3,
    left: {
      value: 1,
      left: null,
      right: null
    },
    right: {
      value: 5,
      left: {
        value: 4,
        left: null,
        right: null
      },
      right: {
        value: 6,
        left: null,
        right: null
      }
    }
  },
  4
);

console.log(ans);
