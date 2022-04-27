const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(s) {
    // Note this is essentially the same as https://www.codewars.com/kata/run-length-encoding
    // Modifying my earlier solution to meet the task requirements
    let out = [];
    let count = 0, lastChar = undefined;
    (s + "$").split("").forEach(c => {
        if (c == lastChar) { count++; }
        else {
            if (lastChar != undefined) { out.push((count > 1 ? count.toString() : "") + lastChar); }
            count = 1, lastChar = c;
        }
    });
    return out.join("");
}

module.exports = {
  encodeLine
};
