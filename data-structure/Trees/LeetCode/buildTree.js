// START OF THE BEGINNING OF THE CODE, DO ALL AGAIN
const buildTree = (preorder, inorder) => {
  if (preorder.length === 0) return null;
  const root = new TreeNode(preorder[0]);
  const index = inorder.indexOf(preorder[0]);
  root.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index));
  root.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1));
  return root;
};
