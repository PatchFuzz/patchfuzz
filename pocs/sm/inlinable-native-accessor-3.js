var window = newGlobal({useWindowProxy: true});




window.eval(`
var window = this;


Object.defineProperty(window, "random", {
  get: Math.random,
});

function testRandom() {
  for (var i = 0; i < 100; ++i) {
    var r = window.random;
    print(0 <= r && r < 1, true);
  }
}
testRandom();
`);
