/**
 Given a number of eggs and a multi-story building, find the minimum number of 
 egg drops that one will have to perform in the worst case to be able to know
 the floor from which the eggs start breaking. For example, if we only have 
 one egg, and 10 floors, the minimum number of drops we'll need to perform to 
 determine the highest floor from which eggs don't break is 10. That is we'll have
 to start from the first floor and move linearly upward dropping the egg from 
 every floor until it breaks or we reach the 10th floor without breaking
*/

/**
 * Naive recursive implementation of egg drop solution
 * 
 * @param {number} eggs The number of eggs to start with
 * @param {number} floors The number of floors in the buiding we're dropping eggs from
 * @return {number} Minimum no. of drops needed to find breaking floor in worst case
 */
function eggDropRec(eggs, floors) {
  // if we only have one egg or we have zero/one floors, return no. of floors
  if(floors==1 || floors==0 || eggs==1) {
    return floors;
  }

  let minDrops = Number.MAX_VALUE;

  for(let currFloor=1; currFloor <= floors; currFloor++) {
    let temp = Math.max(
      eggDropRec(eggs-1, currFloor-1),
      eggDropRec(eggs, floors-currFloor)
    )

    if(temp < minDrops) {
      minDrops = temp;
    }
  }
  return minDrops + 1;
}

/**
 * Improved Recursive implementation of the egg drop solution
 * Using memoization to cache values
 * 
 * @param {number} eggs The number of eggs to start with
 * @param {number} floors The number of floors in the buiding we're dropping eggs from
 * @return {number} Minimum no. of drops needed to find breaking floor in worst case
 */
function eggDropMemo(eggs, floors) {
  const cache = new Array(eggs+1);
  for(let i=0; i < floors; i++) {
    cache[i] = new Array(floors+1).fill(Number.MAX_VALUE);
  }

  function drop(eggs, floors) {
    // if we only have one egg or we have zero/one floors, return no. of floors
    if(floors==1 || floors==0 || eggs==1) {
      return floors;
    }

    // check if value in cache and return if found
    if(cache[eggs][floors] != Number.MAX_VALUE) {
      return cache[eggs][floors];
    }

    let minDrops = Number.MAX_VALUE;

    for(let currFloor=1; currFloor <= floors; currFloor++) {
      let temp = Math.max(
        drop(eggs-1, currFloor-1),
        drop(eggs, floors-currFloor)
      )

      if(temp < minDrops) {
        minDrops = temp;
        cache[eggs][floors] = minDrops + 1;
      }
    }
  }

  drop(eggs, floors);
  return cache[eggs][floors];
}

/**
 * Bottom-up implementation of the egg drop solution
 * Using Dynamic Programming to arrive at the solution\
 * Runtime O(eggs * floors^2)
 * Space Complexity O(eggs * floors)
 * 
 * @param {number} eggs - The number of eggs to start with
 * @param {number} floors - The number of floors in the buiding we're dropping eggs from
 * @return {number} - Minimum no. of drops needed to find breaking floor in worst case
 */
function eggDropDP(eggs, floors) {
  // create cache table and fill every cell in it with maximum possible value
  const cache = new Array(eggs+1);
  for(let i=0; i <= eggs; i++) {
    cache[i] = new Array(floors+1).fill(Number.MAX_VALUE);
  }

  // if we have zero eggs, the number of drops will always be zero
  for(let currFloor=0; currFloor <= floors; currFloor++) {
    cache[0][currFloor] = 0;
  }

  // if we have one floor the no. of drops will always be 1
  // if we have zero floors, the no. of drops will be zero
  for(let i=0; i <= eggs; i++) {
    cache[i][0] = 0;
    cache[i][1] = 1;
  }

  // we'll need j trials for one egg and j floors
  for(let j=1; j < floors; j++) {
    cache[1][j] = j;
  }

  // fill the rest of the floors using optimal substructure property
  for(let currEggs=2; currEggs <= eggs; currEggs++) {
    for(let currFloor=2; currFloor <= floors; currFloor++) {
      // starting from floor 1 to the current floor, we do egg drop attempts at each
      // intermediate floor to find the minimum no. of drops needed in worst case to // find the breaking floor
      for(let dropAttempt=1; dropAttempt <= currFloor; dropAttempt++) {
        let temp = 1 + Math.max(
          cache[currEggs-1][dropAttempt-1],
          cache[currEggs][currFloor-dropAttempt]
        );
        cache[currEggs][currFloor] = Math.min(cache[currEggs][currFloor], temp);
      }
    }
  }
  
  return cache[eggs][floors];
}

eggDropRec(2, 10);
eggDropMemo(2, 50);
eggDropDP(2, 36);