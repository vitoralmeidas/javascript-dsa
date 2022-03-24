const productOfArray = (num) => {
  if (num === 0) return 1;
  return num * productOfArray(num - 1);
};

console.log(productOfArray(2));
