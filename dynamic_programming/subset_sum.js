/**
 Given an array of non-negative integers and a positive number X, determine if 
 there exists a subset of elements of array with sum equal to X.
 For example:
            Input array: {3, 2, 7, 1}    X = 6
            Output: True  // because sum of {3, 2, 1} is 6
*/

/**
 * Recursive solution, O(2^N)
 * @param {array} arr - Array of non-negative integers
 * @param {number} target - The target sum
 * @returns {boolean} - Returns true if the sum of subset of arr adds up to target, false otherwise
 */
function isSubsetSum(arr, target) {
  const len = arr.length;
  if(target == 0) {
    return true;
  }

  if(len == 0) {
    return false;
  }

  if(arr[0] > target) {
    return isSubsetSum(arr.slice(1), target);
  }

  return isSubsetSum(arr.slice(1), target) || isSubsetSum(arr, target-arr[0]);
}

/**
 * Creates memoization matrix for subset sum problem
 * @param {array} arr - Array of non-negative integers 
 * @param {number} target - The target sum
 * @returns {array} - 2D array with rows equal to lenght of array and columns equal to target
 */
function createMatrix(arr, target) {
  const table = new Array(arr.length+1);
  for(let i=0; i < table.length; i++) {
    table[i] = new Array(target+1).fill(0);
  }
  return table;
}

/**
 * Dynamic Programming Solution O(N^2)
 * @param {*} arr - Array of non-negative integers
 * @param {*} target - The target sum
 * @returns {boolean} - Returns true if sum of subset of arr adds up to target, false otherwise
 */
function isSubsetSumDP(arr, target) {
  const T = createMatrix(arr, target);
  
  // if target is 0, then answer is true
  for(let i=0; i <= arr.length; i++) {
    T[i][0] = true;
  }

  for(let j=1; j <= target; j++) {
    T[0][j] = false; 
  }

  for(let i=1; i <= arr.length; i++) {
    for(let j=1; j <= target; j++) {
      if(j - arr[i-1] >= 0) {
        T[i][j] = T[i-1][j] || T[i-1][j-arr[i-1]];
      } else {
        T[i][j] = T[i-1][j];
      }
    }
  }

  return T[arr.length][target];
}

const arr = [3, 2, 7, 1];
const X = 6;

isSubsetSum(arr, X);
isSubsetSumDP(arr, X);