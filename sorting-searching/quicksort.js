function quickSort(array, left, right) {
  if(left < right) {
    let splitPoint = partition(array, left, right);
    quickSort(array, left, splitPoint - 1);
    quickSort(array, splitPoint + 1, right);
  }
}

function partition(array, low, high) {
  let pivotValue = array[low];
  let leftMark = low + 1;
  let rightMark = high;
  let done = false;

  while(!done) {
    while(leftMark <= rightMark && array[leftMark] <= pivotValue) {
      leftMark++;
    }

    while(rightMark >= leftMark && array[rightMark] >= pivotValue) {
      rightMark--;
    }

    if(rightMark < leftMark) {
      done = true;
    } else {
      let temp = array[leftMark];
      array[leftMark] = array[rightMark];
      array[rightMark] = temp;
    }
  }

  array[low] = array[rightMark];
  array[rightMark] = pivotValue;
  return rightMark;
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);