class HashTable {
  /**
   * Class constructor
   */
  constructor() {
    this.buckets = new Array(50);
  }

  /**
   * Hash function
   * @param {string} key - The key that maps to value
   * @returns {string} hash value
   */
  _hash(key) {
    let hashValue = 0;
    for(let i=0; i < key.length; i++) {
      hashValue = (Math.pow(key.charCodeAt(i), 2) + key.charCodeAt(i)) % this.buckets.length;
    }
    return hashValue;
  }
}