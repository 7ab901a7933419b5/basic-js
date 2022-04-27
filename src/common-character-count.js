const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
    class DMap extends Map {
        getDefault(k, v=0) { return this.has(k) ? this.get(k) : v; }
    }
    function characterStat(s) {
        let stat = new DMap();
        s.split("").forEach(c => { stat.set(c, stat.getDefault(c) + 1); });
        return stat;
    }
    let stat1 = characterStat(s1), stat2 = characterStat(s2);
    return [...stat1.keys()]
        .map(k => Math.min(stat1.get(k), stat2.getDefault(k)))
        .reduce((a, b) => a + b, 0);
}

module.exports = {
  getCommonCharacterCount
};
