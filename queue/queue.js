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

  /**
   * Append an element the queue
   * @param {*} value - Value to add to the queue
   * @returns {Queue} - An instance of the queue class
   */
  enqueue(value) {
    const newNode = new Node(value);
    if(this.length == 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
}