var expect = chai.expect;

describe('MyFunctions', function() {
    describe('#isTheSame', function() {
        it("should return true", function(){
            var a = isTheSame(1, 1);
            expect(a).to.be.true;
        });
        
        it("should return false",function(){
            var b = isTheSame(2,3);
            expect(b).to.be.false;
        });
    });
});