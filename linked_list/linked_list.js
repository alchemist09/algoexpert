class Node {
  /**
   * Constructor
   * @param {*} Value contained in a node
   */
  constructor(value) {
    this.value = value;
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
}