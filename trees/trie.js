class TrieNode {
  constructor(letter="") {
    this.value = letter;
    this.children = {};
    this.end_of_word = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * Iterate through word, mapping each character from word to a path in the trie
   * If no path exists create one
   * When iteration is complete indicate that the last character of word
   * completes a string in the trie
   */
  insert(word) {
    let node = this.root;
    for(let i=0; i<word.length; i++) {
      let currentLetter = word[i];
      if(node.children[currentLetter]) {
        node = node.children[currentLetter];
      } else {
        // create path in trie
        let newNode = new TrieNode(currentLetter);
        node.children[currentLetter] = newNode;
      }
    }
    node.end_of_word = true;
  }

  /**
   * Iterate through word
   * Map each character in word to a path in trie
   * If a full path exists, the trie contains the word,
   * otherwise it doesn't
   */
  find(word) {
    let node = this.root;
    for(let i=0; i<word.length; i++) {
      let currentLetter = word[i];
      if(node.children[currentLetter]) {
        node = node.children[currentLetter];
      } else {
        return false;
      }
    }
    return true;
  }
}