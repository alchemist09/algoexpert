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

/**
 * Using Dynamic Programming to build a solution bottom-up
 * The runtime is O(N^2)
 * 
 * @param {number} capacity Maximum capacity of the knapsack
 * @param {array} weight Array holding weight of each available item
 * @param {array} value Array holding value of each available item
 * @param {number} n The number of available items
 */
function knapSackDP(capacity, weight, value, n) {
  const arr = new Array(n+1);
  for(let i=0; i < arr.length; i++) {
    arr[i] = new Array(capacity + 1).fill(0)
  }

  // base case where the capacity of knapsack is zero i.e it can't hold any item so
  // the maximum value it can carry is zero
  for(let i=0; i <= n; i++) {
    arr[i][0] = 0;
  }

  // base case where we have zero items so no item will go into knapsack, maximum 
  // value for any capacity will be zero
  for(let j=0; j <= capacity; j++) {
    arr[0][j] = 0
  }

  // i is the item index, and j represents intermediate weights which are subproblems
  // of the max weight
  for(let i=1; i <= n; i++) {
    for(let j=1; j <= capacity; j++) {
      if(weight[i-1] <= j) {
        let capLessCurrentItem = j - weight[i-1];
        arr[i][j] = Math.max(value[i-1] + arr[i-1][capLessCurrentItem], arr[i-1][j]);
      } else {
        arr[i][j] = arr[i-1][j];
      }
    }
  }
  return arr[n][capacity];
}

const weights = [2, 3, 5, 7, 10];
const values  = [15, 5, 6, 11, 4];
knapSackRec(15, weights, values, 5);

knapSackMemo(9, [2, 3, 5, 7], [16, 5, 9, 6], 4);

const weights2 = [2, 3, 4, 5];
const values2  = [3, 4, 5, 6];
knapSackRec(5, weights2, values2, 4);
knapSackDP(5, weights2, values2, 4);