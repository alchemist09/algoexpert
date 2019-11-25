/**
 * Given an empty plot of size 2 x n. We want to place tiles such that the plot is
 * entirely covered. Each tile is of size 2 x 1 and can either be placed vertically
 * or horizontally. If n is 5, then on way to over the plot is show in the second
 * diagram below.
 * 
 * Write a function that accepts n as input and returns the total number of ways
 * in which we can place the tiles (without breaking the tiles).
 *



  (a) Empty plot
_ _ _ _ _ _ _ _
|  |  |  |  |  |
- - - - - - - - 
|  |  |  |  |  |
- - - - - - - - 

   (b) Tiles places in plot
_ _ _ _ _ _ _ _
|\\|\\\\\|\\|\\|
|\\|\\\\\|\\\\\|
- - - - - - - - 


    Solution

Let us define recursion. We can place the tile either horizontally or vertically.

1. If we place the first tile vertically, then the problem reduces to:
   Number of ways tiles can be placed on a plot of size 2 * (n-1)

  _ _ _ _ _ _ _ _
  |\\|  |  |  |  |
  - - - - - - - - 
  |\\|  |  |  |  |
  - - - - - - - - 
     |<-- n-1 -->|

2. If we place the first tile horizontally, then the second tile must also be 
   placed horizontally. The problem then reduces to :
   Number of ways tiles can be placed on a plot of size 2 * (n-2)

   _ _ _ _ _ _ _ _
  |\\\\\|  |  |  |
  - - - - - - - - 
  |\\\\\|  |  |  |
  - - - - - - - - 
        |<- n-2 >|


In both cases we define the large problem in terms of smaller subproblems of the
same type. This is recursion. Recursion also has two terminating conditions, which
are: 
    If n == 1, there is just on possible way:
      - place one tile vertically
    If n == 2, there are two possible ways:
      - place both tiles vertically
      - place both tiles horizontally

*/

/**
 * Brute Force implementation of tiling problem
 * @param {number} n - Length of the floor
 * @returns {number} - No. of ways to tile specifed floor
 */
function countWays(n) {
  if(n == 0) { return 0; }
  if(n == 1) { return 1; }
  if(n == 2) { return 2; }
  return countWays(n-1) + countWays(n-2)
}

countWays(5);