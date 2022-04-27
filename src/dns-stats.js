const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    let stat = {};
    domains.forEach(d => {
        let levels = d.split(".").reverse();
        let partial = "";
        levels.forEach(l => {
            partial += "." + l;
            if (!stat[partial]) { stat[partial] = 0; }
            stat[partial] += 1;
        });
    });
    return stat;
}

module.exports = {
  getDNSStats
};
