class Solution:
    def reverseWords(self, s: str) -> str:
        words = []
        word = []
        for char in s:
            # if char is ' ' - if word, add word to words
            if char == ' ':
                if word:
                    words.append("".join(word))
                    word = []
            # else add char to word
            else:
                word.append(char)
        
        # if word, add word to words
        if word:
            words.append("".join(word))

        print('words-', words)
        
        return " ".join(words[::-1])