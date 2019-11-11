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