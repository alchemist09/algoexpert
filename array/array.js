class MyArray {

  /**
   * Constructor
   * @param {number} length - The size of the array
   * @param {Object} data - Array elemeents
   */
  constructor(length, data) {
    this.length = 0;
    this.data = {}
  }


  /**
   * Method to retrieve element from array
   * @param {number} index - The key of the element in data variable
   */
  get(index) {
    return this.data[index];
  }

  /**
   * Append item to end of array
   * @param {*} item - element to append to the array
   * @return {number} - Length of array after appending item
   */
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  /**
   * Remove item from end of MyArray
   * @return {*} - Item removed from end of array
   */
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length-1];
    this.length--;
    return lastItem;
  }

  /**
   * Delete element from a specific index of the array
   * @param {number} index - The array index of the element to delete
   * @return {*} - the deleted item
   */
  del(index) {
    // if last index do a pop O(1), otherwise
    // delete at specifed index and rearrange the array
    const itemToDelete = this.data[index];
    if (index == (this.length - 1)) {
      delete this.data[index];
      this.length--;
      return itemToDelete;
    } else {
      let startIndex = index;
      let numberOfItemsToEnd = (this.length-1) - index;
      delete this.data[startIndex];
      while(numberOfItemsToEnd > 0) {
        this.data[startIndex] = this.data[startIndex + 1];
        startIndex++;
        numberOfItemsToEnd -= 1;
      }
      this.pop();
      return itemToDelete;
    }
  }
}

const arr = new MyArray();
arr.push('java');
arr.push('golang');
arr.push('scala');
arr.push('ruby');
console.log(arr.push('php'));
console.log(arr);
arr.pop();
console.log(arr);
console.log(arr.del(1))
console.log(arr);