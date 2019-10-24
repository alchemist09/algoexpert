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
}