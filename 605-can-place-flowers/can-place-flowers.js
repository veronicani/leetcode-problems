/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    for (let i = 0; i < flowerbed.length; i++) {
        let h = i - 1;
        let j = i + 1;
        if (flowerbed[i] === 0 && !flowerbed[j] && !flowerbed[h]) {
            flowerbed[i] = 1;
            n--;
        }
    }
    return n <= 0;
};