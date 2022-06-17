/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

const maxDepth = (root) => {
  if (!root) return 0;

  let leftHeight = maxDepth(root.left);
  let rightHeight = maxDepth(root.right);
  return Math.max(leftHeight, rightHeight) + 1;
};
