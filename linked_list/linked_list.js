class Node {
  /**
   * Constructor
   * @param {*} value - Value contained in a node
   */
  constructor(value) {
    this.value = value;
    this.next = null
  }
}

class LinkedList {
  /**
   * Constructor
   * @param {*} value - Value used to initialize the head node
   */
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  /**
   * Method to append a node to the linked list
   * @param {*} value - Value going into a linked list node
   * @returns An instance of the linked list
   */
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  /**
   * Method to add a node at the begining of linked list
   * @param {*} value - Value going to the linked list node
   * @returns An instance of the inked list 
   */
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  /**
   * Traverse to n-th node of the linked list
   * @param {number} index - A number denoting a specific node within the linke list
   * @returns {Node} n-th node
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
   * Insert a node at a specific index of the linked list
   * @param {number} index - A number denoting a specific node within the linked list
   * @param {*} value - Value going to the specific node of the linked list 
   * @returns {array} An array whose elements match the linked list node values
   */
  insert(index, value) {
    let start = 0;
    if(index > this.length) {
      return this.append(value);
    }

    if(index == 0) {
      return this.prepend(value);
    }

    let prevNode = this.traverseToIndex(index-1);
    let nextNode = prevNode.next;
    let newNode = new Node(value);
    prevNode.next = newNode;
    newNode.next = nextNode;
    this.length++;
    return this.printList();
  }

  /**
   * Remove a specific node from the linked list
   * @param {number} index - An integer denoting the index of the node in linked list
   * @returns {array} - An array representing the values in the linked list
   */
  remove(index) {
    if(index > this.length) {
      return 'Index Out of Range';
    }
    if(index == 0) {
      let nextNode = this.head.next;
      this.head = nextNode;
      return this.printList();
    }
    let prevNode = this.traverseToIndex(index-1);
    let targetNode = prevNode.next;
    let nextNode = targetNode.next;
    prevNode.next = nextNode;
    this.length--;
    return this.printList();
  }

  /**
   * Prints the values from the linked list
   * @returns {array} - Array with values from the linked list in corresponding order 
   */
  printList() {
    const values = [];
    let currNode = this.head;
    while(currNode != null) {
      values.push(currNode.value);
      currNode = currNode.next;
    }
    return values;
  }

  /**
   * Reverse the linked list in place
   */
  reverse() {
    if(!this.head.next) {
      return this.head;
    }
    // let currNode = this.head;
    let first = this.head;
    this.tail = this.tail;
    let second = first.next;
    // let prevNode = null;
    while(second) {
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    // this.head = prevNode;
    this.head = first;
    return this;
  }
}