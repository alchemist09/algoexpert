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

   /**
   * Method for add a key-value pair to the hashmap
   * @param {string} key - The key that maps to a value
   * @param {*} value - The value pointed to by a key
   * @return {array} - Elements contained in our hashmap 
   */
  put(key, value) {
    let hashValue = this._hash(key);
    if (!this.buckets[hashValue]) {
      this.buckets[hashValue] = []
      this.buckets[hashValue].push([key, value]);
      return this.buckets;
    }
    this.buckets[hashValue].push([key, value]); 
    return this.buckets;
  }
}