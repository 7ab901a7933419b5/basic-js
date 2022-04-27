const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    let p = {
        s:                                        "" + str,
        s_rt:  "repeatTimes" in options         ? options.repeatTimes         : 1,
        s_sep: "separator" in options           ? options.separator           : "+",
        a:     "addition" in options            ? "" + options.addition       : "",
        a_rt:  "additionRepeatTimes" in options ? options.additionRepeatTimes : 1,
        a_sep: "additionSeparator" in options   ? options.additionSeparator   : "|"
    };
    let repeat = (s, rt, sep) => Array(rt).fill(s).join(sep);
    return repeat(p.s + repeat(p.a, p.a_rt, p.a_sep), p.s_rt, p.s_sep);
}

module.exports = {
  repeater
};
