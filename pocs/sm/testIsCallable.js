var IsCallable = getSelfHostedValue("IsCallable");

function testSinglePrimitive() {
  var f1 = function() { print(IsCallable(undefined), false); };
  do { f1(); } while (!inIon());

  var f2 = function() { print(IsCallable(null), false); };
  do { f2(); } while (!inIon());

  var f3 = function() { print(IsCallable(true), false); };
  do { f3(); } while (!inIon());

  var f4 = function() { print(IsCallable(1), false); };
  do { f4(); } while (!inIon());

  var f5 = function() { print(IsCallable(1.2), false); };
  do { f5(); } while (!inIon());

  var f6 = function() { print(IsCallable("foo"), false); };
  do { f6(); } while (!inIon());

  var f7 = function() { print(IsCallable(Symbol.iterator), false); };
  do { f7(); } while (!inIon());
}
testSinglePrimitive();

function testMixedPrimitive() {
  var list = [
    undefined,
    null,
    true,
    1,
    1.2,
    "foo",
    Symbol.iterator,
  ];

  var f1 = function() {
    for (let x of list) {
      print(IsCallable(x), false);
    }
  };
  do { f1(); } while (!inIon());
}
testMixedPrimitive();

function testSingleObject() {
  var obj = [];
  var arr = [];

  var f1 = function() { print(IsCallable(obj), false); };
  do { f1(); } while (!inIon());

  var f2 = function() { print(IsCallable(arr), false); };
  do { f2(); } while (!inIon());
}
testSingleObject();

function testMixedPrimitiveAndObject() {
  var list = [
    undefined,
    null,
    true,
    1,
    1.2,
    "foo",
    Symbol.iterator,

    {},
    [],
  ];

  var f1 = function() {
    for (let x of list) {
      print(IsCallable(x), false);
    }
  };
  do { f1(); } while (!inIon());
}
testMixedPrimitiveAndObject();

function testFunction() {
  var f1 = function() { print(IsCallable(Function), true); };
  do { f1(); } while (!inIon());

  var f2 = function() { print(IsCallable(parseInt), true); };
  do { f2(); } while (!inIon());
}
testFunction();

function testProxy() {
  var p1 = new Proxy({}, {});
  var f1 = function() { print(IsCallable(p1), false); };
  do { f1(); } while (!inIon());

  var p2 = new Proxy(function() {}, {});
  var f2 = function() { print(IsCallable(p2), true); };
  do { f2(); } while (!inIon());
}
testProxy();

function testMixed() {
  var p1 = new Proxy({}, {});
  var p2 = new Proxy(function() {}, {});

  var list = [
    [undefined, false],
    [null, false],
    [true, false],
    [1, false],
    [1.2, false],
    ["foo", false],
    [Symbol.iterator, false],

    [{}, false],
    [[], false],

    [Function, true],
    [parseInt, true],

    [p1, false],
    [p2, true],
  ];

  var f1 = function() {
    for (let [x, expected] of list) {
      print(IsCallable(x), expected);
    }
  };
  do { f1(); } while (!inIon());
}
testMixed();
