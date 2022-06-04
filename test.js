function maxConsecutiveSequenceLength(array) {
  if (array.length === 0) return 0;
  let maxLength = 0;
  let currentLength = 1;
  let sortedArray = array.sort((a, b) => a - b);
  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] === sortedArray[i + 1]) {
      continue;
    } else if (sortedArray[i] + 1 == sortedArray[i + 1]) {
      currentLength++;
    } else {
      currentLength = 1;
    }
    maxLength = Math.max(maxLength, currentLength);
  }
  return maxLength;
}

console.log(maxConsecutiveSequenceLength([1, 1, 2, 5, 3]));
