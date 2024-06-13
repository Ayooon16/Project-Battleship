const Ship = require("./ship");

class Gameboard {
  constructor() {
    this.board = new Array(10)
      .fill("x")
      .map(() => new Array(10).fill({ hit: false, ship: false }));
    this.shipsTemplate = [
      ["carrier", 5],
      ["battleship", 4],
      ["cruiser", 3],
      ["submarine", 3],
      ["destroyer", 2],
    ];
    this.ships = [];
    this.allSunk = false;
  }

  createShips() {
    this.shipsTemplate.forEach((element) => {
      this.ships.push(new Ship(element[0], element[1]));
    });
    return this.ships;
  }

  receiveAttack(cords) {
    const cordx = cords[0];
    const cordy = cords[1];
    this.board[cordx][cordy].hit = true;
    if (this.board[cordx][cordy].ship !== false) {
      this.ships[this.board[cords[0]][cords[1]].ship].hit();
      this.isFinished();
    }
  }

  isFinished() {
    let finished = false;
    this.ships.forEach((element) => {
      if (element.sunk === true) {
        finished = true;
      }
    });
    if (finished) this.allSunk = true;
  }

  placeShip(id, cords, axis) {
    const { length } = this.ships[id];
    let cordx = cords[0];
    let cordy = cords[1];
    let outofbounds = false;
    if (axis === "x") {
      for (let i = length; i > 0; i--) {
        if (!outofbounds) {
          this.board[cordx][cordy].ship = id;
          cordx += 1;
          if (cordx === 10) {
            outofbounds = true;
            cordx = cords[0] - 1;
          }
        } else {
          this.board[cordx][cordy].ship = id;
          cordx -= 1;
        }
      }
    } else {
      for (let i = length; i > 0; i--) {
        if (!outofbounds) {
          this.board[cordx][cordy].ship = id;
          cordy += 1;
          if (cordy === 10) {
            outofbounds = true;
            cordy = cords[0] - 1;
          }
        } else {
          this.board[cordx][cordy].ship = id;
          cordy -= 1;
        }
      }
    }
  }
}
module.exports = Gameboard;
