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

  /**
   * Remove only the unique suffixes of word
   * Be mindful of cases where:
   *  - the last character of word has children
   *  - characters other than the last have children or complete a string in the
   *    trie (other than word)
   *  - no characters of word have children i.e the entirety of the word's path
   *    through trie can be removed
   */
  remove(word) {
    let node = this.root;
    let suffixes = [];

    // case where no part of word can be removed from trie
    for(let i=0; i < word.length; i++) {
      let currentLetter = word[i];
      if(node.children[currentLetter]) {
        node = node.children[currentLetter];
        suffixes.unshift(node);
        if(i === word.length-1 && Object.keys(node.children).length) {
          throw new Error(`Suffixes in trie depend on "${word}"`);
        }
      }
    }

    // case where parts of word can be removed from trie
    for(let j=1; j < suffixes.length; j++) {
      let parent = suffixes[j];
      let child = word[suffixes.length - j];
      delete parent.children[child];
      if(parent.end_of_word || Object.keys(parent.children).length) {
        return `some suffixes of "${word}" removed from trie`;
      }
    }

    // case where all parts of word can be removed from trie
    this.root.children[word[0]];
    return `removed "${word}", no other "${word[0]}" remaining`;

  }
}