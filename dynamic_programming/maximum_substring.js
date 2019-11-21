/**
 * Find the length of longest substring of a given string of digits, such
 * that sum of digits in first half and second half  of the substring is same.
 * Example:
 *       Input: 142124
 *       Output: 6
 * 
 * The whole string is the answer, because sum of first three digits = sum of last
 * three digits (1+4+2 = 1+2+4)
 * 
 *      Input:  9430723
 *      Output: 4
 * 
 * longest substring with first and second half having equal sum is "4307".
 */

/**
 * Naive Brute Force Approach 
 * Runtime O(n^3)
 * @param {string} str - A string containing integer numbers
 * @returns {number} - longest substring which sum of either half is same
 */
function maxSubStringLength(str) {
  const n = str.length;
  let maxLen = 0;

  for(let i=0; i < n; i++) {
    // i is start index of substring
    for(j=i+1; j < n; j+=2) {
      // j is end index of substring (even length)
      let len = j - i + 1;

      // if maxLen > length of current string, do nothing
      if(maxLen > len) {
        continue;
      }

      let lSum = 0, rSum = 0;
      let halfLen = len/2;
      for(let k=0; k < len/2; k++) {
        lSum += parseInt(str[i+k]); 
        rSum += parseInt(str[i+k+halfLen]);
      }

      if(lSum == rSum) {
        maxLen = len;
      }
    }
  }
  return maxLen;
}

/**
 * The above brute force solution is not an optimal solution since there are 
 * subproblems and the subproblems are overlapping. For example, sum of digits
 * from index i to j is already computed while checking for one substring. Then
 * for another substring (in next loop), we may be computing the sum of digits
 * from i+1 to j. We are computing this sum all over again when we can reuse the
 * sum of digits from i to j and subtract str[i] from this sum (constant time 
 * operation), rather than recomputing the sum from i+1 to j (linear time operation) 
 */

/**
 * Creates a memoization table to store intermediate values
 * @param {string} str - A string of integer characters
 * @returns {array} - A 2D array initially filled with zeroes
 */
function createSumsTable(str) {
  let length = str.length;
  let arr = new Array(length);
  for(let i=0; i < length; i++) {
    arr[i] = new Array(length).fill(0);
  }
  return arr;
}