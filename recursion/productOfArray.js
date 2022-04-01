const productOfArray = (arr) =>
  !(arr.length === 0) ? productOfArray(arr.slice(1)) * arr[0] : 1;
