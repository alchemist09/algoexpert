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

  /**
   * Level order traversal of binary search tree
   * @returns {array} - Array containing tree elements in order of traversal
   */
  BreadthFirstSearch() {
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode);

    while(queue.length > 0){
      currentNode = queue.shift();
      list.push(currentNode.value);
      if(currentNode.left) {
        queue.push(currentNode.left);
      }
      if(currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return list;
  }

  /**
   * Level order traversal using a recursive approach
   * @param {array} queue - An array acting as a queue that holds current node and its children during traversal
   * @param {array} list - Final array whose elements represent order in which tree nodes were traversed
   * @returns {array} - Array representing order of tree traversal
   */
  BreadthFirstSearchR(queue, list) {
    if (!queue.length) {
      return list;
    }
    const currentNode = queue.shift();
    list.push(currentNode.value);
    
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    
    return this.BreadthFirstSearchR(queue, list);
  }

  /**
   * Helpder method for Pre-order traversal of BST
   * @param {string} currentNode - Node from where to begin the tree traversal
   * @param {array} list - List to hold visited nodes during traversal
   * @returns {array} - Array representing order in which the tree nodes were visited
   */
  DFTPreOrder(currentNode, list) {
    return traversePreOrder(this.root, []);
  }
}

/**
 * Create a Binary Search Tree from sorted Array
 * @param {BinarySearchTree} bst 
 * @param {array} ordered - The sorted collection
 * @param {number} low - leftmost marker of the sorted collection
 * @param {number} high - rightmost marker of the sorted collection
 */
const createFromArray = (bst, ordered, low, high) => {
  if(low <= high) {
    let mid = Math.floor((low + high) / 2);
    bst.insert(ordered[mid]);
    createFromArray(bst, ordered, low, mid-1);
    createFromArray(bst, ordered, mid+1, high)
  }
}

// creating balanced binary search tree from sorted collection
const bst = new BinarySearchTree();
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
createFromArray(bst, arr, 0, arr.length-1);
bst.root;

bst.insert(9);
bst.insert(4);
bst.insert(6);
bst.insert(20);
bst.insert(170);
bst.insert(15);
bst.insert(1);

// lookup
bst.lookup(56);
bst.lookup(20);

// remove
bst.remove(20);
bst.remove(170);
bst.remove(9);
// bst.remove(77);
bst.remove(4);
bst.remove(1);
bst.remove(6);