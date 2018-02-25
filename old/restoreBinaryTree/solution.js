/**
 * @param {number[]} inorder
 * @param {number[]} preorder
 */
function restoreBinaryTree(inorder, preorder) {
  if (!inorder.length) return null;
  if (inorder.length == 1) return new Tree(inorder[0]);
  const root = new Tree(preorder[0]);
  const i = inorder.indexOf(root.value); // divider;
  const li = inorder.slice(0, i);
  const ri = inorder.slice(i + 1);
  const lp = preorder.filter(x => li.includes(x));
  const rp = preorder.filter(x => ri.includes(x));
  root.left = restoreBinaryTree(li, lp);
  root.right = restoreBinaryTree(ri, rp);
  return root;
}

// Definition for binary tree:
function Tree(x) {
  this.value = x;
  this.left = null;
  this.right = null;
}
const answer = restoreBinaryTree([4, 2, 1, 5, 3, 6], [1, 2, 4, 3, 5, 6]);
console.log(answer);
