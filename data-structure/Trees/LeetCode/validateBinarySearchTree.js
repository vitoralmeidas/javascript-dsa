/*
Valid BST
- The left subtree of a node contain only nodes with key less than the node's key.
- The right subtree of a node contain only nodes with key greater than the node's key.
- Both the left and right subtrees must also be binary search trees.
*/

/*

 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }

*/

const isValidBST = (root, min = -Infinity, max = Infinity) => {
  if (!root) return true;
  if (!(root.val > min && root.val < max)) return false;

  return (
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  );
};
