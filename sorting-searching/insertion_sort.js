const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  let length = numbers.length;
  for(let i=1; i < length; i++) {
    let position = i;
    let currentValue = array[i];
    while(position > 0 && array[position-1] > currentValue) {
      array[position] = array[position - 1];
      position = position - 1;
    }
    array[position] = currentValue;
  }
}