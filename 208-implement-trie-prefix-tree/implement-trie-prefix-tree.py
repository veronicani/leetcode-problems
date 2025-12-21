class Node:
    def __init__(self):
        self.freq = 0 # keeps track of number of words that have this char at this position
        self.suffixes = {}
        self.endFreq = 0 # keeps track of the number of words that end at this char at this position

class Trie:

    def __init__(self):
        self.head = Node()
        # Node(suffixes: {a: freq: 1, suff: {p: freq:1 suff: {p: freq:1 suff:{l :freq:1 ...}}})
    def insert(self, word: str) -> None:
        curr = self.head
        for char in word:
            char_node = curr.suffixes.get(char)
            if not char_node:
                curr.suffixes[char] = Node()
            curr = curr.suffixes[char]
            curr.freq += 1
        curr.endFreq += 1

    def search(self, word: str) -> bool:
        curr = self.head
        for char in word:
            char_node = curr.suffixes.get(char)
            if not char_node:
                return False
            curr = char_node
        return curr.endFreq >= 1

    def startsWith(self, prefix: str) -> bool:
        curr = self.head
        for char in prefix:
            char_node = curr.suffixes.get(char)
            if not char_node:
                return False
            curr = char_node
        return curr.freq >= 1

        
# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)