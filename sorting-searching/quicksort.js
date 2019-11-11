function quickSort(array, left, right) {
  if(left < right) {
    let splitPoint = partition(array, left, right);
    quickSort(array, left, splitPoint - 1);
    quickSort(array, splitPoint + 1, right);
  }
}