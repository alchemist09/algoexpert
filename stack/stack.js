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

/**
 * This class takes a queue based approach to implementing a stack
 * Pop and push operations are handled by the head of the queue
 */
class Stack {
  constructor() {
    this.top = this.bottom = null;
    this.length = 0;
  }

  /**
   * Checks and returns the top most item in the stack, but doesn't remove it
   * @returns {Node} - A node holding sitting at the top of the stack
   */
  peek() {
    return this.top;
  }

  /**
   * Removes top most element from stack, reducing the no. of elements in stack by one
   * @return {Stack} - An instance of this Stack class
   */
  pop() {
    if(!this.top) {
      return null;
    }

    if(this.top == this.bottom) {
      this.bottom = null
    }

    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return this;
  }
}