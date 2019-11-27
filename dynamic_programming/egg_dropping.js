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
 * @param {eggs} int The number of eggs to start with
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