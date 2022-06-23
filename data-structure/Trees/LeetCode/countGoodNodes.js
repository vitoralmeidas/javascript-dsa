/*
Given a binary tree root, a node X in the tree is named good
if in the path from root to X there are no nodes with a value greater than X.
Return the number of good nodes in the binary t
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
 * @return {number}
 */

const goodNodesCount = (root) => {
  //preOrder <root><left><right>
  const dfs = (node, maxValue) => {
    if (!node) return 0;
    let res = 0;

    res = node.val >= maxValue ? 1 : 0;
    maxValue = Math.max(maxValue, node.val);

    res += dfs(node.left, maxValue);
    res += dfs(node.right, maxValue);
    return res;
  };

  dfs(root, root.val); //root.val = -Infinity
};
