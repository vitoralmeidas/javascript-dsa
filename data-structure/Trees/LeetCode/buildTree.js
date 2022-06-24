/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

const buildTree = (preorder, inorder) => {
  // base case
  if (preorder.length === 0 || inorder.length === 0) return null;

  //create a new node (root) using the first position on preorder, which is always the root
  const root = new TreeNode(preorder[0]);

  //find the index of the node in inorder array
  const index = inorder.indexOf(preorder[0]);

  //building the tree with recursion...
  root.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index));
  root.right = buildTree(preorder.slice(index + 1), inorder(index + 1));

  return root; // the entire tree
};
/*
<root>  <left> <right> -> each tree and subtree
  preorder = [ 3,    9,   20, 15 7]
              root  left   right

<left> <root> <right> -> each tree and subtree
  inorder = [  9,    3,   15, 20, 7]
             left   root    right
*/
