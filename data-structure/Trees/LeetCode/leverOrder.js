var levelOrder = function (root) {
  // BFS Solution

  let q = [root],
    data = [];

  //When the input is [], the root is null, and the q.length=1.
  //You can add one line at the beginning if(root == null) return [];
  while (q[0]) {
    let qlen = q.length,
      row = [];
    for (let i = 0; i < qlen; i++) {
      let curr = q.shift();
      row.push(curr.val);
      if (curr.left) q.push(curr.left);
      if (curr.right) q.push(curr.right);
    }
    data.push(row);
  }
  return data;
};
