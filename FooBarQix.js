var output = '';

const cases = {
    Foo: 3,
    Bar: 5,
    Qix: 7,
};

var clearOutput = function () {
    this.output = '';
};

var FooBarQix = function (number, ourCase) {
    if (number % cases[ourCase] === 0) {
        this.output += ourCase;
    }
    const numberInChar = number.toString().split('');
    numberInChar.forEach(c => {
        if (c === cases[ourCase].toString()) {
            this.output += ourCase;
        }
    });
    return this.output;
};

module.exports = { cases, clearOutput, output, FooBarQix };
