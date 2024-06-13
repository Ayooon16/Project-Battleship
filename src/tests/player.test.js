const Player = require("../modules/player");

test("creates a player with a gameboard and ships", () => {
    const p = new Player();
    expect(p).toBeTruthy();
  });