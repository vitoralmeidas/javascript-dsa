/*
Given the root of a binary tree, imagine yourself standing on the right side of it,
return the values of the nodes you can see ordered from top to bottom.
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
 * @return {number[]}
 */

const rightSideView = (root) => {
  let ans = [];
  let q = [root];

  while (q.length) {
    let rightSide = null;

    let qLen = q.length;
    for (let i = 0; i < qLen; i++) {
      let node = q.shift();
      if (node !== null) {
        rightSide = node;
        if (node.left) q.push(node.left);
        if (node.right) q.push(node.right);
      }

      if (rightSide !== null) {
        ans.push(rightSide.val);
      }
    }
  }
  return ans;
};
