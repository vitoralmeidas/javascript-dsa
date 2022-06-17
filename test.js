function invertBinarySearchTree(tree) {
  if (!tree) return null;
  if (!tree.left && !tree.right) return tree;
  if (!tree.left) {
    tree.left = tree.right;
    tree.right = null;
  } else if (!tree.right) {
    tree.right = tree.left;
    tree.left = null;
  } else {
    const temp = tree.left;
    tree.left = tree.right;
    tree.right = temp;
  }
  invertBinarySearchTree(tree.left);
  invertBinarySearchTree(tree.right);
  return tree;
}
