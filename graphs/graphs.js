class Graph {
  /**
   * constructor
   * Initializes fields to hold node count, vertices and and edge relationships
   */
  constructor() {
    this.numberOfNodes = 0;
    this.vertices = [];
    this.adjacencyList = new Map();
  }

  /**
   * Method to add a vertex to the graph
   * @param {string | object} node - Identifier for a vertex
   * @returns {object} - An instance of the graph class
   */
  addVertex(node) {
    this.vertices.push(node);
    this.adjacencyList.set(node, []);
    this.numberOfNodes++;
    return this;
  }

  /**
   * Method to add an edge between two vertices in the graph
   * @param {string | object} node1 - A vertex in the graph
   * @param {string | object} node2 - A vertex in the graph
   * @returns {object} - An instance of the graph class
   */
  addEdge(node1, node2) {
    this.adjacencyList.get(node1).push(node2);
    this.adjacencyList.get(node2).push(node1);
    return this;
  }

  /**
   * Get all nodes connected to a particular vertex
   * @param {string | object} - Graph vertex for which to fetch adjacent nodes
   * @returns {array | undefined} - List of vertices connected to this vertex or                                undefined
   */
  getAdjacent(node) {
    if(this.vertices.indexOf(node) != -1) {
      return this.adjacencyList.get(node);
    }
    return undefined;
  }

  /**
   * Shows the connection between various vertices
   * @returns {string} - Adjacency list map of entire graph
   */
  showConnections() {
    let string = "";
    for(let i=0; i < this.vertices.length; i++) {
      string += this.vertices[i];
      string += " ---> ";
      let adjacentNodes = this.adjacencyList.get(this.vertices[i]);
      for(let j=0; j < adjacentNodes.length; j++) {
        string += ' ' + adjacentNodes[j] + ' ';
      }
      string += "\r\n";
    }
    return string;
  }

  /**
   * Breadth First Traversal of a graph
   * @param {string | object} s - Graph vertex from where to start the traversal 
   */
  BFS(s) {
    let marked = [];
    let queue  = [];
    marked[s] = true;
    queue.push(s);
    while(queue.length !== 0) {
      let currNode = queue.shift();
      console.log(currNode);
      let adjacentNodes = this.getAdjacent(currNode);
      adjacentNodes.forEach(n => {
        if(!marked[n]) {
          marked[n] = true;
          queue.push(n);
        }
      });
    }
  }
}

const graph = new Graph();
const vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for(let i=0; i < vertices.length; i++) {
  graph.addVertex(vertices[i]);
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

// graph.showConnections();