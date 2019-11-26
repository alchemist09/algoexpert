/**
 A subsequence of a string S is a set of characters that appear in the string
 in left-to-right order, but not necessarily consecutively. For example, if 
 string is ACTTGCG, 
      then, ACT, ATTC, T, ACTTCG are all subsequences
      but TTA is not a subsequence of the string

 A common subsequence of two strings is a subsequence such that it's a subsequence
 of both strings. A longest common subsequence (LCS) is a common subsequence of
 maximal length     
*/

/**
 * Recursive solution, O(2^N)
 * @param {string} m - The first string
 * @param {string} n - The second string
 * @returns {number} - Length of the longest common subsequence between the two strings
 */
function lcsRec(m, n) {
  // if length of either input string is zero, there's no common subsequence
  if(m.length == 0 || n.length == 0) {
    return 0;
  }

  // case where last character of either substring is same
  if(m.slice(-1) == n.slice(-1)) {
    return 1 + lcsRec(m.slice(0, -1), n.slice(0, -1));
  } else {
    // if ending characters are not same, return maximum of two recursive calls
    return Math.max(lcsRec(m.slice(0, -1), n), lcsRec(m, n.slice(0, -1)));
  }
}

/**
 * Creates memoization table for LCS problem
 * @param {string} m 
 * @param {string} n 
 * @returns {array} - 2D array use to cache computed values
 */
function createMemoTable(m, n) {
  const arr = new Array(m.length);
  for(let i=0; i < arr.length; i++) {
    arr[i] = new Array(n.length).fill(-1);
  }
  return arr;
}