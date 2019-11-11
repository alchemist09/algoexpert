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

function insertionSort2(array) {
  var length = array.length, temp, j;
  for(var i=1; i < length; i++) {
    j=i;
    temp = array[i];
    while(j>0 && array[j-1] > temp) {
      array[j] = array[j-1];
      j--;
    }
    array[j] = temp;
  }
  return array
}

function insertionSort3(array) {
  const length = array.length;
	for (let i = 0; i < length; i++) {
		if (array[i] < array[0]) {
      //move number to the first position
      array.unshift(array.splice(i,1)[0]);
    } else {
      // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
      if (array[i] < array[i-1]) {
        //find where number should go
        for (var j = 1; j < i; j++) {
          if (array[i] >= array[j-1] && array[i] < array[j]) {
            //move number to the right spot
            array.splice(j,0,array.splice(i,1)[0]);
          }
        }
      }
    }
	}
}

insertionSort3(numbers);
console.log(numbers);