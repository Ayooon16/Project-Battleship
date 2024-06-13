const Ship = require("../modules/ship");

test("creates a ship", () => {
  const s = new Ship("boat", 2);
  expect(s).toEqual({ name: "boat", length: 2, sunk: false, timesHit: 0 });
});
test("hits", () => {
  const s = new Ship("boat", 2);
  s.hit();
  expect(s).toEqual({ name: "boat", length: 2, sunk: false, timesHit: 1 });
});
test("sinks", () => {
  const s = new Ship("boat", 1);
  s.hit();
  expect(s).toEqual({ name: "boat", length: 1, sunk: true, timesHit: 1 });
});
