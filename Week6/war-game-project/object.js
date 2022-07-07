class Player{
    constructor(name){
        this.theirName = name;
    }

    createPlayer(){
        var player = new Player(prompt("What's your name?"))
        player.theirScore = 0
        return player
    }
    
}

class Deck {
    constructor(suit, value){
        this.cardSuit = suit;
        this.cardValue = value;
    }

    createDeck(){
        var deckOfCards = []
        var suits = ["hearts", "clubs", "diamonds", "spades"]
        var ranks = ["Ace","2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
        for(var counter = 0; counter < suits.length; counter++){
            for(var i = 0; i < ranks.length; i++){
                deckOfCards.push((ranks[i]+ " of " + suits[counter]))
            }
        }

        console.log(deckOfCards)
        // return deckOfCards
    }

    shuffleDeck(){
        var shuffledCards = []
    }

    splitDeck(){

    }

    
}


class War extends Player{
    constructor(name, score){
        super(name);
        this.theirScore = score
        
    }


    start(){
        var player1 = this.createPlayer()
        var player2 = this.createPlayer()
        var deck = new Deck()
        deck.createDeck()

        console.log(player1)

        console.log(player2)

        

    }
    
    
}

var newGame = new War();
newGame.start()





// console.log(typeof(object1))
// console.log((object1.name))
// console.log((object1.score))

// show(){
//     console.log(`Player ${this.playername}`)

// }