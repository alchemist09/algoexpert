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

  /**
   * Traverse to a specific index of doubly linked list
   * @returns {NodeDll} - Doubly linked list node
   */
  traverseToIndex(index) {
    let counter = 0;
    let currNode = this.head;
    while(counter !== index) {
      currNode = currNode.next;
      counter++;
    }
    return currNode;
  }

  /**
   * Insert node at specified index of doubly linked list
   * @param {number} index - Integer denoting the index of douhbly linked list node
   * @param {*} - Valiue held by douhbly linked list node
   * @returns {array} - Array representation of linked list
   */
  insert(index, value) {
    if(index == 0) {
      return this.prepend(value);
    }

    if(index > this.length) {
      return this.append(value);
    }

    let targetNode = this.traverseToIndex(index);
    let prevNode = targetNode.prev;
    let newNode = new NodeDll(value);
    newNode.next = targetNode;
    newNode.prev = prevNode;
    prevNode.next = newNode;
    targetNode.prev = newNode;
    this.length++;
    return this.printList();
  }

  /**
   * Removes specified node from doubly linked list
   * @param {number} index - Integer that specifies the node to remove
   * @returns {array} - Array representation of doubly linked list after removal
   */
  remove(index) {
    if(index == 0) {
      let nextNode = this.head.next;
      this.head = nextNode;
      return this.printList();
    }

    let targetNode = this.traverseToIndex(index);
    let prevNode = targetNode.prev;
    let nextNode = targetNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    this.length--;
    return this.printList();
  }

  /**
   * Prints values of doubly linked list nodes as an array while maintaining 
   * their relative order
   * @returns {array} - Array representation of the doubly linked list
   */
  printList() {
    let elements = [];
    let currNode = this.head;
    while(currNode !== null) {
      elements.push(currNode.value);
      currNode = currNode.next;
    }
    return elements;
  }
}