Array.prototype.last = function () {
  arr = [1, 2, 3];
  return this[this.length - 1] !== undefined ? this[this.length - 1] : -1;
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
