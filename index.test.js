var should = require("should");
var user = require("./index");
console.log(user);
describe("Checking if the user is created correctly", function () {
    it("should create the user with the correct name", function () {
        var tom = new user.User("tom");
        tom.name.should.be.equal("tom");
    });
});