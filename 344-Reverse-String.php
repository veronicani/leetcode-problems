class Solution {

    /**
     * @param String[] $s
     * @return NULL
     */
    function reverseString(&$s) {
        $l = 0;
        $r = count($s) - 1;
        while ($l <= $r) {
            $temp = $s[$l];
            $s[$l] = $s[$r];
            $s[$r] = $temp;
            $l += 1;
            $r -= 1;
        }
        return $s;
    }
}