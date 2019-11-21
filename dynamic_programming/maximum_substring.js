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
 * param {string} str - A string containing integer numbers
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

