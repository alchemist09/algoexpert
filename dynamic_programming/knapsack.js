/**
 Given a set of items, each with a weight and a value associated with it, determine
 the maximum value you can obtain by including items in the knapsack in such a way 
 that the total weight of the items is less than on equal to the maximum capacity
 of the knapsack.
*/

/**
 * Brute force recursive solution considers all subsets of items and calculates
 * the total weight and value associated with each subset
 * Running time is O(2^N)
 * 
 * @param {number} capacity The maximum capacity of knapsack in Kg
 * @param {array} weight The weight associated with each item
 * @param {array} value The values associated with each item 
 * @param {number} n The number of items from which to choose from
 * @return {number} Maximum value possible that can be fit into knapsack
 */
function knapSackRec(capacity, weight, value, n) {
  // base case for recursion
  // if knapsack is full or no more items left
  if(capacity <= 0 || n <= 0) {
    return 0;
  }

  // if weight of n'th item exceeds capacity of knapsack, exclude it
  if(weight[n-1] > capacity) {
    return knapSackRec(capacity, weight, value, n-1);
  }

  // case where we include n'th item in the knapsack
  let x = value[n-1] + knapSackRec(capacity-weight[n-1], weight, value, n-1);
  
  // case where we omit n'th item from knapsack
  let y = knapSackRec(capacity, weight, value, n-1);

  return Math.max(x, y);
}

/**
 * Using memoization with recursion to store intermediate results as the
 * solution is built top-down
 * 
 * @param {number} capacity - Maximum capacity of knapsack
 * @param {array} weight - Array holding weight of each available item
 * @param {array} value - Array holding value associated with each item
 * @param {number} n - The number of items available
 * @return {number} Maximum value that can be fit inside knapsack * 
 */
function knapSackMemo(capacity, weight, value, n) {
  const arr = new Array(n+1);
  for(let i=0; i < arr.length; i++) {
    arr[i] = new Array(capacity + 1).fill(0);
  }

  function KS(capacity, weight, value, n) {
    if(arr[n][capacity] !== 0) {
      return arr[n][capacity];
    }

    if(capacity <= 0 || n <= 0) {
      return 0;
    }

    if(weight[n-1] > capacity) {
      return KS(capacity, weight, value, n-1);
    }

    let x = value[n-1] + KS(capacity-weight[n-1], weight, value, n-1);
    let y = KS(capacity, weight, value, n-1);
    arr[n][capacity] = Math.max(x, y);
    return arr[n][capacity];
  }
  KS(capacity, weight, value, n);
  return arr[n][capacity];
}