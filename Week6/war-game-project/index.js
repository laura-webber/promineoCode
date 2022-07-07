// War card game

// Deal 26 Cards to two Players from a Deck. 
// Iterate through the turns where each Player plays a Card
// The Player who played the higher card is awarded a point
// Ties result in zero points for either Player
// After all cards have been played, display the score.
// Write a Unit Test using Mocha and Chai for at least one of the functions you write.


class Player{
    constructor(player){
        this.player = player;
    }
}

class Deck {
    constructor(suit, value){
        this.suit = suit;
        this.value = value;
    }
}