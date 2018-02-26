var should = require("should");
var app = require("./Game");

describe("Checking if the output is '1 2 FooFoo' when 1, 3 are passed", function () {
    it("should modify the output to '1 2 FooFoo'", function () {
        app.clearOutput();
        app.playGame(1, 3);
        app.gameOutput.should.be.equal("1 2 FooFoo");
    });
});

describe("Checking if the output is '1 2 FooFoo 4 BarBar Foo QixQix 8 Foo Bar 11 Foo Foo Qix FooBarBar' when 1, 15 are passed", function () {
    it("should modify the output to '1 2 FooFoo 4 BarBar Foo QixQix 8 Foo Bar 11 Foo Foo Qix FooBarBar'", function () {
        app.clearOutput();
        app.playGame(1, 15);
        app.gameOutput.should.be.equal("1 2 FooFoo 4 BarBar Foo QixQix 8 Foo Bar 11 Foo Foo Qix FooBarBar");
    });
});
