function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  let mid = Math.floor(array.length/2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  console.log('left: ', left);
  console.log('right: ', right);
  console.log("\r\n");

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
  let i=0; j=0; result = [];
  while(i < left.length && j < right.length) {
    if(left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else if(left[i] > right[j]) {
      result.push(right[j]);
      j++;
    } else {
      // left[i] === right[j]
      Array.prototype.push.apply(result, [left[i], right[j]]);
      i++;
      j++;
    }
  }

  // Put any remaining items from left into result
  while(i < left.length) {
    result.push(left[i]);
    i++;
  }

  // Put any remaining items from right into result
  while(j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}