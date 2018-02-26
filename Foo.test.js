var should = require("should");
var app = require("./Foo");

describe("Checking if the output is FooFoo when 3 is passed to Foo function", function () {
    it("should modify the output to FooFoo", function () {
        app.clearOutput();
        app.Foo(3);
        app.output.should.be.equal("FooFoo");
    });
});

describe("Checking if the output is FooFooFoo when 33 is passed to Foo function", function () {
    it("should modify the output to FooFooFoo", function () {
        app.Foo(33);
        app.output.should.be.equal("FooFooFoo");
    });
});

describe("Checking if the output is empty when 1 is passed to Foo function", function () {
    it("should not modify the output", function () {
        app.clearOutput();
        app.Foo(1);
        app.output.should.be.equal("");
    });
});