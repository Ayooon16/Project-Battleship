class Ship {
  constructor(shipName, shiplength) {
    this.name = shipName;
    this.length = shiplength;
    this.sunk = false;
    this.timesHit = 0;
  }

  hit() {
    this.timesHit += 1;
    if (this.length === this.timesHit) this.sink();
  }

  sink() {
    this.sunk = true;
  }
}

module.exports = Ship;
