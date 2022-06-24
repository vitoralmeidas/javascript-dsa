const twoSum = (nums, target) => {
  let hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (hashMap.hasOwnProperty(complement)) {
      return [hashMap[complement], i];
    }
    hashMap[nums[i]] = i;
  }
};

console.log(twoSum([10, 34, 90, 100, 2, 12, 0, 7], 9));
