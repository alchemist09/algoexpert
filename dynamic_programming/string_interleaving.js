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

/**
 * Dynamic Programming solution of the string interleaving problem
 * @param {string} A - The first string
 * @param {string} B - The second string
 * @param {string} C - String to check whether it's an interleaving of A and B
 * @returns {boolean} - Returns true if C is and interleaving of A and B, false otherwise
 */
function isInterleavingDP(A, B, C) {
  if(C.length != (A.length + B.length)) {
    return false;
  }
  const tbl = createMatrix(A, B);
  tbl[0][0] = true;

  // first row, case where A is empty
  for(let j=1; j <= B.length; j++) {
    if(B[j-1] != C[j-1]) {
      tbl[0][j] = false;
    } else {
      tbl[0][j] = tbl[0][j-1];
    }
  }

  // first column, case where B is empty
  for(let i=1; i <= A.length; i++) {
    if(A[i-1] != C[i-1]) {
      tbl[i][0] = false;
    } else {
      tbl[i][0] = tbl[i-1][0];
    }
  }

  for(let i=1; i <= A.length; i++) {
    for(let j=1; j <= B.length; j++) {
      let k = i + j;
      if(A[i-1] == C[k-1]) {
        tbl[i][j] = tbl[i-1][j];
      } else if(B[j-1] == C[k-1]) {
        tbl[i][j] = tbl[i][j-1];
      } else {
        tbl[i][j] = false;
      }
      // tbl[i][j] = (A[i-1] == C[k-1] ? tbl[i-1][j] : false) || 
      //             (B[j-1] == C[k-1] ? tbl[i][j-1] : false);
    }
  }
  
  return tbl[A.length][B.length];
}