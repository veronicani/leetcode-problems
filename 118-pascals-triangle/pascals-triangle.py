class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        if numRows == 0:
            return [[]]
        
        tri = [[1]]

        for r in range(1, numRows):
            print("r=", r)
            temp = [0] + tri[r - 1] + [0]
            row = []
            
            for i in range(1, len(temp)):
                row.append(temp[i - 1] + temp[i])
            
            tri.append(row)
        
        return tri


