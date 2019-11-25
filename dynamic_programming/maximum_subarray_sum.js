/**
 Given an array of integers, write a function that returns the maximum sum
 of sub array such that items are contiguous

    Input Array: {-2, -3, 4, -1, -2, 1, 5, -3}
    Output: 7
    maximum subarray: {4, -1, -2, 1, 5}
*/

/**
 * Brute Force Approach
 * O(n^2) runtime
 */
function maxSubArraySum(arr) {
  let maxSum = 0;
  let tempSum = 0;
  const length = arr.length;
  for(let i=0; i < length; i++) {
    // temp sum holds the sum of elements from i to j index (including both)
    tempSum = arr[i];
    for(let j=i+1; j < length; j++) {
      tempSum += arr[j];
      if(tempSum > maxSum) {
        maxSum = tempSum;
      }
    }
  }
  return maxSum;
}

/**
 * Using Kadane's algorithm
 * O(n) runtime
 */

function maxSubArraySum2(arr) {
  let maxSumEndingHere = 0;
  let maxSumSoFar = 0;
  const length = arr.length;

  for(let i=0; i < length; i++) {
    maxSumEndingHere = maxSumEndingHere + arr[i];

    if(maxSumEndingHere < 0) {
      maxSumEndingHere = 0;
    }

    if(maxSumSoFar < maxSumEndingHere) {
      maxSumSoFar = maxSumEndingHere;
    }
  }

  return maxSumSoFar;
}

const arr = [-2, -3, 4, -1, -2, 1, 5, -3];
maxSubArraySum(arr);
maxSubArraySum2(arr);