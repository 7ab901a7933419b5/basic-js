const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    let digits = n.toString().split("");
    return Math.max(...digits.map((x, i) =>
        parseInt(digits.slice(0, i).concat(digits.slice(i+1, digits.length)).join(""))
    ));
}

module.exports = {
  deleteDigit
};
