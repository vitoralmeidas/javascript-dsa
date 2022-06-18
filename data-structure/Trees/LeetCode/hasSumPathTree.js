/*
    Given the root of a binary tree and an integer targetSum, return true 
        if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
    A leaf is a node with no children.
*/

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
 * @param {number} targetSum
 * @return {boolean}
 */

const hasPathSum = (root, targetSum) => {
  if (!node) return false;
  //if the left or right child returns true, then the current node is a valid path
  //if the left or right child returns false, then the current node is not a valid path
  if (!root.left && !root.right) return targetSum === root.val;
  return (
    //subtracting the targetSum from the current node's value
    //and passing the subtracted value to the left and right children
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
};
