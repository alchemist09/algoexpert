/**
 * Binary Search
 * @param {array} arr - Ordered collection
 * @param {string | number} target - what to lookup for in collection
 * @returns {number | boolean} - Index at which the target was found, false otherwise   
 */
function binarySearchIterative(arr, targert) {
  let low = 0;
  let high = arr.length - 1;
  while(low <= high) {
    let midPoint = Math.floor(low + high / 2);
    if(arr[midPoint] == targert) {
      return midPoint
    } else if (targert < midPoint) {
      high = midPoint -1;
    } else {
      low = midPoint + 1;
    }
  }
  return false;
}

const numbers = [2, 6, 9, 13, 16, 23, 44, 51, 65, 77, 81, 91, 144];
console.log(binarySearchIterative(numbers, 37));