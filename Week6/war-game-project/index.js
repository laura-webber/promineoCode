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

    splitDeck(cards, index){
        var playerCards = [];

        while(playerCards.length < 26){
            var card = cards.splice(index,1)
            playerCards.push(card)  
        }

        // player2Cards = shuffledCards;
        return playerCards
    }

    
}


class War extends Player{
    constructor(name, score){
        super(name);
        this.theirScore = score
        
    }

    getfirstChar(player1Cards, player2Cards, index){
        var playersHands = []
        var player1Hand = player1Cards.map(element =>{return element[index]})
        var player2Hand = player2Cards.map(element => {return element[index]})

        playersHands.push(player1Hand)
        playersHands.push(player2Hand)
        
        return playersHands

    }

    compareHands(playersHands,player1Cards, player2Cards, player1, player2){
        player1.theirScore
        console.log(player1Cards, player2Cards)
        console.log(playersHands)

        var hand1 = [];
        var hand2 = [];

        hand1 = playersHands[0].map(item => {
            switch(item){
                case "1":
                    return 10;
                    break;
                case "J":
                    return 11;
                    break;
                case "Q":
                    return 12;
                    break;
                case "K":
                    return 13;
                    break;
                case "A":
                    return 14;
                default:
                    return Number(item)
            }
            
        })

        hand2 = playersHands[1].map(item => {
            switch(item){
                case "1":
                    return 10;
                    break;
                case "J":
                    return 11;
                    break;
                case "Q":
                    return 12;
                    break;
                case "K":
                    return 13;
                    break;
                case "A":
                    return 14;
                default:
                    return Number(item)
            }
            
        })

        

         for(var i = 0; i < 26; i++){
             console.log("Player 1  Player 2\n" + 
             `${player1Cards[i]}         ${player2Cards[i]}`)
            if (hand1[i] > hand2[i]){
                console.log(player1.theirName + " WINS round " + (i+1))
                player1.theirScore++
            } else if(hand1[i] < hand2[i]){
                console.log(player2.theirName + " WINS round " + (i+1))
                player2.theirScore++
            }else{
                console.log("It's a TIE!")
            }

         }


         if(player1.theirScore > player2.theirScore)
         {
             console.log(player1.theirName + " WON the game    " + player1.theirScore + "  -  " + player2.theirScore)      
         } else if(player1.theirScore < player2.theirScore){
            console.log(player2.theirName + " WON the game     " + player2.theirScore + "  -  " + player1.theirScore)
         } else
            console.log("They tied    " + player1.theirScore + "  -  " + player2.theirScore)
     }

    start(){
        var player1 = this.createPlayer('Player 1')
        var player2 = this.createPlayer('Player 2')
        var index = 0;
        var deckOfCards = new Deck()
        var a = deckOfCards.createDeck()
        var shuffled = deckOfCards.shuffleDeck(a)
        var player1Cards = deckOfCards.splitDeck(shuffled, 0)
        player1Cards = player1Cards.map(item => {return item[0]})
        var player2Cards = shuffled

        var playersHands = this.getfirstChar(player1Cards, player2Cards, 0)

        var b = this.compareHands(playersHands, player1Cards, player2Cards, player1, player2)

    }
    
    
}

var newGame = new War();
newGame.start()

