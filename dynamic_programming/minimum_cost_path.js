/**
 * There are N stations in a route, starting from 0 to N-1. A train moves from 
 * station (0) to the last station (N-1) in only forward direction. The cost of
 * ticket between any two station is given. Find the minimum cost of travel between
 * station (0) to station (N-1)
 * 
 * ***************************************************************************
 * **************************** SOLUTION *************************************
 * ***************************************************************************
 *
 * First you define data structure in which cost of ticket between stations is 
 * stored. If we have four stations (0 to 3), and the cost of ticket is stored
 * in a 4 * 4 matrix as below
 * 
 *    cost[][] = {
 *      {0, 10, 75, 94},
 *      {-1, 0, 35, 50},
 *      {-1, -1, 0, 80},
 *      {-1, -1, -1, 0}
 *    } 
 * 
 * cost[i][j] is cost of station from station i to station j. Since we are not
 * moving backwards, cost[i][j] does not make sense when i > j, and hence they 
 * are all -1. If i==j, then we are at the same station where we want to go,
 * therefore all the diagonal elements are zeros.
 * 
 * If we want to move from station-0 to station-2, the cheapest way is to take 
 * the ticket of station-1 from station-0, then the ticket of station-2 from 
 * station-1. This way the total cost of travel is USD45(10+35). If we take the
 * direct ticket of station-2 from station-0, then the cost of travel is USD75.
 * 
 * If minCost(s, d) is the minimum cost of travelling from station-s to station-d,
 * the minimum cost to reach N-1 from 0 can be recursively defined as 
 * 
 *         minCost(0, N-1) {
 *            MIN {
 *              cost[0][N-1],
 *              minCost(0, 2) + minCost(2, N-1),
 *              ... ... ... ...,
 *              minCost(0, N-2) + cost[N-2][N-1]
 *            } 
 *         }
 * 
 * First option is to go directly to station N-1 from station-0 without any break.
 * Second option is to break at station-i and so on. When we break at station-i, 
 * we calculate the minimum cost of moving from 0-i, and then the minimum cost of
 * moving from i to N-1.
 */


// two-dimensional array having cost of tickets
// let cost = [][];
let cost2 = [
  [0, 10, 75, 94],
  [-1, 0, 35, 50],
  [-1, -1, 0, 80],
  [-1, -1, -1, 0]
]

// calculate minimum cost from source(s) to destination(d)
/**
 * Brute Force approach of calculating the minimum cost path
 * @param {number} s - Index denoting starting station
 * @param {number} d - Index denoting ending station
 * @returns {number} - Minimum cost of moving between any two stations
 */
function calculateMinCost(s, d) {
  // Base Cases:
  // 1.) When both stations are the same: if(s==d) { return 0 }
  // 2.) When s is just before d, then there's only one way of reaching
  //     d from s: if(s == d-1) { return cost[s][d] }
  // Both of the above two conditions can be merged into one becasue cost[s][d]
  // is 0, when s==d

  if(s == d || s == d-1) {
    return cost2[s][d];
  }

  let minCost = cost2[s][d];
  console.log(minCost);
  // try every intermediate station to find minimum
  for(let i=s+1; i < d; i++) {
    let temp = calculateMinCost(s, i) + calculateMinCost(i, d);
    // console.log(minCost);
    if(temp < minCost) {
      minCost = temp;
    }
  }
  return minCost;
}