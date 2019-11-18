class TrieNode {
  constructor(letter="") {
    this.value = letter;
    this.children = {};
    this.end_of_word = false;
  }
}