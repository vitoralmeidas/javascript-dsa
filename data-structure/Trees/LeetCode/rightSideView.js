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
