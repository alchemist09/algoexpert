class Node {
  /**
   * Constructor
   * @param {*} - Value held by a queue node
   */
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class Queue {
  /**
   * Constructor - Initializes Queue Class
   */
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  /**
   * Returns the first element in the queue
   * @returns {Node} - The first node of the queue
   */
  peek() {
    return this.first;
  }
}