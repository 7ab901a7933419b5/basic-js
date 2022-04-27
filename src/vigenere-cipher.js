const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

const ord = x => x.charCodeAt(0);
const ordA = ord("a"), ordZ = ord("z");

class VigenereCipheringMachine {
    constructor(isDirect=true) {
        this._postEdit = isDirect ? s => s : s => s.split("").reverse().join("");
    }
    _encode(x, y) {
        return String.fromCharCode(ordA + (ord(x) + ord(y) - 2 * ordA) % 26);
    }
    _decode(x, y) {
        return String.fromCharCode(ordA + ord(x) - ord(y) + 26 * +(ord(x) < ord(y)));
    }
    _process(s, key, codingFunc) {
        if (!(typeof s == "string" && typeof key == "string")) {
            throw Error("Incorrect arguments!");
        }
        let i = 0;
        s = s.toLowerCase(), key = key.toLowerCase();
        return s.split("").map(c => {
                if (ord(c) < ordA || ord(c) > ordZ) { return c; }
                return codingFunc(c, key.charAt(i++ % key.length));
            }).join("").toUpperCase();
    }
    encrypt(s, key) { return this._postEdit(this._process(s, key, this._encode)); }
    decrypt(s, key) { return this._postEdit(this._process(s, key, this._decode)); }
}

module.exports = {
  VigenereCipheringMachine
};
