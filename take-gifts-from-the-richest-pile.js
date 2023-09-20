/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function (gifts, k) {
  while (k-- > 0) {
    let max = Math.max(...gifts);
    gifts[gifts.lastIndexOf(max)] = Math.floor(Math.sqrt(max));
  }
  return gifts.reduce((a, b) => a + b, 0);
};
