const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
    links: [],
    _normalize(v) {
        if (v === undefined) { return ""; }
        if (v === null) { return "null"; }
        return "" + v;
    },
    getLength() {
        return this.links.length;
    },
    addLink(v) {
        this.links.push(this._normalize(v));
        return this;
    },
    removeLink(i) {
        if (typeof i != "number" || i <= 0 || i >= this.links.length) {
            this.links = [];
            throw Error("You can't remove incorrect link!");
        }
        this.links.splice(i-1, 1);
        return this;
    },
    reverseChain() {
        this.links.reverse();
        return this;
    },
    finishChain() {
        let repr = this.links.map(x => `( ${x} )`).join("~~");
        this.links = [];
        return repr;
    }
};

module.exports = {
  chainMaker
};
