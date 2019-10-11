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

  /**
   * Lookup a value from the hashtable given a key
   * @param {string} key - The key to use to lookup a value
   * @returns {* | boolean} - value that matches given key or false for invalid key
   */
  get(key) {
    let hashValue = this._hash(key);
    if (this.buckets[hashValue] == undefined) {
      return "invalid key";
    }
    
    if (this.buckets[hashValue].length == 1) {
      return this.buckets[hashValue][1];
    } else {
      this.buckets[hashValue].forEach(bucket => {
        if (bucket[0] == key) {
          return bucket[1];
        }
      });
    }
  }

  /**
   * Fetch the keys of all elements from hashtable
   * @returns {array} - Array containing keys from hashtable
   */
  keys() {
    let arr = [];
    this.buckets.forEach(bucket => {
      if (bucket.length == 1) {
        arr.push(bucket[0][0]);
      } else {
        bucket.forEach(currElem => {
          arr.push(currElem[0]);
        });
      }
    });
    return arr;
  }

  /**
   * Fetch all values from the hashtable
   * @returns {array} - Array containing values from hashtable
   */
  values() {
    let values = [];
    this.buckets.forEach(bucket => {
      if (bucket.length == 1) {
        values.push(bucket[0][1]);
      } else {
        bucket.forEach(currElem => {
          values.push(currElem[1]);
        });
      }  
    });
    return values;
  }
}