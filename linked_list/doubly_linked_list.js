class NodeDLL {
  /**
   * Constructor
   * @param {*} valuue - Value that goes into the linked list node
   */
  constructor(value) {
    this.valuue = value;
    this.prev = this.next = null;
  }
}

class DoublyLinkedList {
  /**
   * Coonstructor - Initializes the linked list with a single node
   * @param {*} value - Value held by the linked list node
   */
  constructor(value) {
    this.head = new NodeDLL(value);
    this.tail = this.head;
    this.length = 1;
  }

}