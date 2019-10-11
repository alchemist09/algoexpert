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
}