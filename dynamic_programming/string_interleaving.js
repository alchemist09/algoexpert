/**
 String C is said to be an intervleaving of string A and B if it contains all
 the characters from A and B, and the relative order of characters of both of 
 the strings is preserved in C. For example:
      A = xyz
      B = abcd
      C = xabyczd (intervleaving of A and B)

      A = bcc
      B = bbca
      C = bbcbcac (intervleaving of A and B)
*/

/**
 * Brute Force solution takes exponential time O(2^N)
 * @param {string} A - The first string
 * @param {string} B - The second string
 * @param {string} C - The interleaved string of strings A and B
 * @returns {boolean} - Returns true if C is an interleaving of A and B, otherwise false
 */
function isInterleaving(A, B, C) {
  // if all strings are empty
  if(!A && !B && !C) {
    return true;
  }

  // if C is empty, A or B, or both are not empty
  if(!C) {
    return false;
  }

  // if both A and B are empty but C is not
  if(!A && !B) {
    return false;
  }

  let first = false
  let second = false;

  // if first character of A == first character of C
  if(A[0] == C[0]) {
    first = isInterleaving(A.slice(1), B, C.slice(1));
  }

  // if first character of B == first character of C
  if(B[0] == C[0]) {
    second = isInterleaving(A, B.slice(1), C.slice(1));
  }

  return (first || second);
}

/**
 * Creates a memoization matrix 
 * @param {number} x - No. of rows in memoization matrix 
 * @param {number} y - No. of columns in memoization matrix
 * @returns {array} - 2D array that acts as memoization matrix filled with zeroes 
 */
function createMatrix(x, y) {
  const arr = new Array(x.length + 1);
  for(let i=0; i < arr.length; i++) {
    arr[i] = new Array(y.length + 1).fill(0);
  }
  return arr;
}