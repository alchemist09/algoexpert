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
}