function testCongruent(i) {
  var p = {};
  var o = {
    
    
    toString: Object.prototype.toString,

    
    
    __proto__: p,
  };
  var xs = [{}, p];
  var ys = ["[object Object]", "[object Test]"];

  for (var j = 0; j <= 100; ++j) {
    
    var x = xs[(i === 1 && j === 100)|0];
    var y = ys[(i === 1 && j === 100)|0];

    
    
    var r = o.toString();
    x[Symbol.toStringTag] = "Test";
    var e = o.toString();

    print(r, "[object Object]");
    print(e, y);
  }
}
for (var i = 0; i < 2; ++i) testCongruent(i);

function testUnobserved(i) {
  var p = {};
  var o = {
    
    
    toString: Object.prototype.toString,

    
    
    __proto__: p,
  };
  var xs = [{}, p];
  var ys = [false, true];

  for (var j = 0; j <= 100; ++j) {
    
    var x = xs[(i === 1 && j === 100)|0];
    var y = ys[(i === 1 && j === 100)|0];

    var executed = false;
    Object.defineProperty(x, Symbol.toStringTag, {
      configurable: true,
      get() {
        executed = true;
      }
    });

    
    o.toString();

    print(executed, y);
  }
}
for (var i = 0; i < 2; ++i) testUnobserved(i);
