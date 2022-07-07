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

// class Deck {
//     constructor(suit, value){
//         this.suit = suit;
//         this.value = value;
//     }
// }


// class Deck {
//     constructor(){
//         this.length = 52;
//         this.data = {"Ace", ""};
//     }
// }

var suits = ["hearts", "clubs", "diamonds", "spades"]
var ranks = ["A","2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
var deck = []

for(counter = 0; counter < suits.length; counter++){
    for(i = 0; i < ranks.length; i++){
        deck.push((ranks[i] + " of " + suits[counter]))
    }
}

console.log(deck)

