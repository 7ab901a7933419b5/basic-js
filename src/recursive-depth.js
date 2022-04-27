const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(x) {
      if (!(x instanceof Array)) { return 0; }
      else if (x.length == 0) { return 1; }
      else { return Math.max(...x.map(elem => this.calculateDepth(elem))) + 1; }
  }
}

module.exports = {
  DepthCalculator
};
