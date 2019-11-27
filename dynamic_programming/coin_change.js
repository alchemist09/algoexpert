/**
 Given an infinite supply of coins of given denominations (values), (V1, V2,.., Vn),
 Find the minimum number of coins that sum up to a value S. For example:

    Input: Coins = { 1, 2, 5, 10, 20, 50 } S = 65
    Output: 3 { 50 + 10 + 5 }

    Input Coins = { 1, 2, 5, 10, 12, 20, 50, }  S = 65
    Output: 3 { 50 + 10 + 5 }

    Input Coins = { 1, 5, 6, 9 }  S = 11
    Output: 2 { 5 + 6 } 
*/

/**
 * Recursive Brute Force Solution
 * @param {number} S - The sum total of change to be given
 * @param {array} coints - Array containing denominations of the various coins
 * @returns {number} - The minimum no. of coins required to give change for a particular denomination
 */
function minCoins(S, coins) {
  if(S == 0) { return 0 };
  let numCoins = Number.MAX_VALUE;
  for(let i=0; i < coins.length; i++) {
    if(coins[i] <= S) {
      let temp = minCoins(S-coins[i], coins);
      if(temp+1 < numCoins) {
        numCoins = temp + 1;
      }
    }
  }
  return numCoins;
}

/**
 * Using recursion with memoization to store intermediate results for minCoins(n) calculations
 * @param {number} S - Amount to be given out in change
 * @returns {function} - Returns function that actually computes the minimum coins solution
 */
function minCoinsMemo(S) {
  const changeArray = new Array(S+1);
  changeArray[0] = 0;

  return function mincoins(S, coins) {
    if(S==0) { return 0; }
    let numCoins = Number.MAX_VALUE;
    if(changeArray[S]) {
      return changeArray[S];
    }
    for(let i=0; i < coins.length; i++) {
      if(coins[i] <= S) {
        let temp = mincoins(S-coins[i], coins);
        changeArray[S] = temp + 1;
        if(temp+1 < numCoins) {
          numCoins = temp + 1;
        }
      }
    }
    
    return changeArray[S];
  }
}