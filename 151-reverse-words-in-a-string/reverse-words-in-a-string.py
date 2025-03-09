class Solution:
    def reverseWords(self, s: str) -> str:
        reversed = []
        word = []
        for char in s:
            if char == ' ':
                if word:
                    reversed.insert(0,"".join(word))
                word = []
            else:
                word.append(char)
        
        if word:
            reversed.insert(0,"".join(word))
        
        return " ".join(reversed)