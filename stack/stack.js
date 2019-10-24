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

  /**
   * Removes top most element from stack, reducing the no. of elements in stack by one
   * @return {Stack} - An instance of this Stack class
   */
  pop() {
    if(!this.top) {
      return null;
    }

    if(this.top == this.bottom) {
      this.bottom = null
    }

    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return this;
  }

  /**
   * Add element to the top of the stack
   * @returns {Stack} - An instance of this Stack
   */
  push(value) {
    const newNode = new Node(value);
    if(this.isEmpty()) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }

  /**
   * Check whether the stack has any item in it
   * @return {boolean} - True if length of stack is zero, false otherwise
   */
  isEmpty() {
    return this.length === 0;
  }
}




/**
 * This class takes an array-based approach to implementing a stack
 * Pop and push operations are handled at the end of the array
 */

 class Stack2 {
   /**
    * Constructor
    * Uses an array to hold stack elements
    */
   constructor() {
     this.items = [];
   }

   /**
   * Checks what's at the top of the stack
   * @returns {*} - Item at the top of the stack
   */
  peek() {
    if(this.items.length === 0) {
      return null;
    }
    return this.top[this.items.length - 1];
  }

  /**
   * Adds an item to the top of stack
   * @returns {Stack2} - An instance of this stack
   */
  push(value) {
    this.items.push(value);
    return this;
  }

  /**
   * Remove item at the top of the stack
   * @returns {Stack2} - The stack instance
   */
  pop() {
    this.items.pop();
    return this;
  }
 }

 const myStack = new Stack();
myStack.isEmpty();
myStack.push('google');
myStack.push('udemy');
myStack.push('youtube');
myStack.pop();
myStack.pop();
myStack.pop();
myStack.peek();
myStack.pop();
myStack.peek();