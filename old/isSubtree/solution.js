function isSubtree(t1, t2) {
  if (!t1 && !t2) {
    return true;
  }
  if (t1 && !t2) {
    return true;
  }
  if (!t1) {
    return false;
  }
  if (t1.value !== t2.value) {
    return isSubtree(t1.left, t2) || isSubtree(t1.right, t2);
  }
  return isTreeEqual(t1, t2);
}

/**
 * @param {Tree} left
 * @param {Tree} right
 */
function isTreeEqual(left, right) {
  if (left == null && right == null) {
    return true;
  }
  if (left == null || right == null) {
    return false;
  }
  if (left.value !== right.value) {
    return false;
  }
  return (
    isTreeEqual(left.left, right.left) && isTreeEqual(right.right, left.right)
  );
}
// Definition for binary tree:
function Tree(x) {
  this.value = x;
  this.left = null;
  this.right = null;
}
