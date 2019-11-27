/**
 Given a iron rod of certain length and the price of selling rods of different 
 lengths in the market, how would we cut the rod so that the profit is maximized?

 For example, let us say the price of rods of different lengths in the market
 is as given below.

          Length        Price
               1 ---->  1
               2 ---->  5
               3 ---->  8
               4 ---->  9
               5 ---->  10
               6 ---->  17
               7 ---->  17
               8 ---->  20

 If we have a rod of length 4, then selling the rod as it is will bring us a profit
 of 9 dollars. Where as if we cut it into two pieces of length 2 each, then the two
 pieces will be sold for 5 dollars each bring in 10 USD. (5+5=10). Hence it's a good 
 idea to cut the rod into 2 pieces rather than selling it as a whole.

 But we're still not sure if cutting it into two pieces is the most optimal solution
 or not because we have not seen all possible values. Since we're cutting the rod
 into integer lengths only, the table below shows all possible ways of cutting the 
 rod and the cost of that combination in the market.

        Length of Each Part                Total Market Value
                        4     - - - ->       9
                     1, 3     - - - ->       9 (1+8)
                  1, 1, 2     - - - ->       7 (1+1+ 5)
                     2, 2     - - - ->       10 (5+5)
               1, 1, 1, 1     - - - ->       4 (1+1+1+1)

 From the table above, it's clear that cutting the rod into two equal pieces of
 length 2 gives us the maximum value.

*/

/**
 * Array Index Represents Length of Rod
 */
const price = [0, 1, 5, 8, 9, 10, 17, 17, 20];

/**
 * Brute Force Recursive Solution
 * @param {array} values - Prices associated with different rod lengths. 
 * @param {number} n - Length of the rod
 * @returns {number} - Maximum value that can be derived from cutting rod of length n
 */
function cutRod(values, n) {
  if(n <= 0) { return 0 }
  let maxValue = Number.MIN_VALUE;
  for(let i=1; i <= n; i++) {
    maxValue = Math.max(maxValue, price[i] + cutRod(values, n-i))
  }
  return maxValue;
}

/**
 * Recursion with Memoization Solution
 * @param {array} values - Prices of various rod lengths. Array index represents length of rod
 * @param {number} n - The length of the rod in question
 * @returns {number} - Maximum value that can be derived from cutting a rod of length n
 */
function cutRodMemo(values, n) {
  const maxValues = new Array(n+1).fill(0);
  function cr(values, n) {
    if(maxValues[n] != 0) {
      return maxValues[n]
    }
    maxValues[n] = Number.MIN_VALUE;
    for(let i=1; i <= n; i++) {
      maxValues[n] = Math.max(maxValues[n], values[i] + cr(values, n-i));
    }
    return maxValues[n];
  }
  cr(values, n);
  return maxValues[n];
}

/**
 * Dynamic Programming Solution
 * @param {array} values - Prices of various rod lengths. Array index represents length of rod
 * @param {number} n - The length of the rod in question
 * @returns {number} - Maximum value that can be derived from cutting a rod of length n
 */
function cutRodDP(values, n) {
  const maxValues = new Array(n+1).fill(Number.MIN_VALUE);
  maxValues[0] = 0;
  for(let i=1; i <= n; i++) {
    for(let j=1; j <= i; j++) {
      maxValues[i] = Math.max(maxValues[i], values[j] + maxValues[i-j]);
    }
  }
  return maxValues[n];
}

/**
 * Dynamic Programming Solution using a 2D Array
 * @param {array} values - Prices of various rod lengths. Array index represents length of rod
 * @param {number} n - The length of the rod in question
 * @returns {number} - Maximum value that can be derived from cutting a rod of length n
 */
function cutRodDP2(values, n) {
  const arr = new Array(values.length + 1);
  for(let i=0; i < arr.length; i++) {
    arr[i] = new Array(n+1).fill(Number.MIN_VALUE);
  }

  // fill top-left cell
  arr[0][0] = 0

  // fill the first column
  for(let i=1; i <= values.length; i++) {
    arr[i][0] = 0;
  }

  // fill the first row
  for(let j=1; j <= n; j++) {
    arr[0][j] = 0
  }

  for(let i=1; i <= values.length; i++) {
    for(let j=1; j <= n; j++) {
      if(j >= i) {
        arr[i][j] = Math.max(arr[i-1][j], (values[i] + arr[i][j-i]));
      } else {
        arr[i][j] = arr[i-1][j];
      }
    }
  }
  
  return arr[values.length][n];
}