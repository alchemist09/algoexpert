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

/**
 * Recursion with memoization. Polynomial Runtime O(N^k)
 * @param {string} m 
 * @param {string} n 
 * @returns {number} - Length of the longest common subsequence between the two strings
 */
function lcsMemo(m, n) {
  if(m.length == 0 || n.length == 0) {
    return 0;
  }

  const T = createMemoTable(m, n);

  // if value is already computed, return it
  if(T[m.length-1][n.length-1] != -1) {
    return T[m.length-1][n.length-1];
  }

  // comparing last character of strings
  if(m.slice(-1) == n.slice(-1)) {
    T[m.length-1][n.length-1] = 1 + lcsMemo(m.slice(0, -1), n.slice(0, -1));
  } else {
    T[m.length-1][n.length-1] = Math.max(lcsMemo(m.slice(0, -1), n), lcsMemo(m, n.slice(0, -1)));
  }
  return T[m.length-1][n.length-1];
}

/**
 * Creates Dynamic Programming table used to store solutions to 
 * subproblems as they are computed bottom-up
 * 
 * @param {string} m 
 * @param {string} n 
 * @returns {array} - 2D array with all elements initialized to zero
 */
function createDPTable(m, n) {
  const arr = new Array(m.length+1);
  for(let i=0; i < arr.length; i++) {
    arr[i] = new Array(n.length+1).fill(0);
  }
  return arr;
}

/**
 * Bottom-up solution using dynamic programming
 * @param {string} m 
 * @param {string} n 
 * @returns {number} - Length of longest common subsequence between the two strings
 */
function lcsDP(m, n) {
  // T is defined globally so that once populated, it will allow
  // printing of LCS in another function call
  T[0][0] = 0;
  // case where m is empty, first row is all zeroes
  for(let i=1; i <= n.length; i++) {
    T[0][i] = 0;
  }
  // case where n is empty, first column is all zeroes
  for(let j=1; j <= m.length; j++) {
    T[j][0] = 0;
  }

  for(let i=1; i <= m.length; i++) {
    for(j=1; j <= n.length; j++) {
      if(m[i-1] == n[j-1]) {
        T[i][j] = 1 + T[i-1][j-1];
      } else {
        T[i][j] = Math.max(T[i-1][j], T[i][j-1]);
      }
    }
  }
  
  return T[m.length][n.length];
}

/**
 * Print the longest common subsequence between two strings
 * @param {string} m 
 * @param {string} n 
 * @returns {string} - The LCS between m and n
 */
function printLCS(m, n) {
  let len = lcsDP(m, n);
  const lcs = new Array(len);
  let i = m.length;
  let j = n.length;
  len--;
  while(i > 0 && j > 0) {
    // if current character in  m and n are same, include the character
    if(m[i-1] == n[j-1]) {
      lcs[len] = m[i-1];
      i--;
      j--;
      len--;
    } 
    // go in the direction of the larger value between T[i-1][j] and T[i][j-1]
    else if(T[i-1][j] > T[i][j-1]) {
      i--;
    } else {
      j--;
    }
  }
  return lcs;
}

const m = 'AEBD';
const n = 'ABCD';
lcsRec(m, n);

const x = 'ABCDEF';
const y = 'APQBRF';
lcsMemo(x, y);

const a = 'ABCDGH';
const b = 'AEDFHR'; 
const T = createDPTable(a, b);
lcsDP(a, b);

const c = 'AGGTAB';
const d = 'GXTXAYB';
const T = createDPTable(m, n);
printLCS(m, n);