class Player{
    constructor(name){
        this.theirName = name;
    }

    createPlayer(name){
        var player = new Player()
        player.theirName = name
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
        var suits = ["hearts", "clubs", "diamonds", "spades"]
        var ranks = ["Ace","2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
        var deck = []


        for(var counter = 0; counter < suits.length; counter++){
            for(var i = 0; i < ranks.length; i++){
                deck.push((ranks[i]+ " of " + suits[counter]))
            }
    } return deck      
}

    shuffleDeck(deck){
        var shuffledCards = []
        while(shuffledCards.length < 52){
            var card = deck[Math.floor(Math.random()*deck.length)]
            if(!shuffledCards.includes(card)){
                shuffledCards.push(card)
            }
        }
        return shuffledCards
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
        var player1 = this.createPlayer('Player 1')
        var player2 = this.createPlayer('Player 2')
        var deckOfCards = new Deck()
        var a = deckOfCards.createDeck()
        var shuffled = deckOfCards.shuffleDeck(a)

        console.log(shuffled)

        // console.log(a)
        // console.log(shuffled)        

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