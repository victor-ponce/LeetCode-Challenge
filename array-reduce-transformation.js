/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  let valor = init;
  for (let i = 0; i < nums.length; i++) {
    valor = fn(valor, nums[i]);
  }
  return valor;
};
