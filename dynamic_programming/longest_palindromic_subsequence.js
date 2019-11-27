/**
 Given a string, find the longest subsequence that is also a palindrome. For example,
 if the string is BBABCBCAB, then its subsequence BABCBAB is the longest subsequence
 that is also a palindrome, so the answer is length of BABCBAB which is 7
*/

/**
 * Recursive implementation of Longest Palindromic Subsequence(LPS)
 * Uses brute force approach to try every possibilty
 * Exponenetional running time O(2^N)
 * 
 * @param {string} str - The input string
 */
function lpsRec(str) {
  if(!str) { return 0; }
  let start = 0;
  let end = str.length - 1;

  if(start > end) { return 0; }
  if(start == end) { return 1; }

  if(str.charAt(start) == str.charAt(end)) {
    return 2 + lpsRec(str.slice(start+1, end));
  } else {
    return Math.max(lpsRec(str.slice(start, end)), lpsRec(str.slice(start+1, end+1)));
  }
}

/**
 * Using Dynamic Programming to implement the Longest Palindromic Subsequence
 * Runtime is polynomial O(n^2), Space complexity is O(n^2)
 * 
 * @param {string} str The input string
 */
function lpsDP(str) {
  if(!str) { return 0; }
  const n = str.length;
  const cache = new Array(n);
  for(let i=0; i < n; i++) {
    cache[i] = new Array(n).fill(0);
  }

  // single length string are palindromes of length 1
  for(let i=0; i < n; i++) {
    cache[i][i] = 1;
  }

  // find palindromes from length 2 to n saving the longest
  for(let curr_len=2; curr_len <= n; curr_len++) {
    for(let i=0; i < n - curr_len+1; i++) {
      let j = i + curr_len-1;
      if(str.charAt(i) == str.charAt(j)) {
        cache[i][j] = 2 + cache[i+1][j-1];
      } else {
        cache[i][j] = Math.max(cache[i][j-1], cache[i+1][j]);
      }
    }
  }

  return cache[0][n-1];
}

const str1 = 'BBABCBCAB';
const str2 = 'BQADNAB';
lpsRec(str1);
lpsRec(str2);

lpsDP('AEACDEAPCR')
lpsDP('BQADNAB');