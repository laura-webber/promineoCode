var expect = chai.expect;

describe('MyFunctions', function() {
    describe('#createPlayer', function(name) {
        it("should return a string with the player's name", function() {
            var player1 = createPlayer("Bob");
            expect(player1.theirName).to.be.equal("Bob");
        });
        
        it("should return true",function() {
            var player1 = createPlayer("Bob");
            expect(player1.theirScore).to.be.equal(0);
        });

        it("should fail because data type must be an object", function(){
            var player1 = "Bob";
            expect(typeof(player1)).to.be.equal("object");
        })
    });
});