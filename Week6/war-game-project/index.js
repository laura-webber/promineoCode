// War card game

// Deal 26 Cards to two Players from a Deck. 
// Iterate through the turns where each Player plays a Card
// The Player who played the higher card is awarded a point
// Ties result in zero points for either Player
// After all cards have been played, display the score.
// Write a Unit Test using Mocha and Chai for at least one of the functions you write.


// class Player{
//     constructor(player){
//         this.player = player;

//     }
// }




// class Deck {
//     constructor(suit, rank){
        
//     }


//     shuffleDeck(){

//     }

//     splitDeck(){

//     }
// }

// class War{

//     prepareGame(){
//         var suits = ["hearts", "clubs", "diamonds", "spades"]
//         var ranks = ["Ace","2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
//         var deck = []
//         var shuffledCards = []

//         for(counter = 0; counter < suits.length; counter++){
//             for(i = 0; i < ranks.length; i++){
//                 deck.push((ranks[i] + " of " + suits[counter]))
//             }
//         }
//     }

    
//     startGame(){

//     }

// }




var suits = ["hearts", "clubs", "diamonds", "spades"]
var ranks = ["14","2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"]
var deck = []
var shuffledCards = []

for(counter = 0; counter < suits.length; counter++){
    for(i = 0; i < ranks.length; i++){
        deck.push((ranks[i]+ " of " + suits[counter]))
    }
}
    
        while(shuffledCards.length < 52){
            var card = deck[Math.floor(Math.random()*deck.length)]
            // console.log(card)
            if(!shuffledCards.includes(card)){
                shuffledCards.push(card)
            }
        }

// Shuffling the cards
// console.log(shuffledCards)

var player1 = [];
var player2 = [];

while(player1.length < 26){
    var card = shuffledCards.splice(0,1)
    player1.push(card)  
}

player2 = shuffledCards;


// var player1ranks = player1.map(element => {
//     return Number(element);
// });
// var player2ranks = player2.map(element => {
//     return Number(element);
// });



// cards each player was dealt

// console.log(player1)
// console.log(player2)


// Displays each turn
// for(i = 0; i < 25; i++){
//     console.log(`Player1: ${player1[i]}    `      +    `Player2: ${player2[i]}`)
// }


// Displays each turn with ranks instead of strings

for(i = 0; i < 25; i++){
    
    console.log(`Player1: ${player1[i]}    `      +    `Player2: ${player2[i]}`)
}
