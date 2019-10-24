/**
 * Node class
 * Holds values going into stack for case where stack is implemented using queue
 */
class Node {
  /**
   * Constructor
   * @param {*} value 
   */
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = this.bottom = null;
    this.length = 0;
  }
}