const Game = require("../modules/game");

test("creates game", () => {
  const g = new Game();
  expect(g.player1).toBeTruthy();
  expect(g.player2).toBeTruthy();
  expect(g.player3).toBeFalsy();
});