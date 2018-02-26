var should = require("should");
var app = require("./FooBarQix");

describe("Checking if the output is FooFoo when 3 is passed with Foo case", function () {
    it("should modify the output to FooFoo", function () {
        app.clearOutput();
        app.FooBarQix(3, 'Foo');
        app.output.should.be.equal("FooFoo");
    });
});

describe("Checking if the output is FooFooFoo when 33 is passed with Foo case", function () {
    it("should modify the output to FooFooFoo", function () {
        app.clearOutput();        
        app.FooBarQix(33, 'Foo');
        app.output.should.be.equal("FooFooFoo");
    });
});

describe("Checking if the output is empty when 1 is passed with Foo case", function () {
    it("should not modify the output", function () {
        app.clearOutput();
        app.FooBarQix(1, 'Foo');
        app.output.should.be.equal("");
    });
});

describe("Checking if the output is empty when 1 is passed with Bar case", function () {
    it("should not modify the output", function () {
        app.clearOutput();
        app.FooBarQix(1, 'Bar');
        app.output.should.be.equal("");
    });
});

describe("Checking if the output is BarBar when 5 is passed with Bar case", function () {
    it("should modify the output to BarBar", function () {
        app.clearOutput();
        app.FooBarQix(5, 'Bar');
        app.output.should.be.equal("BarBar");
    });
});

describe("Checking if the output is Bar when 0 is passed with Bar case", function () {
    it("should modify the output to Bar", function () {
        app.clearOutput();
        app.FooBarQix(0, 'Bar');
        app.output.should.be.equal("Bar");
    });
});

describe("Checking if the output is BarBarBar when 55 is passed with Bar case", function () {
    it("should modify the output to BarBarBar", function () {
        app.clearOutput();
        app.FooBarQix(55, 'Bar');
        app.output.should.be.equal("BarBarBar");
    });
});

describe("Checking if the output is BarQix when 57 is passed with Bar and Qix case", function () {
    it("should modify the output to BarQix", function () {
        app.clearOutput();
        app.FooBarQix(57, 'Bar');
        app.FooBarQix(57, 'Qix');
        app.output.should.be.equal("BarQix");
    });
});