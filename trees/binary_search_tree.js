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

  /**
   * Lookup node with minimum key
   * @returns {Node} - The node with the least key in BST
   */
  getMinNode(node) {
    if(!node) { node = this.root }
    while(node) {
      node = node.left;
    }
    return node;
  }

  /**
   * Lookup node with maximum key
   * @returns {Node} - The node with the greatest key in BST
   */
  getMaxNode(node) {
    if(!node) { node = this.root }
    while(node) {
      node = node.right;
    }
    return node;
  }

  /**
   * Delete a node from the BST
   * @param {number} value - The key of target node to Delete
   * @returns {BinarySearchTree | boolean} - An instance of the BST after deletion of the node of false if node is not found
   */
  remove(value) {
    if(!this.root) {
      return false
    }

    let parentNode = null;
    let currentNode = this.root;

    while(currentNode) {
      if(value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left
      } else if(value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else {
        // Case 1: currentNode has no left/right child
        if(currentNode.left == null && currentNode.right == null) {
          if(currentNode == this.root) {
            this.root == null;
            return this;
          }
          if(parentNode.left === currentNode) {
            parentNode.left = null;
          } else {
            parentNode.right = null;
          }
          return this;
        }

        // Case 2: currentNode has left child but no right child
        if(currentNode.left && !currentNode.right) {
          if(currentNode == this.root) {
            this.root = currentNode.left;
            currentNode.left = null;
            return this;
          }
          
          if(parentNode.left === currentNode) {
            parentNode.left = currentNode.left;
          } else {
            parentNode.right = currentNode.left;
          }
          return this;
        }

        // Case 3: currentNode has right child but no left child
        if(currentNode.right && !currentNode.left) {
          if(currentNode == this.root) {
            this.root = currentNode.right;
            currentNode.right = null;
            return this;
          }

          if(parentNode.left === currentNode) {
            parentNode.left = currentNode.right;
          } else {
            parentNode.right = currentNode.right;
          }
          return this;
        }

        // Case 4: currentNode has two children
        if(currentNode.left && currentNode.right) {
          let successorNode = currentNode.right;
          let successorParentNode = currentNode;
          if(!successorNode.left) {
            currentNode.value = currentNode.right.value;
            currentNode.right = currentNode.right.right;
            return this;
          }

          while(successorNode.left != null) {
            successorParentNode = successorNode;
            successorNode = successorNode.left;
          }

          currentNode.value = successorNode.value;
          successorParentNode.left = successorNode.right;
          return this;
        }
      }
    }

    // Node node found, return false
    return false;
    
  }
}