var gameOutput = '';
var FooBarQix = require('./FooBarQix');

var clearOutput = function () {
    this.gameOutput = '';
};

var playGame = function (start, end) {
    for (let index = start; index <= end; index++) {
        const cases = Object.keys(FooBarQix.cases);
        let oldOutput = this.gameOutput;
        cases.forEach(element => {
            FooBarQix.clearOutput();
            this.gameOutput += FooBarQix.FooBarQix(index, element);
        });
        if (this.gameOutput === oldOutput) {
            this.gameOutput += index;
        }
        if (index != end) {
            this.gameOutput += ' ';
        }
    }
};

module.exports = { playGame, clearOutput, gameOutput };
