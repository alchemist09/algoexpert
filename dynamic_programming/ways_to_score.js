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

