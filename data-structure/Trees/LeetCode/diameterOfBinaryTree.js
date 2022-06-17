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
/* 

Given the root of a binary tree, return the length of the diameter of the tree.
The diameter of a binary tree is the length of the longest path between any two nodes in a tree. 
This path may or may not pass through the root.
The length of a path between two nodes is represented by the number of edges between them.
*/

const diameterBST = (root) => {
  //Diameter of a leaf in tree
  let max = 0;

  const dfs = function (root) {
    if (!root) return -1;

    let left = dfs(root.left);
    let right = dfs(root.right);
    //Max diameter
    max = Math.max(max, left + right + 2);

    //return height
    return Math.max(left, right) + 1;
  };

  dfs(root);
  return max;
};
