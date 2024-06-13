const Player = require("./player");

class Game {
    constructor(){
    this.player1=new Player('Player')
    this.player2=new Player('Computer')
}
}
module.exports = Game;
