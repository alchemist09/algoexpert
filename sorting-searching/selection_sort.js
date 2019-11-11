const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  let length = array.length;
  let indexMin;
  for(let i=0; i < length-1; i++) {
    indexMin = i;
    for(let j=i; j < length; j++) {
      if(array[indexMin] > array[j]) {
        indexMin = j;
      }
    }
    if(i !== indexMin) {
      let temp = array[i];
      array[i] = array[indexMin];
      array[indexMin] = temp;
    }
  }
  return array;
}

selectionSort(numbers);