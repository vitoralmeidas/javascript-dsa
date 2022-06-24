const twoSum = (numbers, target) => {
  let hash = {};
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    let complement = target - element;
    if (hash.hasOwnProperty(complement)) {
      return [hash[complement] + 1, i + 1];
    }
    hash[element] = i;
  }
};
