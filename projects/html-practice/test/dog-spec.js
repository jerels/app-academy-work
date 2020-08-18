const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);
const Dog = require("../problems/dog");

describe("Dog", function () {
    let layla;

    beforeEach("set up a dog instance", function () {
        layla = new Dog("Layla");
    });

    describe("Dog Constructor Function", function () {
        it("should have a name property", function () {
            expect(layla).to.have.property("name");
        });

        it("should set the name property when a new dog is created", function () {
            expect(layla.name).to.eql("Layla");
        });
    });

    describe("prototype.bark()", function () {
        it("should return a string with the name of the dog barking", function () {
            expect(layla.bark()).to.eql("Layla is barking");
        });
    });

    describe("prototype.chainChaseTail()", function () {
        context("with an invalid parameter", function () {
            expect(() => layla.chainChaseTail("3")).to.throw(TypeError);
        });
        context("with a valid number parameter", function () {
            it("should call the chaseTail method n times", function () {
                const chaseTailSpy = chai.spy.on(layla, "chaseTail");

                layla.chainChaseTail(3);
                expect(chaseTailSpy).to.have.been.called.exactly(3);
            });
        });
    });

    describe("cleanDogs()", function () {
        it("should return an array of each cleaned dog string", function () {
            const zoey = new Dog("Zoey");
            let cleanDogsArray = Dog.cleanDogs([layla, zoey]);
            let result = ["I cleaned Layla's paws.", "I cleaned Zoey's paws."];

            expect(cleanDogsArray).to.eql(result);
        });
    });
});