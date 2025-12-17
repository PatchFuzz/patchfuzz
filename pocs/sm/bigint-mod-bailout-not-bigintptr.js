function testBailout() {
  function f(v, r) {
    for (var i = 0; i < 50; ++i) {
      
      if (i === 0) {
        r();
      }
      1_0000_0000_0000_0000n % v;
      1_0000_0000_0000_0000n % v;
      1_0000_0000_0000_0000n % v;
    }
  }

  var result = [];
  function r() {
    result.push("ok");
  }

  do {
    result.length = 0;
    try {
      f(1n, r);
      f(1n, r);
      f(0n, r);
    } catch (e) {}
    print(result.length, 3);
  } while (!inIon());
}
testBailout();
