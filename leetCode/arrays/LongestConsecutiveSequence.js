// Time complexity: 0(N) - loop
// Space complexity: 0(N) - hashSet

const longestConsecutive = (nums) => {
  // Create an empty hash Set
  let numSet = new Set();
  // Insert all array elements to numSet
  for (let i = 0; i < nums.length; i++) {
    numSet.add(nums[i]);
  }
  let maxSequenceLength = 0;
  // loop for every element array
  for (let j = 0; j < nums.length; j++) {
    let currentNum = nums[j];
    // we need at least one number, it's shortest subsequence
    let currentSequenceLength = 1;
    // check if this element is the starting point of a subsequence.
    //Simply look for currentNum - 1 in hashSet, if not found, then is the first element of a subsquence
    if (!numSet.has(currentNum - 1)) {
      //if this element is the firts element, then count the number of elements in the consecutive starting with this element.
      // Interate from nums[j] + 1 till the last element that can be found
      while (numSet.has(currentNum + 1)) {
        currentNum += 1;
        currentSequenceLength += 1;
      }
    }
    //if the count is more than the previous longest subsquence found, then update this
    maxSequenceLength = Math.max(maxSequenceLength, currentSequenceLength);
  }
  return maxSequenceLength;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
