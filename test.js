const kthSmallest = (root, k) => {
  let data = [];

  // dfs inOrder
  const dfs = (root) => {
    if (root.left) dfs(root.left);
    data.push(root.val);
    if (root.right) dfs(root.right);
  };
  dfs(root);
  return data[k - 1];
};
