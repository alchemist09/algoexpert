/**
 Given a 2-D array, find the total number of paths possible from top-left cell
 to bottom-right cell if we are allowed to move only rightward and downward.

 cell(m, n) can be reached from only two possible directions
  1. Top, i.e the cell above it (m-1, n)
  2. Left, i.e the cell on its left (m, n-1)

 Suppose there are P1 ways of reaching cell(m-1, n), and P2 ways of reaching 
 cell(m, n-1), then we can reach cell(m, n) in P1 + P2 unique ways, via
 cell(m-1, n) and cell(m, n-1). This defines our recursion.

 The terminating condition is when we hit the topmost row or leftmost column.
 There's only one way to reach any cell in top row,(going rightward from (0,0)).
 Similarly, there's only one way to reach any cell in leftmost column 
 (going downwards from (0, 0)). The number of ways to reach zero is 0, since we
 are already there.
*/

/**
 * Recursive function with exponential time O(2^n)
 * @param {number} m - No. of rows in matrix
 * @param {number} n - No. of column in matrix
 * @returns {number} - Total count of ways ot reach target cell
 */
function numOfPaths(m, n) {
  if(m==0 && n==0) { return 0; } // cell(0,0)
  if(m==0 || n==0) { return 1; } // top most row, or leftmost column
  return numOfPaths(m-1, n) + numOfPaths(m, n-1);
}

/**
 * Creates memoization matrix
 * @param {number} x - No. of rows in memoization matrix 
 * @param {number} y - No. of columns in memoization matrix
 * @returns {array} - The memoization matrix initialized with zeroes
 */
function create2DMatrix(x, y) {
  const arr = new Array(x);
  for(let i=0; i <= x; i++) {
    arr[i] = new Array(y+1).fill(0);
  }
  return arr;
}

/**
 * Bottom-up solution using Dynamic Programming to calculate total
 * number of ways to reach a target cell in a 2D matrix
 * 
 * @param {number} m - No. of rows in matrix
 * @param {number} n - No. of columns in matrix
 * @returns {number} - Total count of ways to reach target cell
 */
function numOfPathsDP(m, n) {
  const tbl = create2DMatrix(m, n);
  tbl[0][0] = 0; // cell(0, 0)
  // fill top row
  for(let i=1; i <= n; i++) {
    tbl[0][i] = 1;
  }

  // leftmost column 
  for(let j=1; j <= m; j++) {
    tbl[j][0] = 1;
  }

  // fill the rest of the cells
  for(let i=1; i <= m; i++) {
    for(let j=1; j <= n; j++) {
      tbl[i][j] = tbl[i-1][j] + tbl[i][j-1];
    }
  }
  return tbl[m][n];
}