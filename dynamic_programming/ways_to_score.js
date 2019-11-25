/**
 Consider a game where a player can score 3, 5, or 10 points in one move. Given
 a total score of N, find the total number of unique ways to reach a score of N.

 For example, if N=13, output should be 5 because there are 5 ways to reach a 
 score of 13 as shown below:

 (3, 10), (3, 5, 5), (5, 3, 5), (5, 5, 3), (10, 3)

 The recursion to solve this problem is:

 #of ways to score N = #of ways to score (N-10) +
                       #of ways to score (N-5) +
                       #of ways to score (N-3)


  With the below terminating conditions
    1. #of ways to score N is 0 if n<0
    2. #of ways to score N is 1 if n==0

*/

/**
 * Brute force implementatoin of Ways to Score algorithm
 * @param {number} n - The target score
 */
function waysToScore(n) {
  if(n < 0) {
    return 0;
  }
  if(n == 0) {
    return 1;
  }

  return waysToScore(n-10) + waysToScore(n-5) + waysToScore(n-3);
}


/**
 * Bottom-up approach using dynamic programming
 * @param {number} n - The target score
 * @returns {number} - Count of the different ways to score
 */
function waysToScore2(n) {
  const arr = new Array(n+1).fill(0);
  arr[0] = 1
  for(let i=1; i <= n; i++) {
    if(i-3 >= 0) {
      arr[i] = arr[i-3] + arr[i];
    } 
    
    if(i-5 >= 0) {
      arr[i] = arr[i-5] + arr[i];
    } 

    if(i-10 >= 0) {
      arr[i] = arr[i-10] + arr[i];
    }
  }
    
  return arr[n];
}