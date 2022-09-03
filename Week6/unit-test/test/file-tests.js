var chai = require('chai');
var expect = chai.expect;

// var expect = require('expect');

function isTheSame(input1,input2) {
    return input1 === input2
}

describe('MyFunctions', function() {
    describe('#isTheSame', function() {
        it("should return true", function() {
            var a = isTheSame(1, 1);
            expect(a).to.be.true;
        });
        
        it("should return false",function() {
            var b = isTheSame(2,3);
            expect(b).to.be.false;
        });
    });
});