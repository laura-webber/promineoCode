// Here I created a class player with a method to create a new player

class Player{
    constructor(name){
        this.theirName = name;
    }

    // this method creates a player object with two properties: name and score. And returns that object
    createPlayer(name){
        var player = new Player()
        player.theirName = name
        player.theirScore = 0
        return player
    }
    
}

// In this class Deck, I created 3 unique methods: createDeck(), shuffleDeck() and splitDeck()
class Deck {

    // This method will iterate through 2 sets of arrays and store the result into a new array object called deck and returns it
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

    // This method receives a deck of cards as a parameter, then creates a new array object and selects a random index number from 0 to 52 to pull an element from the passed deck of cards 
    // an stores that element in the new shuffledCards array.
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

    // This method receives an array containing cards and a number that functions as an index to tell the method splice() where to start. 
    // It then creates a new array with half of the cards of the passed array and returns it
    splitDeck(cards, index){
        var playerCards = [];

        while(playerCards.length < 26){
            var card = cards.splice(index,1)
            playerCards.push(card)  
        }

        return playerCards
    }    
}

// This class has 3 methods: getFirstChar(), compareHands() and start(). Inside this class is where the game of war happens
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
            if (hand1[i] > hand2[i]){
                console.log("Player 1           Player 2\n\n" + 
             `${player1Cards[i]}         ${player2Cards[i]}\n\n`+
                player1.theirName + " WINS round " + (i+1) + "\n")
                player1.theirScore++
            } else if(hand1[i] < hand2[i]){
                console.log("Player 1           Player 2\n\n" + 
             `${player1Cards[i]}         ${player2Cards[i]}\n\n`+
                player2.theirName + " WINS round " + (i+1) + "\n")
                player2.theirScore++
            }else{
                console.log("Player 1           Player 2\n\n" + 
             `${player1Cards[i]}         ${player2Cards[i]}\n\n` +
                "It's a TIE!")
            }

         }


         if(player1.theirScore > player2.theirScore)
         {
             console.log("\n" +player1.theirName + " WON the game    " + player1.theirScore + "  -  " + player2.theirScore)      
         } else if(player1.theirScore < player2.theirScore){
            console.log("\n" +player2.theirName + " WON the game     " + player2.theirScore + "  -  " + player1.theirScore)
         } else
            console.log("\nThey tied    " + player1.theirScore + "  -  " + player2.theirScore)
     }

    // This method creates 2 Player objects and calls the class Deck() to create a deck of cards, shuffle the cards, split the cards in half and store 2 arrays, one for each player's cards.
    // It then creates 2 other arrays with only the first character of the playersCards array
    // It calls the method compare to compare each player's hands 
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

// Here I start the game by creating an instance of the class War and storing it inside the newGame variable. Then I call the method start() to start the game.
var newGame = new War();
newGame.start()

