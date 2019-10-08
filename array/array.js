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

}