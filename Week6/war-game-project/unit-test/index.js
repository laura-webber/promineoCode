class Player{
    constructor(name){
        this.theirName = name;
    }
}

function createPlayer(name){
    var player = new Player()
    player.theirName = name
    player.theirScore = 0
    return player
}

