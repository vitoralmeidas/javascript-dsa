/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 **/

/*
Given the roots of two binary trees p and q, write a function to check if they are the same or not.
Two binary trees are considered the same if they are structurally identical, and the nodes have the same value
 */

const isSameTree = (p, q) => {
  //If both tree are null, they are equals
  if (!p && !q) return true;
  //if p's root value is different q's root value, they are differents
  // if just one tree is null, they are different
  if (p.val !== q.val || !p || !q) return false;
  //check each sub trees
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
