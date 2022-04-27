const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(m) {
    return m.map((r, i) => r.map((e, j) =>
        [
            i > 0            && j > 0            && m[i-1][j-1],
            i > 0                                && m[i-1][j],
            i > 0            && j < r.length - 1 && m[i-1][j+1],
                                j > 0            && m[i][j-1],
                                j < r.length - 1 && m[i][j+1],
            i < m.length - 1 && j > 0            && m[i+1][j-1],
            i < m.length - 1                     && m[i+1][j],
            i < m.length - 1 && j < r.length - 1 && m[i+1][j+1]
        ].map(x => +x).reduce((a, b) => a + b, 0)
    ));
}

module.exports = {
  minesweeper
};
