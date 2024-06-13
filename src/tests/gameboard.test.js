const Gameboard = require("../modules/gameboard");

test("creates ships", () => {
  const g = new Gameboard();
  g.createShips()
  expect(g.ships.length).toBe(5);
});
test("places a ship", () => {
  const g = new Gameboard();
  g.createShips()
  g.placeShip(0,[9,0],'x')
  expect(g.board[5][0].ship).toBe(0);
})
test("hits and sinks", () => {
  const g = new Gameboard();
  g.createShips()
  g.placeShip(0,[9,0],'x')
  g.receiveAttack([9,0])
  expect(g.ships[0].timesHit).toBe(1);
  g.receiveAttack([9,0])
  expect(g.ships[0].timesHit).toBe(2);
  g.receiveAttack([9,0])
  expect(g.ships[0].timesHit).toBe(3);
  g.receiveAttack([9,0])
  expect(g.ships[0].timesHit).toBe(4);
  expect(g.ships[0].sunk).toBe(false);
  g.receiveAttack([9,0])
  expect(g.ships[0].timesHit).toBe(5);
  expect(g.ships[0].sunk).toBe(true);
})
test("finishes", () => {
  const g = new Gameboard();
  g.createShips()
  g.placeShip(4,[9,0],'x')
  g.receiveAttack([9,0])
  expect(g.ships[4].timesHit).toBe(1);
  expect(g.ships[4].sunk).toBe(false);
  g.ships[0].sunk=true
  g.ships[1].sunk=true
  g.ships[2].sunk=true
  g.ships[3].sunk=true
  expect(g.ships[1].sunk).toBe(true);
  expect(g.ships[2].sunk).toBe(true);
  expect(g.ships[3].sunk).toBe(true);
  expect(g.ships[0].sunk).toBe(true);
  g.receiveAttack([9,0])
  expect(g.ships[4].timesHit).toBe(2);
  expect(g.ships[4].sunk).toBe(true);

  expect(g.allSunk).toBe(true);


})