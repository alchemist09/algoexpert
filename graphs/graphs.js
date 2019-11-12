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
}