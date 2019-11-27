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