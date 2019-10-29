class Node {
  /**
   * Constructor
   * @param {*} value - Key of the BST node
   */
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  /**
   * Constructor of the BST
   */
  constructor() {
    this.root = null;
  }

  /**
   * Inserts a value to the BST
   * @param {number} value - Key of the BST node
   * @returns {BinarySearchTree} - An instance of the BST
   */
  insert(value) {
    const node = new Node(value);
    if(!this.root) {
      this.root = node;
    } else {
      let current = this.root;
      while(!!current) {
        if(node.value < current.value) {
          if(!current.left) {
            current.left = node;
            break;
          }
          current = current.left;
        } else if(node.value > current.value) {
          if(!current.right) {
            current.right = node;
            break;
          }
          current = current.right;
        } else {
          break;
        }
      }
    }
    return this;
  }

  /**
   * Search for an item in the BST
   * @param {number} value - The target key to look for in BST
   * @returns {Node|null} - Returns node with matching key if found, null otherwise
   */
  lookup(value) {
    if(!this.root) {
      return false;
    }

    let current = this.root;
    while(current) {
      if(value === current.value) {
        return current;
      } else if(value < current.value) {
        current = current.left;
      } else if(value > current.value) {
        current = current.right;
      }
    }
    return null;
  }
}