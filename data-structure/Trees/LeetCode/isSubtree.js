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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

/*
Given the roots of two binary trees root and subRoot, 
    return true if there is a subtree of root with the same structure 
    and node values of subRoot and false otherwise.
A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants.
 The tree tree could also be considered as a subtree of itself.
*/

const isSubtree = (s, t) => {
  // s = tree, t = subtrees
  // s could have a null tree, so if t is null. T could be a S's subtree
  if (!t) return true;
  //if S is null, so there's no tree or subtree!
  if (!s) return false;

  //Helper function isSameTree to check each subtree with the another one
  const isSameTree = (s, t) => {
    //they're equals, even they're both null
    if (!s && !t) return true;
    if (!s || !t || s.val !== t.val) return false;

    //check each node of each tree
    return isSameTree(s.left, t.left) && isSameTree(s.right, t.right);
  };

  if (isSameTree(s, t)) return true;
  // loop through each S's subtrees
  return isSubtree(s.left, t) || isSubtree(s.right, t);
};
