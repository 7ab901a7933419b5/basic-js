const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
    let stat = {}, output = [];
    names.forEach(name => {
        if (!(name in stat)) {
            output.push(name);
            stat[name] = 0;
        } else {
            let newName = name + `(${++stat[name]})`;
            output.push(newName);
            if (!(newName in stat)) { stat[newName] = 0; }
        }
    });
    return output;
}

module.exports = {
  renameFiles
};
