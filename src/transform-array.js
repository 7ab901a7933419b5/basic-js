const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
    if (!(arr instanceof Array)) {
        throw new Error("'arr' parameter must be an instance of the Array!");
    }
    let controls = ["--discard-prev", "--discard-next", "--double-prev", "--double-next"];
    let output = [...arr];
    for (let i = 0; i < output.length - 1; ++i) {
        let curr = output[i], next = output[i+1];
        if (next == "--discard-prev")      { output[i] = null; }
        else if (next == "--double-prev")  { output[i+1] = curr; }
        else if (curr == "--discard-next") { output[i+1] = null; }
        else if (curr == "--double-next")  { output[i] = next; }
    }
    return output.filter(x => !controls.includes(x) && x != null);
}

module.exports = {
  transform
};
