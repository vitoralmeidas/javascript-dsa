/*Given an array of integers and a number, write a function called maxSubarraySub,
which finds the maximum sum of a subarray with the length of the number passed
to the function.
Note that a subarray must consist of consecutive elements from the original
array. In the first example below, [100, 200, 300] is a subarray of the original
array, but [100, 300] is not.

    maxSubarraySub([100, 200, 300, 400], 2) // 700
    maxSubarraySub([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) // 39
    maxSubarraySub([-3, -2, 7, -4, 1, -1, 4, -2, 1], 2) // 700
    maxSubarraySub([2, 3], 3) // null*/

const maxSubarraySub = (array, number) => {
    if(array.length < number) return null; 
    let maxSum = 0;
    let tempSum = 0;
    for(let i = 0; i < number; i++) {
        maxSum += array[i];
    }
    tempSum = maxSum;
    for(let i = number; i < array.length; i++) {
        tempSum = tempSum - array[i-number] + array[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return console.log(`Max = ${maxSum}`);
}

maxSubarraySub([-3, -2, 7, -4, 1, -1, 4, -2, 1], 2);
