var expect = require('expect');

describe('MyFunctions', function() {
    describe('#isTheSame', function() {
        it("should return true", function(){
            var a = isTheSame(1, 1);
            expect(a).to.be.true;
        });
        
        it("should return false",function(){
            var b = isTheSame(2,2);
            expect(b).to.be.false;
        });
    });
});