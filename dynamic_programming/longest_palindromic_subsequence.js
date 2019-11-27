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