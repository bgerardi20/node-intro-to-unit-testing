const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');


// unit tests for our `adder` function
describe('fizzBuzzer', function () {

    // test the normal case
    it('should return "fizz-buzz" if it\'s a multiple of 15', function () {
        [15, 30, 45, 60].forEach(function (input) {
            fizzBuzzer(input).should.equal('fizz-buzz');
        });
    });

    it('should return "buzz" if it\'s a multiple of 5', function () {
        [5, 10, 15, 20].forEach(function (input) {
            fizzBuzzer(input).should.equal('buzz');
        });
    });

    it('should return "fizz" if it\'s a multiple of 3', function () {
        [3, 6, 9, 12].forEach(function (input) {
            fizzBuzzer(input).should.equal('fizz');
        });
    });

    it('should return number if it\'s not a multiple of 3 or 5', function () {
        [1, 2, 7, 11].forEach(function (input) {
            fizzBuzzer(input).should.equal('input');
        });
    });

    it('should produce an error if input isn\'t a number', function () {
        const badInputs = [true, false, 'cat', function () {}, [1, 2, 3]]
        badInputs.forEach(function (input) {
            (function () {
                fizzBuzzer(input)
            }).should.throw(error)
        });
    });
});
