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
 * @return {boolean}
 */

/*
    Given a binary tree, determine if it is height-balanced.
    ... a binary tree in which the left and right subtrees of every node differ in height by no more than 1.
*/

const isBalancedTree = (root) => {
  // base case
  if (!root) return true;

  // using height to help

  const getHeight = function (root) {
    if (!root) return 0;

    let leftHeight = getHeight(root.left);
    let rightHeight = getHeight(root.right);

    let heightDiff = leftHeight - rightHeight;

    if (Math.abs(heightDiff) > 1) return -1;

    return Math.max(leftHeight, rightHeight) + 1;
  };

  if (getHeight(root) === -1) return false;
  return isBalancedTree(root.left) && isBalancedTree(root.right);
};
