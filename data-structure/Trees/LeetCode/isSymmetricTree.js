const isSymmetricTree = (root) => {
  if (!root) return true;
  // building a recursive function with that
  return isSymmetricTree(root.left, root.right);

  // recursive function to check every subtree
  const isSymmetricTree = (left, right) => {
    if (!(left && right)) return true;
    if (!left || !right || left.val !== right.val) return false;
    return (
      isSymmetricTree(left.left, right.right) &&
      isSymmetricTree(left.right, right.left)
    );
  };
};
