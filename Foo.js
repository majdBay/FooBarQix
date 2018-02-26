var output = '';

var clearOutput = function () {
    this.output = '';
}

var Foo = function (number) {
    if (number % 3 === 0) {
        this.output += 'Foo';
    }
    const numberInChar = number.toString().split();
    numberInChar.forEach(c => {
        if (c === '3') {
            this.output += 'Foo';
        }
    });
};

module.exports = { clearOutput, output, Foo };
