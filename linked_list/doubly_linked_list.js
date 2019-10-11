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

  /**
   * Adds node at the end of doubly linked list
   * @param (*) value - Value held by the linked list node
   * @returns {DoublyLinkedList} - Returns an instance of this linked list
    */
   append(value) {
    let newNode = new NodeDll(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  /**
   * Inserts a node the begining of doubly linked list
   * @param {*} value - Value held by linked list node
   * @returns {DoublyLinkedList} - An instance of this linked list
   */
  prepend(value) {
    let newNode = new NodeDll(value);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
}